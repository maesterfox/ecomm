import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";
import LoginForm from "./components/user/LoginForm";
import RegisterForm from "./components/user/RegisterForm";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link> {/* Adjusted for clarity */}
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />{" "}
        {/* Adjusted for clarity */}
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
