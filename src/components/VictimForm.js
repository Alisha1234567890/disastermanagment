import React, { useState } from "react";
import "./VictimForm.css";

const VictimForm = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    need: "",
    contact: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your help request has been submitted successfully!");
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form-box">
        <h2 className="form-title">Request Help</h2>

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          required
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={handleChange}
          required
        />

        <label htmlFor="need">Type of Help Needed</label>
        <select name="need" id="need" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="food">Food</option>
          <option value="shelter">Shelter</option>
          <option value="medical">Medical</option>
          <option value="animal">Animal Rescue</option>
        </select>

        <label htmlFor="contact">Contact Number</label>
        <input
          type="tel"
          name="contact"
          id="contact"
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default VictimForm;
