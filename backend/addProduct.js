const mongoose = require("mongoose");
require("dotenv").config();

// Connection URL and Database Name
const url = process.env.MONGO_URI; // Use the MONGO_URI from environment variables
const dbName = "MernBookstore"; // Database name

async function main() {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(url, {
      // Removed deprecated options
    });
    console.log("Connected successfully to MongoDB");

    const db = mongoose.connection;
    // Specify the collection you want to interact with
    const collectionName = "electronics"; // Adjust based on the category you want to add to, e.g., "movies" for movie-collection
    const collection = db.collection(collectionName);

    // Sample dataset for products
    const products = [
      {
        name: "Laptop",
        description: "High performance laptop",
        price: 999.99,
        stock: 10,
        category: "electronics", // Added category field
      },
      {
        name: "Smartphone",
        description: "Latest model smartphone",
        price: 599.99,
        stock: 15,
        category: "electronics", // Added category field
      },
      {
        name: "Headphones",
        description: "Noise cancelling headphones",
        price: 199.99,
        stock: 30,
        category: "electronics", // Added category field
      },
      {
        name: "Smartwatch",
        description: "Waterproof smartwatch",
        price: 299.99,
        stock: 20,
        category: "electronics", // Added category field
      },
      {
        name: "Tablet",
        description: "10-inch screen tablet",
        price: 399.99,
        stock: 25,
        category: "electronics", // Added category field
      },
      {
        name: "Camera",
        description: "High quality camera",
        price: 499.99,
        stock: 10,
        category: "electronics", // Added category field
      },
      {
        name: "Speakers",
        description: "High quality speakers",
        price: 199.99,
        stock: 30,
        category: "electronics", // Added category field
      },
      {
        name: "TV",
        description: "High resolution TV",
        price: 499.99,
        stock: 20,
        category: "electronics", // Added category field
      },
      {
        name: "Printer",
        description: "High quality printer",
        price: 299.99,
        stock: 25,
        category: "electronics", // Added category field
      },
      {
        name: "Projector",
        description: "High quality projector",
        price: 399.99,
        stock: 10,
        category: "electronics", // Added category field
      },
      // Add more products here
    ];

    // Function to check if a product already exists in the database
    async function productExists(product) {
      const existingProduct = await collection.findOne({
        name: product.name,
        description: product.description,
      });
      return existingProduct !== null;
    }

    // Filter out products that already exist in the database
    const newProducts = await Promise.all(
      products.map(async (product) => {
        if (!(await productExists(product))) {
          return product;
        }
      })
    );

    // Remove undefined items from the array
    const filteredProducts = newProducts.filter(
      (product) => product !== undefined
    );

    if (filteredProducts.length > 0) {
      const insertResult = await collection.insertMany(filteredProducts);
      console.log("Inserted documents:", insertResult.insertedCount);
    } else {
      console.log("No new products to insert.");
    }
  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    await mongoose.connection.close();
  }
}

main().catch(console.error);
