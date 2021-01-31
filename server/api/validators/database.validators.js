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

const checkPlantExist = async (req, res) => {
  console.log(req.params);
  let { id } = req.params;

  const foundPlant = await db("plants").where({ id }).first();

  if (!id || id === "") {
    return res.status(400).json({ message: "No id given in the parameters." });
  }

  if (!foundPlant) {
    return res
      .status(400)
      .json({ message: `Plant  with the id of ${id} does not exist.` });
  }

  return foundPlant;
};

module.exports = { checkUserExist, checkPlantExist };
