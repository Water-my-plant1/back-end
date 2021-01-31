const router = require("express").Router();

const { createPlant, viewPersonalPlants } = require("./plants.actions");
const { authenticateUser } = require("./plants.middleware");

router.post("/", authenticateUser, createPlant);
router.get("/", authenticateUser, viewPersonalPlants);

module.exports = router;
