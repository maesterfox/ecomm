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
    const collectionName = "movies"; // Adjust based on the category you want to add to, e.g., "movies" for movie-collection
    const collection = db.collection(collectionName);
    const movies = [
      {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        releaseYear: 1994,
        genre: "Drama",
        price: 24.99,
        stock: 50,
        category: "the-shawshank-redemption", // Unique category for each movie
      },
      {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        releaseYear: 1972,
        genre: "Crime, Drama",
        price: 19.99,
        stock: 100,
        category: "the-godfather", // Unique category for each movie
      },
      {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        releaseYear: 2008,
        genre: "Action, Crime, Drama",
        price: 29.99,
        stock: 75,
        category: "the-dark-knight", // Unique category for each movie
      },
      {
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        releaseYear: 1994,
        genre: "Drama, Romance",
        price: 14.99,
        stock: 80,
        category: "forrest-gump", // Unique category for each movie
      },
      {
        title: "Inception",
        director: "Christopher Nolan",
        releaseYear: 2010,
        genre: "Action, Adventure, Sci-Fi",
        price: 21.99,
        stock: 100,
        category: "inception", // Unique category for each movie
      },
      {
        title: "The Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        releaseYear: 1999,
        genre: "Action, Sci-Fi",
        price: 18.99,
        stock: 120,
        category: "the-matrix", // Unique category for each movie
      },
      {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        releaseYear: 1994,
        genre: "Crime, Drama",
        price: 22.99,
        stock: 90,
        category: "pulp-fiction", // Unique category for each movie
      },
      {
        title: "The Lord of the Rings: The Return of the King",
        director: "Peter Jackson",
        releaseYear: 2003,
        genre: "Action, Adventure, Drama",
        price: 27.99,
        stock: 60,
        category: "the-lord-of-the-rings-the-return-of-the-king", // Unique category for each movie
      },
      {
        title: "The Silence of the Lambs",
        director: "Jonathan Demme",
        releaseYear: 1991,
        genre: "Crime, Drama, Thriller",
        price: 16.99,
        stock: 70,
        category: "the-silence-of-the-lambs", // Unique category for each movie
      },
      {
        title: "Fight Club",
        director: "David Fincher",
        releaseYear: 1999,
        genre: "Drama",
        price: 15.99,
        stock: 85,
        category: "fight-club", // Unique category for each movie
      },
    ];

    // Inserting the dataset into the 'albums' collection
    const insertResult = await collection.insertMany(movies);
    console.log("Inserted documents:", insertResult.insertedCount);
  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
