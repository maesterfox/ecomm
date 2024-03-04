const mongoose = require("mongoose");
require("dotenv").config();

// Connection URL and Database Name
const url = process.env.MONGO_URI; // Use the MONGO_URI from environment variables
const dbName = "MernBookstore"; // Database name

async function main() {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
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
      },
      {
        name: "Smartphone",
        description: "Latest model smartphone",
        price: 599.99,
        stock: 15,
      },
      {
        name: "Headphones",
        description: "Noise cancelling headphones",
        price: 199.99,
        stock: 30,
      },
      {
        name: "Smartwatch",
        description: "Waterproof smartwatch",
        price: 299.99,
        stock: 20,
      },
      {
        name: "Tablet",
        description: "10-inch screen tablet",
        price: 399.99,
        stock: 25,
      },
      {
        name: "Camera",
        description: "High quality camera",
        price: 499.99,
        stock: 10,
      },
      {
        name: "Speakers",
        description: "High quality speakers",
        price: 199.99,
        stock: 30,
      },
      {
        name: "TV",
        description: "High resolution TV",
        price: 499.99,
        stock: 20,
      },
      {
        name: "Printer",
        description: "High quality printer",
        price: 299.99,
        stock: 25,
      },
      {
        name: "Projector",
        description: "High quality projector",
        price: 399.99,
        stock: 10,
      },
      // Add more products here
    ];

    const insertResult = await collection.insertMany(products);
    console.log("Inserted documents:", insertResult.insertedCount);
  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
