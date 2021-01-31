const router = require("express").Router();

const { createUser, loginUser, updateProfile } = require("./user.actions");

const { authenticateUser } = require("./user.authentication");

// CRUD Methods

// Creating a new User

router.post("/register", createUser);
router.post("/login", loginUser);
router.put("/updateProfile", authenticateUser, updateProfile);

module.exports = router;
