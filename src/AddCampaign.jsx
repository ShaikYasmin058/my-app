import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const AddCampaign = () => {
  console.log("✅ AddCampaign Component Loaded"); // Check if component loads

  const navigate = useNavigate();
  const [campaign, setCampaign] = useState({
    name: "",
    subheading: "",
    description: "",
    amount: "",
  });

  const handleChange = (e) => {
    setCampaign({ ...campaign, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Campaign Details Submitted:", campaign);

    // Ensure fields are not empty before navigating
    if (!campaign.name || !campaign.subheading || !campaign.description || !campaign.amount) {
      console.error("❌ Please fill all fields before submitting.");
      return;
    }

    navigate("/campaign", { state: { campaign } }); // Navigate to campaign page
  };

  return (
    <div className="campaign-form-container">
      <div className="form-box">
        <h2>Add New Campaign</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Campaign Name"
            value={campaign.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subheading"
            placeholder="Campaign Subheading"
            value={campaign.subheading}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Campaign Description"
            value={campaign.description}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Target Amount ($)"
            value={campaign.amount}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit Campaign</button>
        </form>
      </div>
    </div>
  );
};

export default AddCampaign;