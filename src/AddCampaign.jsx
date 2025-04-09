import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCampaign = () => {
  console.log("✅ AddCampaign Component Loaded");

  const navigate = useNavigate();
  const [campaign, setCampaign] = useState({
    name: "",
    subheading: "",
    description: "",
    amount: "",
  });

  const [donations, setDonations] = useState([]); // Store donation messages
  const [donorName, setDonorName] = useState("");
  const [donationAmount, setDonationAmount] = useState("");

  const handleChange = (e) => {
    setCampaign({ ...campaign, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!campaign.name || !campaign.subheading || !campaign.description || !campaign.amount) {
      alert("❌ Please fill in all fields before submitting.");
      return;
    }

    console.log("✅ Campaign Details Submitted:", campaign);
    navigate("/campaign", { state: { campaign } });
  };

  const handleDonate = (e) => {
    e.preventDefault();

    if (!donorName || !donationAmount) {
      alert("❌ Please enter your name and donation amount.");
      return;
    }

    const newDonation = `${donorName} donated $${donationAmount}! 🎉`;
    setDonations([...donations, newDonation]);

    // Reset fields
    setDonorName("");
    setDonationAmount("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2 style={styles.heading}>📢 Add New Campaign</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Campaign Name"
            value={campaign.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="subheading"
            placeholder="Campaign Subheading"
            value={campaign.subheading}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            name="description"
            placeholder="Campaign Description"
            value={campaign.description}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
          <input
            type="number"
            name="amount"
            placeholder="Target Amount ($)"
            value={campaign.amount}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>🚀 Submit Campaign</button>
        </form>
      </div>

      <div style={styles.formBox}>
        <h2 style={styles.heading}>💖 Make a Donation</h2>
        <form onSubmit={handleDonate}>
          <input
            type="text"
            placeholder="Your Name"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Donation Amount ($)"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>💰 Donate Now</button>
        </form>

        {/* Display donation messages */}
        <div style={styles.donationBox}>
          <h3>Recent Donations 💬</h3>
          <ul style={styles.donationList}>
            {donations.map((donation, index) => (
              <li key={index} style={styles.donationItem}>{donation}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// ✅ Inline Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "30px",
    padding: "40px",
    backgroundColor: "#f4f4f9",
  },
  formBox: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    width: "350px",
    textAlign: "center",
  },
  heading: {
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    height: "80px",
    resize: "none",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  donationBox: {
    marginTop: "20px",
    textAlign: "left",
  },
  donationList: {
    listStyleType: "none",
    padding: "0",
  },
  donationItem: {
    background: "#e9f5ff",
    padding: "8px",
    margin: "5px 0",
    borderRadius: "5px",
  },
};

export default AddCampaign;
