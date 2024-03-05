// Product.js
const { Book, Movie, Music, Electronics } = require("./ProductSchemas");

// Function to dynamically select the model based on the category name
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

// List all products in a specific category
exports.listProducts = async (req, res) => {
  const { categoryName } = req.params;
  let Model;

  switch (categoryName) {
    case "books":
      Model = Book;
      break;
    case "movies":
      Model = Movie;
      break;
    case "music":
      Model = Music;
      break;
    case "electronics":
      Model = Electronics;
      break;
    default:
      return res.status(400).send("Invalid category");
  }

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

// Create a new product in a specific category
exports.createProduct = async (req, res) => {
  const { categoryName } = req.params;
  const Model = getModelByCategory(categoryName);

  try {
    const newProduct = new Model(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating product");
  }
};

// Update an existing product in a specific category
exports.updateProduct = async (req, res) => {
  const { categoryName, id } = req.params;
  const Model = getModelByCategory(categoryName);

  try {
    const updatedProduct = await Model.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProduct) {
      return res.status(404).send("Product not found");
    }
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating product");
  }
};

// Delete a product in a specific category
exports.deleteProduct = async (req, res) => {
  const { categoryName, id } = req.params;
  const Model = getModelByCategory(categoryName);

  try {
    const deletedProduct = await Model.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).send("Product not found");
    }
    res.status(204).send(); // No content to send back
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting product");
  }
};
