const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    imageUrl: { type: String, required: false },
  },
  { timestamps: true }
);

exports.listProducts = async (req, res) => {
  const { collectionName } = req.params; // e.g., 'book-collection'
  const CollectionModel = mongoose.model(
    collectionName,
    ProductSchema,
    collectionName
  );

  try {
    const products = await CollectionModel.find({});
    res.json(products);
  } catch (error) {
    console.error("Error fetching products from", collectionName, ":", error);
    res.status(500).send("Server Error");
  }
};

module.exports = mongoose.model("Product", productSchema);
