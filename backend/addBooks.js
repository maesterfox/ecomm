const { MongoClient } = require("mongodb");

// Connection URL and Database Name
const url =
  "mongodb+srv://talentedmrfox:808fcfjIgqqoVw3B@mernbookstore.ntwza2s.mongodb.net/MernBookstore?retryWrites=true&w=majority";
const dbName = "MernBookstore"; // Database name

async function main() {
  const client = new MongoClient(url);

  try {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    // Specify the collection you want to interact with
    const collectionName = "books"; // Adjust based on the category you want to add to, e.g., "movies" for movie-collection
    const collection = db.collection(collectionName);

    // The books dataset

    const books = [
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

    // Deleting all documents in the 'books' collection
    const deleteResult = await collection.deleteMany({});
    console.log("Deleted documents:", deleteResult.deletedCount);

    // Inserting the dataset into the 'albums' collection
    const insertResult = await collection.insertMany(books);
    console.log("Inserted documents:", insertResult.insertedCount);
  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
