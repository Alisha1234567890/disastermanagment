import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import flood1 from "../img/flood1.jpg";
import flood2 from "../img/flood4.jpg";
import flood3 from "../img/flood5.jpg";
import "./Home.css";

const Home = () => {
  const images = [flood1, flood2, flood3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section className="home-wrapper">
        <div className="home-container">
          <div className="home-left">
            <h2>Why Shelter Souls?</h2>
            <p>
              In moments of disaster, Shelter Souls connects victims with NGOs instantly. We bring clarity, compassion, and coordination when it matters most.
            </p>
          </div>

          <div className="home-center">
            <div className="carousel">
              <img
                src={images[currentIndex]}
                alt="Disaster Relief"
                className="home-image"
              />
            </div>
          </div>

          <div className="home-right">
            <h2>Join the Movement</h2>
            <p>
              Whether you're seeking help or offering it, Shelter Souls is your bridge to action. Together, we rebuild hope.
            </p>
            <div className="home-buttons">
              <Link to="/victim-form" className="btn btn-primary">Request Help</Link>
              <Link to="/ngos" className="btn btn-secondary">Explore NGOs</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-extension">
        <div className="extension-content">
          <h2>Our Mission</h2>
          <p>
            Shelter Souls is committed to transforming disaster response through technology and compassion. We empower communities, support NGOs, and ensure no voice goes unheard.
          </p>
          <div className="impact-stats">
            <div>
              <h3>5000+</h3>
              <p>Victims Helped</p>
            </div>
            <div>
              <h3>120+</h3>
              <p>Partner NGOs</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>Support Access</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <div className="footer-content">
          <p>© 2025 Shelter Souls. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/victim-form">Request Help</Link>
            <Link to="/ngos">Find NGOs</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;