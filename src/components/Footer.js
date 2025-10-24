import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
  <footer className="footer-wrapper">
    <div className="footer-container">
      {/* Contact Info */}
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: support@sheltersouls.org</p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: Ludhiana, Punjab, India</p>
      </div>

      {/* Quick Links */}
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/victim-form">Request Help</Link></li>
          <li><Link to="/ngos">Find NGOs</Link></li>
        </ul>
      </div>

      {/* About */}
      <div className="footer-section">
        <h3>About Shelter Souls</h3>
        <p>
          We connect disaster victims with NGOs to deliver timely aid, shelter, and hope. Our mission is to empower humanity through technology and compassion.
        </p>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Shelter Souls | Empowering Humanity & Hope</p>
    </div>
  </footer>
);

export default Footer;