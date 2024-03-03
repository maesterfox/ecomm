// backend/controllers/categoryController.js
const categories = ["book", "electronics", "movies", "music"];

exports.listCategories = (req, res) => {
  try {
    // Send the list of categories as a response
    res.json(categories);
  } catch (error) {
    console.error("Error listing categories:", error);
    res.status(500).send("Server Error");
  }
};
