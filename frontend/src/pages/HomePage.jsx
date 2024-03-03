import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Our E-commerce Store</h1>
      <p>Discover our amazing products.</p>
      <p>
        Welcome to our e-commerce platform, where you can explore a wide range
        of high-quality products curated just for you. Whether you're looking
        for the latest fashion trends, cutting-edge gadgets, or everyday
        essentials, we've got you covered.
      </p>
      <p>
        Our e-commerce store is built using modern technologies such as React,
        Redux, and Node.js, with a MongoDB database backend. We've designed the
        site to provide you with a seamless shopping experience, featuring a
        user-friendly interface and robust functionality.
      </p>
      <p>
        Browse through our extensive product catalog, featuring categories
        ranging from electronics and fashion to home goods and more. Add items
        to your shopping cart with ease and enjoy a hassle-free checkout
        process.
      </p>
      <Link to="/products">Start Shopping</Link>
      <p>New to our store? Get started by creating an account:</p>
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
    </div>
  );
}

export default HomePage;
