import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand Logo */}
        <div className="navbar-logo">
          <Link to="/">Cafe <span>Italia</span></Link>
        </div>

        {/* Toggle Button */}
        <div
          className={`navbar-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>HOME</Link></li>
          <li><Link to="/menu" onClick={() => setIsOpen(false)}>MENU</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link></li>
        </ul>

        {/* Book Table Button */}
        <Link to="/book" className="book-btn">
          BOOK TABLE →
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
