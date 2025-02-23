import React from "react";
import "./App.css"; // Ensure styles are included

// Import images from src/assets
import cdImage from "./assets/cd.jpeg";
import hands2Image from "./assets/hands2.jpeg";
import udImage from "./assets/ud.jpeg";

const campaigns = [
  {
    id: 1,
    title: "Help Children Get Education",
    description: "Support underprivileged children by providing books and school supplies.",
    image: cdImage, // ✅ Fixed typo
  },
  {
    id: 2,
    title: "Save The Rainforest",
    description: "Donate to plant trees and protect wildlife in the Amazon rainforest.",
    image: hands2Image,
  },
  {
    id: 3,
    title: "Clean Water Initiative",
    description: "Provide clean drinking water to communities in need.",
    image: udImage,
  },
];

const Campaign = () => {
  return (
    <div className="campaign-container">
      <h1 className="campaign-title">Ongoing Campaigns</h1>
      <div className="campaign-list">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="campaign-card">
            <img className="campaign-image" src={campaign.image} alt={campaign.title} />
            <div className="campaign-content">
              <h2>{campaign.title}</h2>
              <p>{campaign.description}</p>
              <button className="donate-button">Donate</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaign;
