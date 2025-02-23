import React from "react";

const About = () => {
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
        About Crowdfunding
      </h1>
      
      {/* Crowdfunding Image with Full Width Styling */}
      <div style={{
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJX-3CKT66F6BlgY1zPKlF1wi_KiPmuMm_cAyuy19xI1Zwj0VK7mrVoFKCZjmWZrZKiw&usqp=CAU"
          alt="Crowdfunding"
          style={{ 
            width: "100%", 
            height: "400px",
            objectFit: "cover",
            borderRadius: "15px", 
            border: "5px solid #8b689e",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)"
          }}
        />
      </div>

      {/* Description Section */}
      <p style={{ 
        width: "80%",
        marginTop: "20px",
        fontSize: "20px", 
        lineHeight: "1.8", 
        color: "#333",
        padding: "30px",
        backgroundColor: "white",
        borderRadius: "15px",
        textAlign: "justify",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
      }}>
        Crowdfunding is a modern fundraising method where individuals, startups, and organizations 
        raise small contributions from a large number of people through online platforms. This innovative 
        approach enables creative projects, social causes, and businesses to receive financial 
        support directly from a community of backers. It empowers individuals to bring their 
        ideas to life while allowing supporters to make a real impact on projects they believe in.
      </p>
    </div>
  );
};

export default About;