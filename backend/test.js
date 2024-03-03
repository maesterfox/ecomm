const axios = require("axios");

const API_BASE_URL = "http://localhost:3000/api"; // Adjust the base URL as needed

async function fetchCategories() {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories/`);
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error fetching categories:", error.message);
  }
}

fetchCategories();
