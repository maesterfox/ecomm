const { MongoClient } = require("mongodb");

// Connection URL and Database Name
const url =
  "mongodb+srv://talentedmrfox:808fcfjIgqqoVw3B@mernbookstore.ntwza2s.mongodb.net/music-collection?retryWrites=true&w=majority";
const dbName = "music-collection";

async function main() {
  const client = new MongoClient(url);

  try {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection("albums");

    // Sample dataset with added 'price' and 'stock'
    const albums = [
      {
        artist: "The Beatles",
        album: "Abbey Road",
        releaseYear: 1969,
        genre: "Rock",
        price: 19.99,
        stock: 100,
      },
      {
        artist: "Beyoncé",
        album: "Lemonade",
        releaseYear: 2016,
        genre: "Pop, R&B",
        price: 14.99,
        stock: 150,
      },
      {
        artist: "Bob Dylan",
        album: "Highway 61 Revisited",
        releaseYear: 1965,
        genre: "Folk Rock",
        price: 12.99,
        stock: 75,
      },
      {
        artist: "Kendrick Lamar",
        album: "To Pimp a Butterfly",
        releaseYear: 2015,
        genre: "Hip Hop",
        price: 15.99,
        stock: 200,
      },
      {
        artist: "Fleetwood Mac",
        album: "Rumours",
        releaseYear: 1977,
        genre: "Rock",
        price: 18.99,
        stock: 120,
      },
      {
        artist: "Nirvana",
        album: "Nevermind",
        releaseYear: 1991,
        genre: "Grunge, Alternative Rock",
        price: 21.99,
        stock: 90,
      },
      {
        artist: "Adele",
        album: "21",
        releaseYear: 2011,
        genre: "Pop, Soul",
        price: 13.99,
        stock: 140,
      },
      {
        artist: "Miles Davis",
        album: "Kind of Blue",
        releaseYear: 1959,
        genre: "Jazz",
        price: 17.99,
        stock: 80,
      },
      {
        artist: "Taylor Swift",
        album: "1989",
        releaseYear: 2014,
        genre: "Pop",
        price: 19.99,
        stock: 110,
      },
      {
        artist: "Pink Floyd",
        album: "The Dark Side of the Moon",
        releaseYear: 1973,
        genre: "Progressive Rock",
        price: 22.99,
        stock: 100,
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
