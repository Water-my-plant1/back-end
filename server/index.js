const express = require("express");
const cors = require("cors");

const server = express();

const usersMiddleware = require("./api/users/user.middleware");
const userRouter = require("./api/users/users.model");

const { plantsMiddleware } = require("./api/plants/plants.middleware");
const plantsRouter = require("./api/plants/plants.model");

server.use(express.json());
server.use(cors());

server.use("/api/users", usersMiddleware, userRouter);
server.use("/api/plants", plantsMiddleware, plantsRouter);

module.exports = server;
