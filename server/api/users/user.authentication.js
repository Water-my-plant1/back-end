const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw res.status(400).json({ message: "No token provided" });
    }

    const authenticatedUser = jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, decoded) => {
        if (err) {
          throw res.status(400).json({ message: "Invalid token" });
        }
        return decoded;
      }
    );

    req.user = authenticatedUser;
  } catch (error) {
    return error;
  }
  next();
};

module.exports = { authenticateUser };
