import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to my E-commerce Storefront</h1>
      <p>
        An innovative e-commerce platform designed to offer a seamless shopping
        experience.
      </p>
      <h2>About the Project</h2>
      <p>
        E-commerce Storefront is a comprehensive e-commerce platform that
        provides a wide range of products, user management, shopping cart,
        checkout, and admin dashboard functionalities. It's built with modern
        technologies to ensure a smooth and efficient shopping experience.
      </p>
      <h2>Technologies Used</h2>
      <ul>
        <li>Frontend: Vite, React</li>
        <li>Backend: Node.js</li>
        <li>Database: MongoDB</li>
      </ul>
      <h2>Key Features</h2>
      <ul>
        <li>Product catalog with categories and filters</li>
        <li>User registration, login, and profile management</li>
        <li>Shopping cart and checkout process</li>
        <li>Order management</li>
        <li>
          Admin dashboard for product and order management, analytics viewing
        </li>
      </ul>
      <h2>Directory Structure</h2>
      <p>
        The project is structured to ensure maintainability, scalability, and
        efficiency, with a clear separation of concerns between the frontend and
        backend.
      </p>
      <h2>Setup Instructions</h2>
      <p>
        To get started, initialize both frontend and backend using npm, install
        dependencies, configure environment variables, and run backend and
        frontend servers using npm scripts.
      </p>
      <h2>Authors</h2>
      <p>David Fox - Full Stack Developer</p>
      <p>
        <a href="mailto:david.fox@davidfoxdev.co.uk">Email</a> |{" "}
        <a href="https://www.linkedin.com/in/davidfoxtechcode/">LinkedIn</a> |{" "}
        <a href="https://super.davidfoxdev.co.uk">Portfolio</a>
      </p>
      <h2>License</h2>
      <p>Project is licensed under the MIT License.</p>
      <Link to="/products" className="start-shopping-link">
        <h2>Start Shopping</h2>
      </Link>
      <p>New to our store? Get started by creating an account:</p>
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
    </div>
  );
}

export default HomePage;
