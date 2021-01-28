require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * Since the backend is using the dotenv file to handle environment labels.
 * A ".env" file has to be provided in the root directory of the project to use the environment variable.
 * If there is no such file, then JWT wont work properly when hashing for a token.
 */
const JWT_SECRET = process.env.JWT_SECRET;
const db = require("../../../data/dbconfig");

const createUser = async (req, res) => {
  /**
   * @FIELDS
   * username
   * phone
   * password
   */
  const { username, phone, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await db("users").insert({
    username,
    phone,
    password: hashedPassword,
  });

  const createdUser = {
    id: result[0],
    username,
    phone,
    password: hashedPassword,
  };

  // Returns the user object that has been created.
  return res.json({ message: "User created", user: createdUser });
};

const loginUser = async (req, res) => {
  /**
   * @FIELDS
   * username
   * password
   */
  try {
    const { username, password } = req.body;

    const foundUser = await db("users").where({ username }).first();
    console.log(foundUser);
    const passwordMatch = await bcrypt.compare(password, foundUser.password);

    if (!passwordMatch) {
      throw res.status(400).json({ message: "Passwords don't match" });
    }

    const token = jwt.sign(foundUser, JWT_SECRET);

    return res.json({ message: "You're logged in.", token });
  } catch (error) {
    return error;
  }
};

module.exports = { createUser, loginUser };
