import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gradient-to-r from-indigo-900 via-skyblue-800 to-green-700 text-white font-inter">
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Contact Info */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-yellow-300">Contact Us</h3>
        <ul className="space-y-2 text-sm text-gray-200">
          <li>Email: <a href="mailto:support@sheltersouls.org" className="hover:underline">support@sheltersouls.org</a></li>
          <li>Phone: <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a></li>
          <li>Location: Ludhiana, Punjab, India</li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-yellow-300">Quick Links</h3>
        <ul className="space-y-3 text-sm text-gray-200">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          </li>
          <li>
            <Link to="/victim-form" className="hover:text-yellow-300 transition">Request Help</Link>
          </li>
          <li>
            <Link to="/ngos" className="hover:text-yellow-300 transition">Find NGOs</Link>
          </li>
        </ul>
      </div>

      {/* About */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-yellow-300">About Shelter Souls</h3>
        <p className="text-sm text-gray-200 leading-relaxed">
          We connect disaster victims with NGOs to deliver timely aid, shelter, and hope.
          Our mission is to empower humanity through technology and compassion.
        </p>
      </div>
    </div>

    <div className="bg-black bg-opacity-30 text-center py-4 text-sm text-gray-300 border-t border-gray-700">
      © {new Date().getFullYear()} Shelter Souls · Empowering Humanity & Hope
    </div>
  </footer>
);

export default Footer;