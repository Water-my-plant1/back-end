const express = require("express");
const server = express();

server.get("/", (req, res) => {
  return res.json({ message: "Testing route" });
});

module.exports = server;
