const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes"); // Import product routes
const categoryRoutes = require("./routes/categoryRoutes"); // Adjust the path as needed

const connectDB = require("./config/database");
connectDB();

// Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes); // Correctly use product routes with the prefix
app.use("/api/categories", categoryRoutes);

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Hello World from the backend!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
