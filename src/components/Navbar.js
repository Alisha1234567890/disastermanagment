import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-green-400 to-orange-400 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-lg">
        {/* Logo */}
        <div className="text-3xl font-bold flex items-center gap-2">
          🌍 <span>Shelter Souls</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/victim-form" className="hover:underline">Request Help</Link>
          </li>
          <li>
            <Link to="/ngos" className="hover:underline">Find NGOs</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden flex flex-col justify-between w-7 h-6 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-1 w-full bg-white transform transition duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-white transition duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-white transform transition duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden bg-gradient-to-r from-blue-600 via-green-400 to-orange-400 text-white flex flex-col gap-6 px-6 pb-6 text-lg font-medium transition-max-h duration-300 overflow-hidden ${
          menuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/victim-form" onClick={() => setMenuOpen(false)}>Request Help</Link>
        </li>
        <li>
          <Link to="/ngos" onClick={() => setMenuOpen(false)}>Find NGOs</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;