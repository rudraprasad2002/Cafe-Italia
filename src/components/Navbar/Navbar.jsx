import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
      <div className="container-fluid px-4">

        {/* Left - Brand */}
        <Link className="navbar-brand fw-bold text-warning" to="/">
          Cafe <span className="fst-italic">Italia</span>
        </Link>

        {/* Toggle Button (appears only on mobile) */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center - Navigation Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-4 text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">MENU</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>

        {/* Right - Book Table Button */}
        <div className="d-none d-lg-block">
          <Link to="/book" className="btn book-btn fw-semibold rounded-pill px-3">
            BOOK TABLE →
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
