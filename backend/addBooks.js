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
    const collectionName = "books"; // Adjust based on the category you want to add to, e.g., "movies" for movie-collection
    const collection = db.collection(collectionName);

    // The books dataset
    const books = [
      {
        title: "The Count of Monte Cristo",
        author: "Alexandre Dumas",
        publicationYear: 1844,
        genre: "Fiction",
        price: 19.99,
        stock: 20,
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publicationYear: 1960,
        genre: "Fiction",
        price: 12.99,
        stock: 50,
      },
      {
        title: "1984",
        author: "George Orwell",
        publicationYear: 1949,
        genre: "Dystopian Fiction",
        price: 10.99,
        stock: 100,
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publicationYear: 1925,
        genre: "Fiction",
        price: 14.99,
        stock: 75,
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publicationYear: 1813,
        genre: "Romantic Fiction",
        price: 9.99,
        stock: 80,
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publicationYear: 1951,
        genre: "Fiction",
        price: 11.99,
        stock: 100,
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publicationYear: 1960,
        genre: "Fiction",
        price: 12.99,
        stock: 50,
      },
      {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        publicationYear: 1997,
        genre: "Fantasy",
        price: 16.99,
        stock: 120,
      },
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        publicationYear: 1937,
        genre: "Fantasy",
        price: 13.99,
        stock: 90,
      },
      {
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        publicationYear: 1847,
        genre: "Gothic Fiction",
        price: 11.99,
        stock: 60,
      },
      {
        title: "Moby-Dick",
        author: "Herman Melville",
        publicationYear: 1851,
        genre: "Adventure Fiction",
        price: 14.99,
        stock: 70,
      },
    ];

    // Iterate through each book in the dataset
    for (const book of books) {
      // Check if the book already exists in the collection
      const existingBook = await collection.findOne({ title: book.title });

      // If the book already exists, skip insertion
      if (existingBook) {
        console.log(`Book "${book.title}" already exists. Skipping insertion.`);
        continue;
      }

      // Insert the book into the collection
      const insertResult = await collection.insertOne(book);
      console.log(`Inserted document "${book.title}".`);
    }

    // Inserting the dataset into the 'books' collection
    const insertResult = await collection.insertMany(books);
    console.log("Inserted documents:", insertResult.insertedCount);
  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    mongoose.disconnect(); // Close the database connection
  }
}

main().catch(console.error);
