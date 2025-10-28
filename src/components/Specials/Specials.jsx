import React from "react";
import "./Specials.css";


const Specials = () => {
  return (
    <section className="specials">
      <div className="specials-header">
        <p>OUR MENU</p>
        <h2>
          Our <span>Specials</span>
        </h2>
      </div>

      <div className="specials-wrapper">
        {/* Left blurred image */}
        <div className="specials-side left">
          <img src="/salad-left.jpg" alt="Salad" />
        </div>

        {/* Main center card */}
        <div className="specials-card">
          <div className="specials-card-bg">
            <img src="/ribeye-steak.jpeg" alt="Classic Ribeye Steak" className="specials-img" />
            <div className="specials-price">€30</div>
            <h3>Classic Ribeye Steak</h3>

            <div className="specials-buttons">
              <button>&lt;</button>
              <button>&gt;</button>
            </div>
          </div>
        </div>

        {/* Right blurred image */}
        <div className="specials-side right">
          <img src="/pastry-right.jpg" alt="Pasta" />
        </div>
      </div>
    </section>
  );
};

export default Specials;
