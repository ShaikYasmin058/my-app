import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Campaign.css";

const DonatePage = () => {
  const location = useLocation();
  const campaign = location.state || { title: "Unknown Campaign" }; // 🛠 Fallback data
  const navigate = useNavigate();

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

















import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import LearnMore from "./LearnMore";
import DonatePage from "./DonatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/learn-more" element={<LearnMore />} />  {/* Make sure this is correct */}
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
    </Router>
  );
}

export default App;



