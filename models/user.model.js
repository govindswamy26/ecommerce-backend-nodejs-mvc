const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  createdAt: {
    type: Date,
    default: new Date().toISOString(),
  },
});

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

const user = mongoose.model("User", userSchema);
const products = mongoose.model("products", ProductSchema);
module.exports = { user, products };
