import React from "react";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>More About Crowdfunding</h1>
      <p>Crowdfunding allows people to bring ideas to life with community support. It helps startups, charities, and projects gain funds.</p>
      
      {/* Back Button */}
      <Link to="/" style={{
        display: "inline-block",
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#3498db",
        color: "white",
        borderRadius: "10px",
        textDecoration: "none"
      }}>
        🔙 Back to Home
      </Link>
    </div>
  );
};

export default LearnMore;
