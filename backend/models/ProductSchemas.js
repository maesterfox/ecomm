// models/ProductSchemas.js
const mongoose = require("mongoose");

// Schema for Books
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  imageUrl: { type: String, required: false },
});

// Schema for Movies
const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  imageUrl: { type: String, required: false },
});

// Schema for Music
const musicSchema = new mongoose.Schema({
  artist: { type: String, required: true },
  album: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  imageUrl: { type: String, required: false },
});

// Schema for Electronics
const electronicsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  imageUrl: { type: String, required: false },
});

// Register the models with Mongoose
const Book = mongoose.model("Book", bookSchema);
const Movie = mongoose.model("Movie", movieSchema);
const Music = mongoose.model("Music", musicSchema);
const Electronics = mongoose.model("Electronics", electronicsSchema);

// Export the models
module.exports = {
  Book,
  Movie,
  Music,
  Electronics,
};
