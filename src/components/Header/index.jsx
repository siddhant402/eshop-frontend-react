import React from "react";
import "./Header.css"; // Import the CSS

const Header = () => {
  return (
    <div className="jumbotron">
      <div className="jumbotron-content">
        <h1 className="jumbotron-title">Welcome to EShop</h1>
        <p className="jumbotron-pitch">
          Find all your needs fulfilled here. Discover a curated selection of quality products designed to elevate your lifestyle.
        </p>
        <a href="/products" className="jumbotron-button">
          Start Shopping
        </a>
      </div>
    </div>
  );
};

export default Header;