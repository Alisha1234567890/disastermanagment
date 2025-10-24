import React from "react";
import "./NGOList.css";

const NGOList = () => {
  const ngos = [
    { name: "Helping Hands", location: "Shimla", type: "Food & Shelter" },
    { name: "ReliefNow", location: "Mandi", type: "Medical Aid" },
    { name: "Animal Angels", location: "Kullu", type: "Animal Rescue" },
  ];

  return (
    <section className="ngo-section">
      <div className="ngo-container">
        <h2 className="ngo-title">Active NGOs</h2>
        <div className="ngo-grid">
          {ngos.map((ngo, i) => (
            <div key={i} className="ngo-card">
              <h3 className="ngo-name">{ngo.name}</h3>
              <p className="ngo-location">📍 {ngo.location}</p>
              <p className="ngo-type">💼 {ngo.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NGOList;