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

module.exports = { plantsMiddleware };
