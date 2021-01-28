const express = require("express");
const server = express();

const usersMiddleware = require("./api/users/user.middleware");
const userRouter = require("./api/users/users.model");

server.use(express.json());

server.use("/api/users", usersMiddleware, userRouter);

module.exports = server;
