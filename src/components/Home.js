import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import flood1 from "../img/flood1.jpg";
import flood2 from "../img/flood4.jpg";
import flood3 from "../img/flood5.jpg";

const Home = () => {
  const images = [flood1, flood2, flood3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [victimCount, setVictimCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const count = parseInt(localStorage.getItem("victimCount") || "0", 10);
    setVictimCount(count);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-gray-800 font-inter">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 py-12">
        <div className="flex flex-col lg:flex-row w-full max-w-[1400px] h-full shadow-xl rounded-2xl overflow-hidden bg-white">
          {/* Left */}
          <div className="basis-1/4 p-8 flex flex-col justify-center text-left">
            <h2 className="text-3xl font-bold mb-4 text-indigo-900">Why Shelter Souls?</h2>
            <p className="text-gray-700">
              In moments of disaster, Shelter Souls connects victims with NGOs instantly. We bring clarity, compassion, and coordination when it matters most.
            </p>
          </div>

          {/* Center Carousel */}
          <div className="basis-1/2 flex items-center justify-center bg-white h-[500px]">
            <img
              src={images[currentIndex]}
              alt="Disaster Relief"
              className="w-full h-full object-cover rounded-xl shadow-2xl ring-2 ring-indigo-300 transition-opacity duration-700"
            />
          </div>

          {/* Right */}
          <div className="basis-1/4 p-8 flex flex-col justify-center text-left">
            <h2 className="text-3xl font-bold mb-4 text-indigo-900">Join the Movement</h2>
            <p className="text-gray-700 mb-6">
              Whether you're seeking help or offering it, Shelter Souls is your bridge to action. Together, we rebuild hope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/victim-form"
                className="px-6 py-3 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 transition"
              >
                Request Help
              </Link>
              <Link
                to="/ngos"
                className="px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
              >
                Explore NGOs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6 text-indigo-900">Our Mission</h2>
          <p className="text-gray-700 mb-12">
            Shelter Souls is committed to transforming disaster response through technology and compassion. We empower communities, support NGOs, and ensure no voice goes unheard.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow">
              <h3 className="text-2xl font-bold text-indigo-800">{victimCount}</h3>
              <p className="text-gray-600 mt-2">Victims Helped</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow">
              <h3 className="text-2xl font-bold text-indigo-800">120+</h3>
              <p className="text-gray-600 mt-2">Partner NGOs</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow">
              <h3 className="text-2xl font-bold text-indigo-800">24/7</h3>
              <p className="text-gray-600 mt-2">Support Access</p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Home;