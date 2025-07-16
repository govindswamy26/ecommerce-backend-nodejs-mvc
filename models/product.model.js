const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
    unique: true,
  },
  Quantity: {
    type: Number,
    required: true,
  },
  productType: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
});

const products = mongoose.model("products", ProductSchema);

module.exports = { products };
