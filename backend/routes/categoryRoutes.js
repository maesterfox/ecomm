// backend/routes/categoryRoutes.js
const express = require("express");
const router = express.Router();
const { listCategories } = require("../controllers/categoryController"); // Adjust the path as needed

// Define the route
router.get("/", listCategories); // Note: Path is '/' since '/categories' will be prefixed when this router is used

// Export the router
module.exports = router;
