import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();  

  return (
    <div style={{ 
      width: "100vw",
      minHeight: "100vh", // ✅ Ensures proper vertical alignment
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f8f9fa",
      fontFamily: "'Poppins', sans-serif",
      padding: "30px 20px",
      boxSizing: "border-box",
      textAlign: "center",
    }}>
      
      {/* 🌟 About Heading */}
      <h1 style={{ 
        color: "#6A0572", 
        fontSize: "36px",
        marginBottom: "15px",
        textTransform: "uppercase",
        fontWeight: "bold",
        letterSpacing: "1px"
      }}>
        About Us
      </h1>

      <p style={{
        fontSize: "17px",
        color: "#444",
        marginBottom: "20px",
        width: "75%",
        lineHeight: "1.6",
      }}>
        We believe in the power of crowdfunding to bring dreams to life. 
        Our platform connects visionaries with supporters, 
        making it easier to raise funds and turn ideas into reality.
      </p>

      {/* 🌍 About Us Image */}
      <div style={{
        width: "80%",
        maxWidth: "750px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "25px",
      }}>
        <img 
          src="https://files.oaiusercontent.com/file-STpX3dAzWeXNCakhz6Hzz9?se=2025-02-24T16%3A27%3A53Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D48152c73-3f7d-487c-bbbf-5f22e17c6352.webp&sig=13uZTrppVeUUYyQHg6cccUFZm3H7esltcciOuQ9ZTxk%3D"
          alt="Crowdfunding Support"
          style={{ 
            width: "100%", 
            maxHeight: "300px",
            borderRadius: "12px", 
            border: "4px solid #6A0572",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)"
          }}
        />
      </div>

      {/* 📝 More Information Section */}
      <p style={{ 
        width: "75%",
        fontSize: "17px", 
        lineHeight: "1.6", 
        color: "#333",
        textAlign: "justify",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
      }}>
        Our mission is to empower individuals, entrepreneurs, and social initiatives by providing a seamless crowdfunding platform. 
        Whether you're looking to launch a new business, support a charitable cause, or bring a creative idea to life, 
        we make fundraising easy, transparent, and accessible to everyone.
        <br /><br />
        <strong>Why Choose Us?</strong><br />
        ✅ <strong>Secure and Trusted Platform</strong> - Built with transparency and reliability.<br />
        ✅ <strong>Multiple Crowdfunding Options</strong> - Reward-based, equity, donation, and debt models.<br />
        ✅ <strong>Global Reach</strong> - Connect with supporters worldwide.<br />
        ✅ <strong>Easy-to-Use Tools</strong> - User-friendly interface and analytics.
      </p>

      {/* 🎓 Learn More Button */}
      <button 
        onClick={() => navigate("/learn-more")} 
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          backgroundColor: "#6A0572",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.2)",
          transition: "0.3s ease-in-out",
        }}>
        📖 Learn More
      </button>
    </div>
  );
};


export default About;
