const db = require("../../../data/dbconfig");

const checkUserExist = async (req, res) => {
  let { username } = req.body;
  const userFoundByName = await db("users").where({ username }).first();

  switch (req.path) {
    case "/register": {
      if (userFoundByName)
        throw res.status(400).json({ message: "Username already exists." });

      break;
    }
    case "/login": {
      if (!userFoundByName)
        throw res.status(400).json({ message: "Username does not exists." });

      break;
    }
  }

  return userFoundByName;
};

module.exports = { checkUserExist };
