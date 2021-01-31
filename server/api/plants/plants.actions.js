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

const deletePlant = async (req, res) => {
  try {
    const { id: user_id } = req.user;
    const { id: plant_id } = req.params;

    const foundPlant = await db("plants")
      .where({ user_id, id: plant_id })
      .first();
    if (!foundPlant) {
      return res
        .status(400)
        .json({ message: "This plant doesn not belong to this user." });
    }

    await db("plants")
      .where({ user_id, id: plant_id })
      .del()
      .catch((err) => {
        return res.status(400).json({
          err,
          message: "An error occured when deleting a plant in the database.",
        });
      });

    return res.json({
      message: `Plant with the id of ${plant_id} has been deleted.`,
    });
  } catch (error) {
    return error;
  }
};

const updatePlant = async (req, res) => {
  /**
   * @FIELDS
   * nickname
   * species
   * h2oFrequency
   */

  // All of the fields have to passed. If there is a field that still keeps the same value as before, pass that value as is.

  try {
    const { id: user_id } = req.user;
    const { id: plant_id } = req.params;

    const foundPlant = await db("plants")
      .where({ user_id, id: plant_id })
      .first();
    if (!foundPlant) {
      return res
        .status(400)
        .json({ message: "This plant doesn not belong to this user." });
    }

    await db("plants")
      .where({ user_id, id: plant_id })
      .update(req.body)
      .catch((err) => {
        return res.status(400).json({
          err,
          message: "An error occured when updating a plant in the database.",
        });
      });

    return res.json({
      message: `Plant with the id of ${plant_id} has been updated.`,
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  createPlant,
  viewPersonalPlants,
  deletePlant,
  updatePlant,
};
