import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-subtitle">Welcome To</p>
        <h1 className="hero-title">Cafe Italia</h1>
        <Link to="/menu">
          <button className="hero-btn">VIEW MENU →</button>
        </Link>
      </div>

      {/* Floating round “View Menu” button at bottom-right */}
      <Link to="/menu" className="floating-menu-btn">
        <i className="fa-solid fa-utensils"></i>
        
        <span>VIEW MENU</span>
      </Link>
    </div>
  );
};

export default Hero;
