const Product = require("../models/Product");

// In productController.js
exports.listCategories = async (req, res) => {
  try {
    // Assuming a fixed set of categories. For a dynamic approach, you could fetch distinct categories from your product documents.
    const categories = ["books", "electronics", "movies", "music"];
    res.json(categories);
    console.log("Sending categories:", categories); // Log what's being sent
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).send("Server Error");
  }
};

// List all products
exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating product");
  }
};

// Update an existing product
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).send("Product not found");
    }
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating product");
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).send("Product not found");
    }
    res.status(204).send(); // No content to send back
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting product");
  }
};
