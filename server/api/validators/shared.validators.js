// Adding validations any post or put request that the users sends to the API server.

const throwMissingFieldsError = (expected, given) => (req, res) => {
  const missingExpectedFields = expected.filter((num) => !given.includes(num));

  if (missingExpectedFields.length > 0) {
    throw res.status(400).json({
      message: "You're missing one or more fields from the request.",
      missingExpectedFields,
    });
  }
};

const checkEmptyFields = (fields) => (req, res) => {
  const emptyFields = [];

  if (Object.keys(req.body).length === 0) {
    throw res.status(400).json({ message: "There are no fields given " });
  }

  for (let i = 0; i < fields.length; i++) {
    if (req.body[fields[i]] === "") {
      emptyFields.push(fields[i]);
    }
  }

  if (emptyFields.length > 0) {
    throw res
      .status(400)
      .json({ message: "One or more fields are empty.", emptyFields });
  }
};

const characterLimit = (fields) => (req, res) => {
  const keys = Object.keys(fields);
  const catchedFields = [];

  for (let i = 0; i < keys.length; i++) {
    const value = fields[keys[i]];
    if (value.length > 255 && typeof value === "string") {
      catchedFields.push(keys[i]);
    }
  }

  if (catchedFields.length > 0) {
    throw res.status(400).json({
      message: "You've reched the 255 chracter limit for the following fields.",
      fields: catchedFields,
    });
  }
};

module.exports = {
  checkEmptyFields,
  throwMissingFieldsError,
  characterLimit,
};
