const { MongoClient } = require("mongodb");

// Connection URL and Database Name
const url =
  "mongodb+srv://talentedmrfox:808fcfjIgqqoVw3B@mernbookstore.ntwza2s.mongodb.net/movie-collection?retryWrites=true&w=majority";
const dbName = "movie-collection";

async function main() {
  const client = new MongoClient(url);

  try {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection("movies");

    // Sample dataset with added 'price' and 'stock'
    const movies = [
      {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        releaseYear: 1994,
        genre: "Drama",
        price: 24.99,
        stock: 50,
      },
      {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        releaseYear: 1972,
        genre: "Crime, Drama",
        price: 19.99,
        stock: 100,
      },
      {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        releaseYear: 2008,
        genre: "Action, Crime, Drama",
        price: 29.99,
        stock: 75,
      },
      {
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        releaseYear: 1994,
        genre: "Drama, Romance",
        price: 14.99,
        stock: 80,
      },
      {
        title: "Inception",
        director: "Christopher Nolan",
        releaseYear: 2010,
        genre: "Action, Adventure, Sci-Fi",
        price: 21.99,
        stock: 100,
      },
      {
        title: "The Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        releaseYear: 1999,
        genre: "Action, Sci-Fi",
        price: 18.99,
        stock: 120,
      },
      {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        releaseYear: 1994,
        genre: "Crime, Drama",
        price: 22.99,
        stock: 90,
      },
      {
        title: "The Lord of the Rings: The Return of the King",
        director: "Peter Jackson",
        releaseYear: 2003,
        genre: "Action, Adventure, Drama",
        price: 27.99,
        stock: 60,
      },
      {
        title: "The Silence of the Lambs",
        director: "Jonathan Demme",
        releaseYear: 1991,
        genre: "Crime, Drama, Thriller",
        price: 16.99,
        stock: 70,
      },
      {
        title: "Fight Club",
        director: "David Fincher",
        releaseYear: 1999,
        genre: "Drama",
        price: 15.99,
        stock: 85,
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
