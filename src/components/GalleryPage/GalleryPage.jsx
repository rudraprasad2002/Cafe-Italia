import React from "react";
import "./GalleryPage.css";
import { FaInstagram } from "react-icons/fa";


const GalleryPage = () => {
  const galleryImages = [
    "/restaurant-building.png", // Restaurant building
    "/restaurant-chef.jpeg", // Chef
    "/pasta.jpg", // Pasta
    "/pastry-image.jpg", // Dessert
    "/dessert2.jpg", // Dessert 2
    "/restaurant-bg.jpg", // Dining table
    "/restaurant-night.jpg", // Restaurant night
    "/drinks.jpg", // Cocktail
  ];

  return (
    <div className="gallery-section">
      <div className="gallery-header">
        <div>
          <p className="gallery-label">GALLERY</p>
          <h1 className="gallery-title">follow us</h1>
        </div>
        <button className="instagram-btn">
          <FaInstagram className="insta-icon" /> CHECK OUT OUR INSTAGRAM
        </button>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
