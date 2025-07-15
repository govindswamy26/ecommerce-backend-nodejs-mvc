const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserByEmail,
  createProduct,
  getAllProducts,
  getProductByName,
} = require("../controller/user.controller");
const router = express.Router();
router.post("/user", createUser);

router.get("/all", getAllUsers);
router.get("/email", getUserByEmail);

router.post("/product", createProduct);
router.get("/products", getAllProducts);
router.get("/product", getProductByName);

module.exports = router;
