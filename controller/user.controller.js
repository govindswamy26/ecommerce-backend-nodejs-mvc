const { user } = require("../models/user.model");

async function createUser(req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let password = req?.body?.password;
  const userRes = await user.create({
    name,
    email,
    password,
  });

  console.log(`User created : `, JSON.stringify(userRes));
  res.status(200).send("Data stored in user table");
}

async function getUserByEmail(req, res) {
  const { email } = req.query;
  const user = await user.findOne({ email });
  res.status(200).json(user);
}

async function getAllUsers(req, res) {
  const users = await user.find();
  res.status(200).json(users);
}

module.exports = {
  createUser,
  getAllUsers,
  getUserByEmail,
};
