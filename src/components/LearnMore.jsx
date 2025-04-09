import React from "react";
import { useNavigate } from "react-router-dom";

const LearnMore = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      width: "100vw",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f9f9f9",
      fontFamily: "'Poppins', sans-serif",
      padding: "20px",
      boxSizing: "border-box",
    }}>
      <h1 style={{ 
        color: "#2c3e50", 
        fontSize: "40px", 
        marginBottom: "20px",
        textTransform: "uppercase",
      }}>
        Learn More About Crowdfunding
      </h1>

      <p style={{ 
        width: "80%",
        fontSize: "18px", 
        lineHeight: "1.8", 
        color: "#333",
        textAlign: "justify",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}>
        Crowdfunding is an innovative fundraising approach that allows individuals, businesses, and organizations 
        to collect funds from a large group of supporters, typically through online platforms. There are four primary 
        types of crowdfunding:
        <br /><br />
        🔹 **Reward-based Crowdfunding** - Backers receive a product, service, or exclusive perks in return for their contributions.<br />
        🔹 **Equity Crowdfunding** - Investors receive shares or equity in a startup or business in exchange for their investment.<br />
        🔹 **Donation-based Crowdfunding** - Supporters donate money to causes, charities, or community projects without expecting a financial return.<br />
        🔹 **Debt Crowdfunding (Peer-to-Peer Lending)** - Contributors lend money to individuals or businesses with the expectation of repayment with interest.
        <br /><br />
        Crowdfunding has revolutionized fundraising by making it accessible, transparent, and community-driven, helping thousands of projects come to life.
      </p>

      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          backgroundColor: "#8b689e",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          transition: "0.3s ease-in-out",
        }}>
        🔙 Go Back
      </button>
    </div>
  );
};

export default LearnMore;
