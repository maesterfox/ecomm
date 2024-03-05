// ProjectCard.jsx

import React from "react";
import { productImages } from "../assets/projectImages"; // Make sure this path is correct

// Add the formatCategoryToKey function here
function formatCategoryToKey(category) {
  return category
    .toLowerCase() // convert to lowercase
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()); // convert spaces and special chars to camelCase
}

// Add the ProductCard component here
function ProductCard({ product }) {
  // Your existing logic to determine the product type
  const isMusicProduct = product.artist && product.album;
  const isElectronicsProduct = product.name && product.description;
  const isBookProduct = product.title && product.author;
  const isMovieProduct = product.title && product.director;

  // Function to get the appropriate title and description based on the product type
  const getTitleAndDescription = () => {
    if (isMusicProduct) {
      return {
        title: `${product.artist} - ${product.album}`,
        description: product.genre,
      };
    } else if (isElectronicsProduct) {
      return {
        title: product.name,
        description: product.description,
      };
    } else if (isBookProduct) {
      return {
        title: `${product.title} by ${product.author}`,
        description: product.genre,
      };
    } else if (isMovieProduct) {
      return {
        title: `${product.title} directed by ${product.director}`,
        description: product.genre,
      };
    } else {
      return {
        title: "Unknown Product",
        description: "No description available",
      };
    }
  };

  const { title, description } = getTitleAndDescription();

  // Use the function to convert the category to the expected key format
  const categoryKey = formatCategoryToKey(product.category);
  const image = productImages[categoryKey] || productImages.default;

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
