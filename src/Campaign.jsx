import React from "react";
import { useNavigate } from "react-router-dom";
import "./Campaign.css";

import ab from "./assets/ab.jpeg";
import na from "./assets/na.jpeg";
import hands1 from "./assets/hands1.jpeg";

const campaigns = [
  {
    id: 1,
    title: "Help Children Get Education",
    description: "Support underprivileged children by providing books and school supplies.",
    image: ab,
  },
  {
    id: 2,
    title: "Save The Rainforest",
    description: "Donate to plant trees and protect wildlife in the Amazon rainforest.",
    image: na,
  },
  {
    id: 3,
    title: "Clean Water Initiative",
    description: "Provide clean drinking water to communities in need.",
    image: hands1,
  },
];

const Campaign = () => {
  const navigate = useNavigate();

  return (
    <div className="campaign-container">
      <h1 className="campaign-title">🌍 Ongoing Campaigns</h1>
      <div className="campaign-list">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="campaign-card">
            <img className="campaign-image" src={campaign.image} alt={campaign.title} />
            <div className="campaign-content">
              <h2>{campaign.title}</h2>
              <p>{campaign.description}</p>
              <div className="button-group">
                <button
                  className="view-details-button"
                  onClick={() => navigate(`/campaign/${campaign.id}`, { state: campaign })}
                >
                  📄 View Details
                </button>
                <button
                  className="donate-button"
                  onClick={() => navigate(`/donate/${campaign.id}`, { state: campaign })}
                >
                  💰 Donate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaign;
