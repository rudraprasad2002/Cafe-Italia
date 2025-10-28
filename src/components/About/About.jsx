import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      {/* Top title section */}
      <div className="about-header">
        <p className="about-subtitle">WE OFFER</p>
        <h2 className="about-title">
          Unforgettable <br /> Dining <span>Experience</span>
        </h2>
      </div>

      {/* Food block */}
      <div className="about-card">
        <img src="/food-image.jpg" alt="Food" />
        <div className="about-card-content">
          <h3>Food</h3>
          <p>
            Beretta was born from a passion for bringing the finest cuts of beef
            from the Italian coast. With a commitment to sustainability and
            premium quality, every dish is a labor of love crafted by our chefs.
          </p>
        </div>
      </div>

      {/* Drinks block */}
      <div className="about-card">
        <img src="/drinks-image.jpg" alt="Drinks" />
        <div className="about-card-content">
          <h3>Drinks</h3>
          <p>
            Beretta was born from a passion for bringing the finest cuts of beef
            from the Italian coast. With a commitment to sustainability and
            premium quality, every drink is a crafted expression of flavor.
          </p>
        </div>
      </div>

      {/* Atmosphere block */}
      <div className="about-card">
        <img src="/atmosphere-image.jpg" alt="Atmosphere" />
        <div className="about-card-content">
          <h3>Atmosphere</h3>
          <p>
            Beretta was born from a passion for creating warm, elegant spaces
            that blend comfort and luxury — offering guests a true Italian
            dining experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
