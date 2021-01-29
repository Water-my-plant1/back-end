require("dotenv").config();
const jwt = require("jsonwebtoken");

const { createPlantsExpectedFields } = require("./plants.expectedFields");
const {
  throwMissingFieldsError,
  checkEmptyFields,
  characterLimit,
} = require("../validators/shared.validators");

const plantsMiddleware = (req, res, next) => {
  const { method } = req;
  try {
    switch (method) {
      case "POST":
        throwMissingFieldsError(
          createPlantsExpectedFields,
          Object.keys(req.body)
        )(req, res);
        checkEmptyFields(createPlantsExpectedFields)(req, res);
        characterLimit(req.body)(req, res);

        break;
    }
  } catch (error) {
    return error;
  }
  next();
};

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw res.status(400).json({ message: "No token provided" });
    }

    const authenticatedUser = jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, decoded) => {
        if (err) {
          throw res.status(400).json({ message: "Invalid token" });
        }
        return decoded;
      }
    );

    req.user = authenticatedUser;
  } catch (error) {
    return error;
  }
  next();
};

module.exports = { plantsMiddleware, authenticateUser };
