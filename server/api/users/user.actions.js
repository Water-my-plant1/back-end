const bcrypt = require("bcrypt");
const db = require("../../../data/dbconfig");

const createUser = async (req, res) => {
  /**
   * @FIELDS
   * username
   * phone
   * password
   */
  try {
    const { username, phone, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!username || !phone || !password) {
      throw res.status(400).json({
        message: "One or more fields are missing",
      });
    }

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
  } catch (error) {
    return error;
  }
};

module.exports = { createUser };
