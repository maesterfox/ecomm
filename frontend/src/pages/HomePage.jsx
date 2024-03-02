import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Our E-commerce Store</h1>
      <p>Discover our amazing products.</p>
      <Link to="/products">Shop Now</Link>
      <p>Or get your account ready:</p>
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
    </div>
  );
}

export default HomePage;
