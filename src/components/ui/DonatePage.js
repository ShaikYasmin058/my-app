import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Campaign.css";

const DonatePage = () => {
  const location = useLocation();
  const campaign = location.state;
  const navigate = useNavigate();

  if (!campaign) {
    return <h2>No Campaign Found!</h2>;
  }

  return (
    <div className="donate-container">
      <h1>Donate to: {campaign.title}</h1>
      <p>Your contribution helps make a difference!</p>
      <button className="donate-confirm-button" onClick={() => alert("Donation Successful!")}>
        ✅ Confirm Donation
      </button>
      <button className="back-button" onClick={() => navigate(-1)}>🔙 Back</button>
    </div>
  );
};

export default DonatePage;
