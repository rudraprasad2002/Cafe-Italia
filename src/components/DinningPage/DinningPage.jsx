import React from "react";
import "./DinningPage.css";

const DiningPage = () => {
  return (
    <div className="dining-container">
      <div className="dining-overlay">
        <div className="dining-content">
          <p className="booking-text">BOOKING</p>
          <h1 className="dining-title">
            Private & <br /> Group Dining
          </h1>
          <p className="dining-description">
            At Bavette, we specialize in creating memorable dining experiences,
            whether you're seeking an intimate gathering or a grand celebration.
            Our private and group dining options are designed to meet your
            unique needs with personalized service, exceptional food, and a
            welcoming atmosphere.
          </p>
          <button className="book-btn">BOOK NOW →</button>
        </div>
      </div>
    </div>
  );
};

export default DiningPage;
