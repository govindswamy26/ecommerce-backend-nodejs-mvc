const { user, products } = require("../models/user.model");

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

async function getProductByName(req, res) {
  const { name } = req.query;
  const resproduct = await products.findOne({ productName: name });
  res.status(200).json(resproduct);
}

async function createProduct(req, res) {
  let productName = req.body.productName;
  let Quantity = req.body.Quantity;
  let productType = req.body.productType;
  let productPrice = req.body.productPrice;
  const productRes = await products.create({
    productName,
    Quantity,
    productType,
    productPrice,
  });
  res.status(200).send("Data is stored in products table");
}
async function getAllProducts(req, res) {
  const allpro = await products.find();
  res.status(200).json(allpro);
}

module.exports = {
  createUser,
  getAllUsers,
  getUserByEmail,
  createProduct,
  getAllProducts,
  getProductByName,
};
