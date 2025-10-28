import React from "react";
import "./Menu.css";
import { Element } from "react-scroll";

const Menu = () => {
  return (
    <Element name="menu-section" className="menu-section">
      <p className="menu-subtitle">EXPLORE MENU</p>
      <h2 className="menu-title">Our Menu</h2>

      <div className="menu-cards">
        <div className="menu-card">
          <img src="/italian_dish.jpg" alt="Italian dishes" />
          <div className="menu-card-content">
            <h3>Italian dishes</h3>
            <span>VIEW MENU</span>
          </div>
        </div>

        <div className="menu-card">
          <img src="/pastry-image.jpg" alt="Pastry" />
          <div className="menu-card-content">
            <h3>Pastry</h3>
            <span>VIEW MENU</span>
          </div>
        </div>

        <div className="menu-card">
          <img src="/coffee.jpg" alt="Coffee" />
          <div className="menu-card-content">
            <h3>Coffee</h3>
            <span>VIEW MENU</span>
          </div>
        </div>
      </div>

      <button className="menu-bottom-btn">VIEW MENU →</button>
    </Element>
  );
};

export default Menu;
