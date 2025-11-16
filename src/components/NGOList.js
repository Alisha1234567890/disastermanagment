import React from "react";

const NGOList = () => {
  const ngos = [
    { name: "Helping Hands", location: "Shimla", type: "Food & Shelter" },
    { name: "ReliefNow", location: "Mandi", type: "Medical Aid" },
    { name: "Animal Angels", location: "Kullu", type: "Animal Rescue" },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Active NGOs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ngos.map((ngo, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transform transition"
            >
              <h3 className="text-xl font-bold mb-2">{ngo.name}</h3>
              <p className="text-gray-600 mb-1">📍 {ngo.location}</p>
              <p className="text-gray-600">💼 {ngo.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NGOList;
