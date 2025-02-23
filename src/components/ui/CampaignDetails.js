import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Campaign.css";

const CampaignDetails = () => {
  const location = useLocation();
  const campaign = location.state;
  const navigate = useNavigate();

  if (!campaign) {
    return <h2>No Campaign Found!</h2>;
  }

  return (
    <div className="campaign-details-container">
      <h1>{campaign.title}</h1>
      <img className="campaign-details-image" src={campaign.image} alt={campaign.title} />
      <p>{campaign.description}</p>
      <button className="back-button" onClick={() => navigate(-1)}>🔙 Back</button>
    </div>
  );
};

export default CampaignDetails;
