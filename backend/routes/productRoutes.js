// productRoutes.js

const express = require("express");
const router = express.Router();
const {
  listProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/:collectionName", listProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
