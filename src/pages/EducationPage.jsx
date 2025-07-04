import React from "react";
import causes from "../data/causesData";


import "./EducationPage.css";
const EducationPage = () => {
  const educationCauses = causes.filter(cause => cause.category === "Education");

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Education Causes</h2>
      <p className="mb-6">Empowering Change Through Compassionate Education</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationCauses.map((cause, index) => (
          <div key={index} className="border rounded-lg shadow p-4">
            <img src={cause.image} alt={cause.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold">{cause.title}</h3>
            <p className="text-gray-700">Raised: ₹{cause.raised} / ₹{cause.goal}</p>
            <div className="bg-gray-200 h-2 rounded-full mt-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${(cause.raised / cause.goal) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
