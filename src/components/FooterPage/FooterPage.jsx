import React from "react";
import "./FooterPage.css";
import { FaInstagram, FaFacebookF, FaGoogle, FaTripadvisor } from "react-icons/fa";

const FooterPage = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h2 className="footer-logo">☕ Cafe Italia</h2>

        <ul className="footer-nav">
          <li>HOME</li>
          <li>MENU</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>

        <div className="footer-icons">
          <FaInstagram />
          <FaTripadvisor />
          <FaGoogle />
          <FaFacebookF />
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2024 Istanbul Restaurant Manchester. All Rights Reserved |{" "}
          <span className="footer-link">Powered By Fooodo</span>
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
