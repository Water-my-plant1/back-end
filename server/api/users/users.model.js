const router = require("express").Router();

const { createUser, loginUser } = require("./user.actions");

// CRUD Methods

// Creating a new User

router.post("/register", createUser);
router.post("/login", loginUser);

module.exports = router;
