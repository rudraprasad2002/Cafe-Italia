import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-section">
      <div className="contact-overlay">
        <p className="contact-label">CONNECT WITH US</p>
        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-grid">
          <div className="contact-card">
            <p className="card-label">BOOKING REQUEST</p>
            <p className="card-value highlight">0161 795 5502</p>
          </div>

          <div className="contact-card">
            <p className="card-label">LOCATION</p>
            <p className="card-value">
              2 Bury Old Road, <br /> Manchester, M8 9JN
            </p>
          </div>

          <div className="contact-card">
            <p className="card-label">OPENING HOURS</p>
            <p className="card-value">
              Monday to Saturday <br /> 11:00am – 11:30pm <br /> Sunday 12:00pm –
              11:00pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
