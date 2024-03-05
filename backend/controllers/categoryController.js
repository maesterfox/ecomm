// controllers/categoryController.js
const categories = ["books", "electronics", "movies", "music"];
const { listProducts } = require("../controllers/productController"); // Import listProducts

exports.listCategories = (req, res) => {
  try {
    // Send the list of categories as a response
    res.json(categories);
  } catch (error) {
    console.error("Error listing categories:", error);
    res.status(500).send("Server Error");
  }
};

// categoryController.js
exports.getProductsInCategory = async (req, res) => {
  const { categoryName } = req.params;
  // Assuming you have a function to get the model based on categoryName
  const Model = getModelByCategory(categoryName);

  try {
    const products = await Model.find({});
    res.json(products);
  } catch (error) {
    console.error(
      `Error fetching products for category ${categoryName}:`,
      error
    );
    res.status(500).send("Server Error");
  }
};

// categoryController.js
const { Book, Movie, Music, Electronics } = require("../models/ProductSchemas");

function getModelByCategory(categoryName) {
  switch (categoryName) {
    case "books":
      return Book;
    case "movies":
      return Movie;
    case "music":
      return Music;
    case "electronics":
      return Electronics;
    default:
      throw new Error("Invalid category");
  }
}

exports.getModelByCategory = getModelByCategory;
