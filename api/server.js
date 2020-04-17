const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express(); // define the express app

server.use(bodyParser.json());

server.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

server.use(cors()); //cors requests
server.use(helmet()); //security
server.use(morgan()); //log http requests

// const userDB = require("./routes/userRoutes");

server.get("/", (req, res) => {
  res.json({
    info: "Server is working as expected",
  });
});

//Postgres user routes
// const userRouter = require("../routes/userRouter/userRouter");
// server.use("/user", userRouter);

module.exports = server;
