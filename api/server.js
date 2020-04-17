const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;

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

const userDB = require("./routes/userRoutes");

server.get("/", (req, res) => {
  res.json({
    info: "Server is working as expected",
  });
});

//Postgres user routes
server.get("/users", userDB.getUsers);
server.get("/users/:id", userDB.getUserById);
server.post("/users", userDB.createUser);
server.put("/users/:id", userDB.updateUser);
server.delete("/users/:id", userDB.deleteUser);
server.post("/users/login", userDB.userLogin);

module.exports = server;
