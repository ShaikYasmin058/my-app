import React from "react";

const Contact = () => {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f4f4f4",
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
        Contact Us
      </h1>

      {/* Contact Information Section */}
      <div style={{
        width: "50%",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
      }}>
        <p style={{ fontSize: "18px", color: "#333", marginBottom: "15px" }}>
          Have questions? Reach out to us!
        </p>
        <p style={{ fontSize: "20px", fontWeight: "bold", color: "#2c3e50" }}>
          📧 Email: <a href="mailto:support@crowdfunding.com" style={{ textDecoration: "none", color: "#8b689e" }}>support@crowdfunding.com</a>
        </p>
        <p style={{ fontSize: "20px", fontWeight: "bold", color: "#2c3e50" }}>
          📞 Phone: <a href="tel:+1234567890" style={{ textDecoration: "none", color: "#8b689e" }}>+1 234 567 890</a>
        </p>
      </div>

      {/* Contact Form */}
      <div style={{
        width: "50%",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "15px",
        marginTop: "20px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
      }}>
        <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>Send Us a Message</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="text" placeholder="Your Name" style={inputStyle} required />
          <input type="email" placeholder="Your Email" style={inputStyle} required />
          <textarea placeholder="Your Message" rows="4" style={{ ...inputStyle, height: "100px" }} required></textarea>
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </div>
    </div>
  );
};

// Styles for inputs and button
const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "12px",
  backgroundColor: "#8b689e",
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  transition: "0.3s",
};

export default Contact;