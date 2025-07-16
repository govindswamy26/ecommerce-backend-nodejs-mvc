const express = require("express");

const {
  createProduct,
  getAllProducts,
  getProductByName,
} = require("../controller/product.controller");
const productrouter = express.Router();
productrouter.get("/all", getAllProducts);
productrouter.get("/", getProductByName);
productrouter.post("/", createProduct);

module.exports = productrouter;
