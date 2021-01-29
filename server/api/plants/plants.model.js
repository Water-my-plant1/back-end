const router = require("express").Router();

const { createPlant } = require("./plants.actions");
const { authenticateUser } = require("./plants.middleware");

router.post("/", authenticateUser, createPlant);

module.exports = router;
