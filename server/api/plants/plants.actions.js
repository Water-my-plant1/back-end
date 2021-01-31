const db = require("../../../data/dbconfig");

const createPlant = async (req, res) => {
  try {
    const { nickname, species, h2ofrequency } = req.body;
    const { id: user_id } = req.user;

    const result = await db("plants").insert({
      nickname,
      species,
      h2ofrequency,
      user_id,
    });

    const createdPlant = {
      id: result[0],
      nickname,
      species,
      h2ofrequency,
      user_id,
    };

    return res.json({
      createdPlant,
      message: `Plant created by ${req.user.username}`,
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

const viewPersonalPlants = async (req, res) => {
  try {
    const { id } = req.user;
    const result = await db("plants").select("*").where({ user_id: id });
    return res.json(result);
  } catch (error) {
    return error;
  }
};

module.exports = {
  createPlant,
  viewPersonalPlants,
};
