import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/donations")
      .then((res) => res.json())
      .then((data) => setDonations(data))
      .catch((err) => {
        console.error("Failed to fetch donations", err);
      });
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>🧾 Admin Dashboard – Donations</h1>
      {donations.length === 0 ? (
        <p>No donations yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount (₹)</th>
              <th>Payment Method</th>
              <th>Campaign Title</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation._id}>
                <td>{donation.name}</td>
                <td>₹{donation.amount}</td>
                <td>{donation.paymentMethod}</td>
                <td>{donation.campaignTitle}</td>
                <td>{new Date(donation.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
