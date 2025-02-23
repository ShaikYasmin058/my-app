import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Support Our Cause</h1>
      <p>Your donation helps us make a difference in the community.</p>
      <button className="donate-button" onClick={() => navigate("/campaign")}>
        Donate Now
      </button>
    </div>
  );
};

export default Home;