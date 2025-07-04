import React, { useEffect, useState } from "react";
import "./AdminDashboard.css"; // optional CSS styling

const AdminDashboard = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5001/donations")
      .then((res) => res.json())
      .then((data) => {
        setDonations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching donations:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>📊 Admin Dashboard</h1>
      {loading ? (
        <p>Loading donations...</p>
      ) : donations.length === 0 ? (
        <p>No donations found.</p>
      ) : (
        <table className="donation-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount (₹)</th>
              <th>Payment Method</th>
              <th>Campaign</th>
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
