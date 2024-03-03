import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"; // Import the Navbar component
import Footer from "./components/layout/Footer"; // Import the Footer component from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";
import LoginForm from "./components/user/LoginForm";
import RegisterForm from "./components/user/RegisterForm";

function App() {
  // Function to handle login
  const handleLogin = async (credentials) => {
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        // Handle non-200 responses
        const errorResponse = await response.json();
        console.error("Login error response:", errorResponse);
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log(data); // Process the response data as needed, e.g., save the token
      // Redirect user or handle login success scenario
    } catch (error) {
      console.error(error);
      // Handle errors, such as showing an error message in the UI
    }
  };

  // Define the function to handle registration
  const handleRegister = async (userData) => {
    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorResponse = await response.json(); // Assuming the server sends back JSON
        console.error("Registration error response:", errorResponse);
        // Here, you would typically update the state to display these errors in the UI
        throw new Error("Registration failed");
      }

      const data = await response.json();
      console.log(data); // Process the response data as needed
      // Redirect user or show success message
    } catch (error) {
      console.error(error);
      // Update UI to show error message
    }
  };

  return (
    <Router>
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route
            path="/register"
            element={<RegisterForm onRegister={handleRegister} />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
