const db = require("../../../data/dbconfig");

const createPlant = async (req, res) => {
  try {
    const { nickname, species, h2ofrequency } = req.body;

    const result = await db("plants").insert({
      nickname,
      species,
      h2ofrequency,
    });

    return res.json({ result });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createPlant,
};
