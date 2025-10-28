import React from "react";
import "./MonthlyHighlight.css";

const MonthlyHighlights = () => {
  const dishes = [
    {
      name: "Adana Kebab",
      price: "€ 110",
      img: "/adana-kebab.jpg",
    },
    {
      name: "Meze Platter",
      price: "€ 130",
      img: "/mezze-platter.jpg",
    },
    {
      name: "Baklava",
      price: "€ 100",
      img: "/baklava-image.jpg",
    },
    {
      name: "Kebab Platter",
      price: "€ 120",
      img: "/kebab-platter.jpg",
    },
  ];

  return (
    <div className="highlights-section">
      <p className="subtitle">OUR TOP PICKS THIS MONTH</p>
      <h2 className="title">
        Monthly <span>Highlights</span>
      </h2>

      <div className="cards-container">
        {dishes.map((dish, index) => (
          <div className="card" key={index}>
            <img src={dish.img} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p className="price">{dish.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyHighlights;
