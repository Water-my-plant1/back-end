const router = require("express").Router();

const {
  createPlant,
  viewPersonalPlants,
  updatePlant,
  deletePlant,
  viewSpecificPlant,
} = require("./plants.actions");
const { authenticateUser } = require("../users/user.authentication");

router.post("/", authenticateUser, createPlant);
router.get("/", authenticateUser, viewPersonalPlants);
router.get("/:id", authenticateUser, viewSpecificPlant);
router.put("/:id", authenticateUser, updatePlant);
router.delete("/:id", authenticateUser, deletePlant);

module.exports = router;
