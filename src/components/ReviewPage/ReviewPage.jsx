import React from "react";
import "./ReviewPage.css";

const ReviewsPage = () => {
  const reviews = [
    {
      name: "Anna Mathew",
      time: "one day ago",
      text: "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We’ll definitely be coming back! We booked private dining for our event.",
      rating: 5,
      img: "https://i.pravatar.cc/50?img=1",
    },
    {
      name: "Gerin Tom",
      time: "one day ago",
      text: "We booked private dining for our anniversary, and everything was perfect. The steak was melt-in-your-mouth delicious, and the staff was amazing!",
      rating: 5,
      img: "https://i.pravatar.cc/50?img=2",
    },
    {
      name: "Mery Elza",
      time: "one day ago",
      text: "Best steak I’ve ever had! The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!",
      rating: 5,
      img: "https://i.pravatar.cc/50?img=3",
    },
  ];

  return (
    <div className="reviews-section">
      <p className="reviews-label">REVIEWS</p>
      <h1 className="reviews-title">Hear Our Guests</h1>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-header">
              <img src={review.img} alt={review.name} className="review-img" />
              <div>
                <h3 className="review-name">{review.name}</h3>
                <p className="review-time">{review.time}</p>
              </div>
            </div>

            <div className="review-stars">
              {"★".repeat(review.rating)}
            </div>

            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>

      <div className="review-navigation">
        <button className="nav-btn">&lt;</button>
        <button className="nav-btn">&gt;</button>
      </div>
    </div>
  );
};

export default ReviewsPage;
