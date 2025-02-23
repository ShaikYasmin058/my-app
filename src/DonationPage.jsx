
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./DonationPage.css";

const DonationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const campaign = location.state;

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("PhonePe");
  const [donations, setDonations] = useState([]);

  if (!campaign) {
    return <h2>No campaign selected</h2>;
  }

  const handleDonate = () => {
    if (!name.trim() || amount <= 0) {
      alert("Please enter a valid name and donation amount.");
      return;
    }

    const newDonation = {
      id: donations.length + 1,
      name,
      amount,
      paymentMethod,
      date: new Date().toLocaleString(),
    };

    setDonations([...donations, newDonation]);
    alert(`Thank you, ${name}, for donating $${amount} via ${paymentMethod}!`);

    // Reset fields
    setName("");
    setAmount("");
    setPaymentMethod("PhonePe");
  };

  return (
    <div className="donation-page">
      {/* Full-Screen Background Section */}
      <div className="donation-content">
        <div className="donation-info">
          <h1 className="donation-title">{campaign.title}</h1>
          <p className="donation-description">{campaign.description}</p>
          
          {/* Donation Form */}
          <div className="donation-form">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Donation Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            
            {/* Payment Method */}
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="PhonePe">Select</option>
              <option value="PhonePe">PhonePe</option>
              <option value="Google Pay">Google Pay</option>
              <option value="PayPal">PayPal</option>
            </select>

            <button className="donate-button" onClick={handleDonate}>Donate Now</button>
          </div>
        </div>

        {/* Display Campaign Image */}
        <div className="donation-image-container">
          <img className="donation-image" src={campaign.image} alt={campaign.title} />
        </div>
      </div>

      {/* Donation History */}
      {donations.length > 0 && (
        <div className="donation-history">
          <h2>Recent Donations</h2>
          <ul>
            {donations.map((donation) => (
              <li key={donation.id}>
                <strong>{donation.name}</strong> donated <span className="donation-amount">${donation.amount}</span> via <span className="payment-method">{donation.paymentMethod}</span> on {donation.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DonationPage;  
