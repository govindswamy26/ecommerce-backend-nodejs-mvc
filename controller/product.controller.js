const { products } = require("../models/product.model");

async function getProductByName(req, res) {
  try {
    const { name } = req.query;
    const resproduct = await products.findOne({ productName: name });
    res.status(200).json(resproduct);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
}

async function createProduct(req, res) {
  try {
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
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}
async function getAllProducts(req, res) {
  try {
    const allpro = await products.find();
    res.status(200).json(allpro);
  } catch (err) {
    console.log(err.messsage);
    res.status(500).send(err.message);
  }
}
module.exports = {
  createProduct,
  getAllProducts,
  getProductByName,
};
