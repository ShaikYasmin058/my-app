import React from "react";
import { useNavigate } from "react-router-dom";
import "./Campaign.css"; 

const campaigns = [
  {
    id: 1,
    title: "Help Children Get Education",
    description: "Support underprivileged children by providing books and school supplies.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefjRYuzAshUls8iNYMms1x5ZL6F2N0uci6g&s",
    
    
  },
  {
    id: 2,
    title: "Save The Rainforest",
    description: "Donate to plant trees and protect wildlife in the Amazon rainforest.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXgqD9_nYHd4tm1qMv7fx9PJLsVndTo0yIg&s",
  },
  {
    id: 3,
    title: "Clean Water Initiative",
    description: "Provide clean drinking water to communities in need.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShL0cCGJPaf_33d_2dl6OsOhP7zlZ5v7Jr0g&s",
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