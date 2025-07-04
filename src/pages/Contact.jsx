import React from "react";

const Contact = () => {
  const recipient = "team@example.com"; // Replace with your real email
  const subject = "I want to know more about your platform";
  const body =
    "Hi Team,%0D%0A%0D%0AI would like to get more details about your services.%0D%0A%0D%0AThanks!";

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${body}`;

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>📧 Contact Us</h2>
      <p style={{ fontSize: "18px", maxWidth: "500px", margin: "0 auto" }}>
        We'd love to hear from you! Click below to send us a message.
      </p>
      <a
        href={mailtoLink}
        style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "14px 28px",
          backgroundColor: "#6A0572",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "10px",
          fontSize: "18px",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#4b024f")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#6A0572")}
      >
        💌 Let’s Connect!
      </a>
    </div>
  );
};

export default Contact;
