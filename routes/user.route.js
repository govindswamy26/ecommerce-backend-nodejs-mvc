const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserByEmail,
} = require("../controller/user.controller");

const userrouter = express.Router();
userrouter.post("/user", createUser);
userrouter.get("/all", getAllUsers);
userrouter.get("/email", getUserByEmail);

module.exports = userrouter;
