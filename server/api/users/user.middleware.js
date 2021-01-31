const { checkUserExist } = require("../validators/database.validators");
const {
  registerExpectedFields,
  loginExpectedFields,
  updateProfileExpectedFields,
} = require("./user.expectedFields");
const {
  throwMissingFieldsError,
  checkEmptyFields,
  characterLimit,
} = require("../validators/shared.validators");

module.exports = async (req, res, next) => {
  const { method, path } = req;
  try {
    // This switch statement identifies which method is being sent from the request

    if (Object.keys(req.body).length <= 0) {
      throw res.status(400).json({ message: "No body given" });
    }

    switch (method) {
      case "POST": {
        // This switch statement identifies the specific path that user is requesting from.
        switch (path) {
          case "/register": {
            await checkUserExist(req, res);
            throwMissingFieldsError(
              registerExpectedFields,
              Object.keys(req.body)
            )(req, res);
            checkEmptyFields(registerExpectedFields)(req, res);
            break;
          }
          case "/login": {
            await checkUserExist(req, res);
            throwMissingFieldsError(loginExpectedFields, Object.keys(req.body))(
              req,
              res
            );
            checkEmptyFields(loginExpectedFields)(req, res);
          }
        }

        characterLimit(req.body)(req, res);

        break;
      }
      case "PUT": {
        await checkUserExist(req, res);
        throwMissingFieldsError(
          updateProfileExpectedFields,
          Object.keys(req.body)
        );
        checkEmptyFields(updateProfileExpectedFields, Object.keys(req.body));
        characterLimit(req.body)(req, res);
        break;
      }
    }
  } catch (error) {
    return error;
  }
  next();
};
