import React, { useState, useEffect } from "react";
import {
  fetchCategories,
  fetchProductsByCategory,
} from "../services/apiService";
import ProductCard from "./ProductCard";

function CategorySelector() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    loadCategories();
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;

    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const productsData = await fetchProductsByCategory(selectedCategory);
        setProducts(productsData);
      } catch (error) {
        console.error(
          `Failed to fetch products for ${selectedCategory}:`,
          error
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [selectedCategory]);

  return (
    <div>
      <h2>Select a Category</h2>
      {categories.map((category) => (
        <button key={category} onClick={() => setSelectedCategory(category)}>
          {category}
        </button>
      ))}
      <div className="products-list">
        {isLoading ? (
          <div>Loading products...</div>
        ) : (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default CategorySelector;
