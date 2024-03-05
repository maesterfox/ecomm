// backend/routes/categoryRoutes.js
const express = require("express");
const router = express.Router();
const {
  listCategories,
  getProductsInCategory,
} = require("../controllers/categoryController"); // Adjust the path as needed

// Define the route
router.get("/", listCategories); // Note: Path is '/' since '/categories' will be prefixed when this router is used
router.get("/:categoryName", getProductsInCategory); // Add this line

// Export the router
module.exports = router;
