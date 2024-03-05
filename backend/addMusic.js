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
    const collectionName = "musics"; // Adjust based on the category you want to add to, e.g., "movies" for movie-collection
    const collection = db.collection(collectionName);

    const albums = [
      {
        artist: "The Beatles",
        album: "Abbey Road",
        releaseYear: 1969,
        genre: "Rock",
        price: 19.99,
        stock: 100,
        category: "the-beatles-abbey-road", // Unique category for each album
      },
      {
        artist: "Beyoncé",
        album: "Lemonade",
        releaseYear: 2016,
        genre: "Pop, R&B",
        price: 14.99,
        stock: 150,
        category: "beyonce-lemonade", // Unique category for each album
      },
      {
        artist: "Bob Dylan",
        album: "Highway 61 Revisited",
        releaseYear: 1965,
        genre: "Folk Rock",
        price: 12.99,
        stock: 75,
        category: "bob-dylan-highway-61-revisited", // Unique category for each album
      },
      {
        artist: "Kendrick Lamar",
        album: "To Pimp a Butterfly",
        releaseYear: 2015,
        genre: "Hip Hop",
        price: 15.99,
        stock: 200,
        category: "kendrick-lamar-to-pimp-a-butterfly", // Unique category for each album
      },
      {
        artist: "Fleetwood Mac",
        album: "Rumours",
        releaseYear: 1977,
        genre: "Rock",
        price: 18.99,
        stock: 120,
        category: "fleetwood-mac-rumours", // Unique category for each album
      },
      {
        artist: "Nirvana",
        album: "Nevermind",
        releaseYear: 1991,
        genre: "Grunge, Alternative Rock",
        price: 21.99,
        stock: 90,
        category: "nirvana-nevermind", // Unique category for each album
      },
      {
        artist: "Adele",
        album: "21",
        releaseYear: 2011,
        genre: "Pop, Soul",
        price: 13.99,
        stock: 140,
        category: "adele-21", // Unique category for each album
      },
      {
        artist: "Miles Davis",
        album: "Kind of Blue",
        releaseYear: 1959,
        genre: "Jazz",
        price: 17.99,
        stock: 80,
        category: "miles-davis-kind-of-blue", // Unique category for each album
      },
      {
        artist: "Taylor Swift",
        album: "1989",
        releaseYear: 2014,
        genre: "Pop",
        price: 19.99,
        stock: 110,
        category: "taylor-swift-1989", // Unique category for each album
      },
      {
        artist: "Pink Floyd",
        album: "The Dark Side of the Moon",
        releaseYear: 1973,
        genre: "Progressive Rock",
        price: 22.99,
        stock: 100,
        category: "pink-floyd-the-dark-side-of-the-moon", // Unique category for each album
      },
    ];

    // Inserting the dataset into the 'albums' collection
    const insertResult = await collection.insertMany(albums);
    console.log("Inserted documents:", insertResult.insertedCount);
  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
