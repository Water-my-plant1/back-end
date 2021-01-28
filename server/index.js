const express = require("express");
const server = express();

const userRouter = require("./api/users/users.model");

server.use(express.json());

server.use("/api/users", userRouter);

module.exports = server;
