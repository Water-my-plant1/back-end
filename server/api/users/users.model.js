const router = require("express").Router();

const { createUser } = require("./user.actions");

// CRUD Methods

// Creating a new User

router.post("/register", createUser);

module.exports = router;
