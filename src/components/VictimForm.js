import React, { useState, useEffect } from "react";
import axios from "axios";

const VictimForm = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    need: "",
    contact: "",
    latitude: "",
    longitude: "",
  });

  // Get human-readable location using OpenCage
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;

          try {
            const geoRes = await axios.get(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=70017fa58e004d018f559db61b1e6745`
            );

            const address = geoRes.data.results[0].formatted;

            setForm((prev) => ({
              ...prev,
              location: address,
              latitude: latitude.toFixed(6),
              longitude: longitude.toFixed(6),
            }));
          } catch (err) {
            console.error("OpenCage error:", err);
          }
        },
        () => {
          console.warn("Location access denied");
        }
      );
    }
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/victims", form);

      const currentCount = parseInt(localStorage.getItem("victimCount") || "0", 10);
      localStorage.setItem("victimCount", currentCount + 1);

      alert("✅ Your help request has been submitted successfully!");

      setForm({
        name: "",
        location: "",
        need: "",
        contact: "",
        latitude: "",
        longitude: "",
      });
    } catch (err) {
      console.error("❌ Error submitting request:", err.message);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 flex items-center justify-center py-16 px-4 font-inter">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md transition-all duration-300"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">Request Help</h2>

        <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <label htmlFor="location" className="block mb-2 font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          name="location"
          id="location"
          value={form.location}
          onChange={handleChange}
          required
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        {form.latitude && form.longitude && (
          <p className="text-sm text-gray-600 mb-4">
            📍 Coordinates: {form.latitude}, {form.longitude}
          </p>
        )}

        <label htmlFor="need" className="block mb-2 font-medium text-gray-700">
          Type of Help Needed
        </label>
        <select
          name="need"
          id="need"
          value={form.need}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">Select</option>
          <option value="food">Food</option>
          <option value="shelter">Shelter</option>
          <option value="medical">Medical</option>
          <option value="animal">Animal Rescue</option>
        </select>

        <label htmlFor="contact" className="block mb-2 font-medium text-gray-700">
          Contact Number
        </label>
        <input
          type="tel"
          name="contact"
          id="contact"
          value={form.contact}
          onChange={handleChange}
          required
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default VictimForm;