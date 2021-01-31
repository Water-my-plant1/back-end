require("dotenv").config();
const {
  createPlantsExpectedFields,
  udpatePlantExpectedFields,
} = require("./plants.expectedFields");
const {
  throwMissingFieldsError,
  checkEmptyFields,
  characterLimit,
} = require("../validators/shared.validators");

const plantsMiddleware = async (req, res, next) => {
  const { method } = req;
  try {
    switch (method) {
      case "POST": {
        throwMissingFieldsError(
          createPlantsExpectedFields,
          Object.keys(req.body)
        )(req, res);
        checkEmptyFields(createPlantsExpectedFields)(req, res);
        characterLimit(req.body)(req, res);

        break;
      }
      case "PUT": {
        throwMissingFieldsError(
          udpatePlantExpectedFields,
          Object.keys(req.body)
        )(req, res);
        checkEmptyFields(udpatePlantExpectedFields)(req, res);
        characterLimit(req.body)(req, res);
        break;
      }
    }
  } catch (error) {
    return error;
  }
  next();
};

module.exports = { plantsMiddleware };
