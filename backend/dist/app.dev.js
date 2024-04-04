"use strict";

var express = require("express");

var cors = require("cors");

require("dotenv").config();

var userRoutes = require("./routes/userRoutes");

var productRoutes = require("./routes/productRoutes");

var categoryRoutes = require("./routes/categoryRoutes");

var connectDB = require("./config/database");

connectDB(); // Express app

var app = express(); // Middleware

app.use(cors());
app.use(express.json()); // Use routes

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes); // Basic route for testing

app.get("/", function (req, res) {
  res.send("Hello World from the backend!");
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});