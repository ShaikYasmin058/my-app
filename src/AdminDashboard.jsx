
  import React from "react";
  import { useNavigate } from "react-router-dom";
  import "./App.css";

  const AdminDashboard = () => {
    const navigate = useNavigate();

    return (
      <div className="dashboard-container">
        <div className="admin-card">
          <img
            src="https://via.placeholder.com/120"
            alt="Admin Profile"
            className="admin-profile"
          />
          <h2>Welcome, Admin</h2>
          <p>Manage your campaigns efficiently</p>
          <div className="dashboard-buttons">
            <button onClick={() => navigate("/add-campaign")}>➕ Add Campaign</button>
            <button onClick={() => navigate("/campaign")}>📋 View Campaign</button>
            <button className="logout-btn" onClick={() => navigate("/")}>🚪 Logout</button>
          </div>
        </div>
      </div>
    );
  };

  export default AdminDashboard;






