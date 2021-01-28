const db = require("../../../data/dbconfig");

const checkUserExist = async (req, res) => {
  let { name } = req.body;
  const userFoundByName = await db("users").where({ name }).first();

  if (userFoundByName) {
    switch (req.path) {
      case "/register": {
        throw res.status(400).json({ message: "Username already exists." });
      }
      case "/login": {
        throw res.status(400).json({ message: "Username does not exists." });
      }
    }
  }
};

module.exports = { checkUserExist };
