// import React from "react";
// import { useNavigate } from "react-router-dom";

// const About = () => {
//   const navigate = useNavigate();  

//   return (
//     <div style={{ 
//       width: "100vw",
//       minHeight: "100vh", // ✅ Ensures proper vertical alignment
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: "#f8f9fa",
//       fontFamily: "'Poppins', sans-serif",
//       padding: "30px 20px",
//       boxSizing: "border-box",
//       textAlign: "center",
//     }}>
      
//       {/* 🌟 About Heading */}
//       <h1 style={{ 
//         color: "#6A0572", 
//         fontSize: "36px",
//         marginBottom: "15px",
//         textTransform: "uppercase",
//         fontWeight: "bold",
//         letterSpacing: "1px"
//       }}>
//         About Us
//       </h1>

//       <p style={{
//         fontSize: "17px",
//         color: "#444",
//         marginBottom: "20px",
//         width: "75%",
//         lineHeight: "1.6",
//       }}>
//         We believe in the power of crowdfunding to bring dreams to life. 
//         Our platform connects visionaries with supporters, 
//         making it easier to raise funds and turn ideas into reality.
//       </p>

//       {/* 🌍 About Us Image */}
//       <div style={{
//         width: "80%",
//         maxWidth: "750px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         marginBottom: "25px",
//       }}>
//         <img 
//           src="https://files.oaiusercontent.com/file-STpX3dAzWeXNCakhz6Hzz9?se=2025-02-24T16%3A27%3A53Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D48152c73-3f7d-487c-bbbf-5f22e17c6352.webp&sig=13uZTrppVeUUYyQHg6cccUFZm3H7esltcciOuQ9ZTxk%3D"
//           alt="Crowdfunding Support"
//           style={{ 
//             width: "100%", 
//             maxHeight: "300px",
//             borderRadius: "12px", 
//             border: "4px solid #6A0572",
//             boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)"
//           }}
//         />
//       </div>

//       {/* 📝 More Information Section */}
//       <p style={{ 
//         width: "75%",
//         fontSize: "17px", 
//         lineHeight: "1.6", 
//         color: "#333",
//         textAlign: "justify",
//         padding: "20px",
//         backgroundColor: "white",
//         borderRadius: "10px",
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
//       }}>
//         Our mission is to empower individuals, entrepreneurs, and social initiatives by providing a seamless crowdfunding platform. 
//         Whether you're looking to launch a new business, support a charitable cause, or bring a creative idea to life, 
//         we make fundraising easy, transparent, and accessible to everyone.
//         <br /><br />
//         <strong>Why Choose Us?</strong><br />
//         ✅ <strong>Secure and Trusted Platform</strong> - Built with transparency and reliability.<br />
//         ✅ <strong>Multiple Crowdfunding Options</strong> - Reward-based, equity, donation, and debt models.<br />
//         ✅ <strong>Global Reach</strong> - Connect with supporters worldwide.<br />
//         ✅ <strong>Easy-to-Use Tools</strong> - User-friendly interface and analytics.
//       </p>

//       {/* 🎓 Learn More Button */}
//       <button 
//         onClick={() => navigate("/learn-more")} 
//         style={{
//           marginTop: "20px",
//           padding: "12px 24px",
//           backgroundColor: "#6A0572",
//           color: "white",
//           border: "none",
//           borderRadius: "10px",
//           fontSize: "16px",
//           fontWeight: "bold",
//           cursor: "pointer",
//           boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.2)",
//           transition: "0.3s ease-in-out",
//         }}>
//         📖 Learn More
//       </button>
//     </div>
//   );
// };


// export default About;










// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const About = () => {
//   useEffect(() => {
//     // simple animation trigger: add class after mount for fade-in
//     const elements = document.querySelectorAll(".animate-box");
//     elements.forEach((el, i) => {
//       setTimeout(() => {
//         el.classList.add("visible");
//       }, i * 200); // stagger animation by 200ms each
//     });
//   }, []);

//   const sectionTitleStyle = { fontSize: "2rem", fontWeight: "700", marginBottom: "20px" };
//   const highlightStyle = { color: "#e91e63" };
//   const valueBoxImgStyle = { width: "80px", marginBottom: "10px" };
//   const ctaSectionStyle = {
//     background: "#f8f9fa",
//     padding: "40px",
//     borderRadius: "10px",
//     marginTop: "40px",
//   };

//   return (
//     <div className="container mt-5" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "12px" }}>
//       <style>{`
//         .value-box, .stat-box {
//           border-radius: 12px;
//           padding: 20px;
//           color: white;
//           margin-bottom: 20px;
//           opacity: 0;
//           transform: scale(0.9);
//           transition: all 0.5s ease-in-out;
//         }
//         .value-box.visible, .stat-box.visible {
//           opacity: 1;
//           transform: scale(1);
//         }
//         .value-compassion { background: #ff6f91; }  /* pink */
//         .value-integrity { background: #6c5ce7; }   /* purple */
//         .value-inclusivity { background: #00b894; } /* teal */
//         .stat-experience { background: #0984e3; }  /* blue */
//         .stat-global { background: #fd79a8; }      /* pink */
//         .stat-lives { background: #55efc4; color: #2d3436; } /* light teal with dark text */
//         .stat-projects { background: #fdcb6e; color: #2d3436; } /* yellow with dark text */
//       `}</style>

//       {/* Mission */}
//       <div className="text-center">
//         <h2 style={sectionTitleStyle}>Our Mission</h2>
//         <p>
//           To Provide <strong>Food, Education, Health, Water, Shelter, Environment</strong>.
//         </p>
//       </div>

//       {/* Welcome Section */}
//       <div className="mt-5">
//         <h2 style={sectionTitleStyle}>
//           Welcome to <span style={highlightStyle}>Myna Seva Foundation</span>
//         </h2>
//         <p>
//           Myna Seva Foundation is a beacon of hope and compassion dedicated to creating a brighter future for those in
//           need. We empower underserved communities through holistic and impactful initiatives spanning education,
//           healthcare, women’s empowerment, sustainable livelihoods, and disaster relief.
//         </p>
//       </div>

//       {/* Mission */}
//       <div className="mt-5">
//         <h3 style={sectionTitleStyle}>Myna Seva Foundation's Mission</h3>
//         <p>
//           To serve, uplift, and inspire. We tackle critical social issues through innovative programs, transparency,
//           and compassion—ensuring access to necessities and long-term growth for marginalized communities.
//         </p>
//       </div>

//       {/* Vision */}
//       <div className="mt-5">
//         <h3 style={sectionTitleStyle}>Myna Seva Foundation's Vision</h3>
//         <p>
//           A world where everyone, regardless of background, has the tools and opportunities to thrive. We are committed
//           to equality, empowerment, and creating an inclusive society with sustainable solutions.
//         </p>
//       </div>

//       {/* What We Do */}
//       <div className="mt-5">
//         <h3 style={sectionTitleStyle}>What Myna Seva Foundation Does</h3>
//         <ul>
//           <li>
//             <strong>Education:</strong> Scholarships, after-school tutoring, and digital literacy programs.
//           </li>
//           <li>
//             <strong>Healthcare:</strong> Free medical camps, medicine distribution, and health awareness.
//           </li>
//           <li>
//             <strong>Community Development:</strong> Support for farmers, artisans, and small entrepreneurs.
//           </li>
//         </ul>
//       </div>

//       {/* Values */}
//       <div className="row mt-5 text-center">
//         <div className="col-md-4 animate-box value-box value-compassion">
//           <img
//             src="https://via.placeholder.com/80?text=Compassion"
//             alt="Compassion"
//             style={valueBoxImgStyle}
//           />
//           <h5>Compassion</h5>
//           <p>We approach every challenge with empathy and kindness.</p>
//         </div>
//         <div className="col-md-4 animate-box value-box value-integrity">
//           <img
//             src="https://via.placeholder.com/80?text=Integrity"
//             alt="Integrity"
//             style={valueBoxImgStyle}
//           />
//           <h5>Integrity</h5>
//           <p>We are committed to transparency and accountability.</p>
//         </div>
//         <div className="col-md-4 animate-box value-box value-inclusivity">
//           <img
//             src="https://via.placeholder.com/80?text=Inclusivity"
//             alt="Inclusivity"
//             style={valueBoxImgStyle}
//           />
//           <h5>Inclusivity</h5>
//           <p>We believe in the power of diversity and unity.</p>
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="row mt-5 text-center">
//         <div className="col-md-3 animate-box stat-box stat-experience">
//           <img
//             src="https://via.placeholder.com/80?text=Experience"
//             alt="5+ Years Experience"
//             style={valueBoxImgStyle}
//           />
//           <h4>5+ Years</h4>
//           <p>Experience</p>
//         </div>
//         <div className="col-md-3 animate-box stat-box stat-global">
//           <img
//             src="https://via.placeholder.com/80?text=Global"
//             alt="Global Clients"
//             style={valueBoxImgStyle}
//           />
//           <h4>Globally</h4>
//           <p>Clients</p>
//         </div>
//         <div className="col-md-3 animate-box stat-box stat-lives">
//           <img
//             src="https://via.placeholder.com/80?text=Lives"
//             alt="44k Lives"
//             style={valueBoxImgStyle}
//           />
//           <h4>44k+</h4>
//           <p>Lives Touched</p>
//         </div>
//         <div className="col-md-3 animate-box stat-box stat-projects">
//           <img
//             src="https://via.placeholder.com/80?text=Projects"
//             alt="Projects Done"
//             style={valueBoxImgStyle}
//           />
//           <h4>5M+</h4>
//           <p>Projects Done</p>
//         </div>
//       </div>

//       {/* Video Section */}
//       <div className="mt-5 text-center">
//         <h3 style={sectionTitleStyle}>Life Changing Impact</h3>
//         <p>
//           Providing quality education, essential healthcare, nutritious food, and clean water has transformed countless
//           communities from poverty to prosperity.
//         </p>
//         <img
//           src="https://via.placeholder.com/600x300?text=Life+Changing+Video"
//           className="img-fluid rounded"
//           alt="Life Changing Video"
//         />
//       </div>

//       {/* Team Section */}
//       <div className="mt-5">
//         <h3 style={sectionTitleStyle}>Volunteers & Team</h3>
//         <div className="row">
//           <div className="col-md-3 animate-box" style={{ opacity: 0, transform: "scale(0.9)", transition: "all 0.5s ease-in-out" }}>
//             <img
//               src="https://via.placeholder.com/300x300?text=Team+Member+1"
//               className="img-fluid rounded"
//               alt="Team Member 1"
//             />
//           </div>
//           <div className="col-md-3 animate-box" style={{ opacity: 0, transform: "scale(0.9)", transition: "all 0.5s ease-in-out", transitionDelay: "0.2s" }}>
//             <img
//               src="https://via.placeholder.com/300x300?text=Team+Member+2"
//               className="img-fluid rounded"
//               alt="Team Member 2"
//             />
//           </div>
//           <div className="col-md-3 animate-box" style={{ opacity: 0, transform: "scale(0.9)", transition: "all 0.5s ease-in-out", transitionDelay: "0.4s" }}>
//             <img
//               src="https://via.placeholder.com/300x300?text=Team+Member+3"
//               className="img-fluid rounded"
//               alt="Team Member 3"
//             />
//           </div>
//           <div className="col-md-3 animate-box" style={{ opacity: 0, transform: "scale(0.9)", transition: "all 0.5s ease-in-out", transitionDelay: "0.6s" }}>
//             <img
//               src="https://via.placeholder.com/300x300?text=Team+Member+4"
//               className="img-fluid rounded"
//               alt="Team Member 4"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Call To Action */}
//       <div style={ctaSectionStyle} className="mt-5">
//         <h3 className="text-center" style={sectionTitleStyle}>
//           Give Your Big Hand Forever
//         </h3>
//         <form>
//           <div className="form-row">
//             <div className="form-group col-md-3">
//               <input type="text" className="form-control" placeholder="Enter your name" />
//             </div>
//             <div className="form-group col-md-3">
//               <input type="text" className="form-control" placeholder="Enter phone number" />
//             </div>
//             <div className="form-group col-md-3">
//               <input type="text" className="form-control" placeholder="Enter address" />
//             </div>
//             <div className="form-group col-md-3">
//               <input type="text" className="form-control" placeholder="Zip Code" />
//             </div>
//           </div>
//           <button type="submit" className="btn btn-primary btn-block">
//             Get Involved Today
//           </button>
//         </form>
//       </div>

//       {/* Footer */}
//       <footer className="mt-5 text-center">
//         <p className="mb-1">
//           <strong>Contact Us:</strong> +91 8142790079
//           <br />
//           T-Hub, Knowledge City, Hyderabad, Telangana 500081
//         </p>
//         <p>© Copyright 2024 Myna Seva Foundation. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default About;
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-box, .fade-in");
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, i * 200);
    });
  }, []);

  const sectionTitleStyle = {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "20px",
    textAlign: "center",
  };

  const valueBoxImgStyle = {
    width: "80px",
    marginBottom: "10px",
  };

  return (
    <div className="container mt-5" style={{ fontFamily: "'Georgia', serif" }}>
      <style>{`
        .fade-in, .animate-box {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-in-out;
        }

        .fade-in.visible, .animate-box.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .highlight-box {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.08);
          margin-bottom: 30px;
        }

        .highlight-box h2 {
          font-size: 1.75rem;
          color: #2d3436;
          text-align: center;
          margin-bottom: 20px;
        }

        .highlight-box p {
          font-size: 1.05rem;
          color: #444;
          line-height: 1.7;
          text-align: justify;
        }

        .mission-highlight {
          color: #e74c3c;
          font-weight: bold;
        }

        .value-box, .stat-box {
          border-radius: 12px;
          padding: 20px;
          color: white;
          margin-bottom: 20px;
        }

        .value-compassion { background: #ff6f91; }
        .value-integrity { background: #6c5ce7; }
        .value-inclusivity { background: #00b894; }
        .stat-experience { background: #0984e3; }
        .stat-global { background: #fd79a8; }
        .stat-lives { background: #55efc4; color: #2d3436; }
        .stat-projects { background: #fdcb6e; color: #2d3436; }
      `}</style>

      {/* Welcome Section */}
      <div className="highlight-box fade-in">
        <h2 className="section-title heading-blue">Welcome To Myna Seva Foundation</h2>

        <p>
          Welcome to <strong>Myna Seva Foundation</strong>, a beacon of hope and compassion dedicated to creating a brighter future for those in need.
          Founded with the vision of empowering communities and fostering sustainable change, we are committed to making a meaningful difference in
          the lives of individuals and families across India.
          <br /><br />
          As a leading non-profit organization in India, we are dedicated to creating sustainable change by addressing the root causes of poverty,
          inequality, and social injustice. Our mission is to empower underserved communities through holistic and impactful initiatives that span
          education, healthcare, women’s empowerment, sustainable livelihoods, and disaster relief.
          With a vision to build a brighter future for all, we work tirelessly to ensure that no one is left behind in the journey toward progress and prosperity.
        </p>
      </div>

      {/* Mission Section */}
      <div className="highlight-box fade-in">
        <h2><strong>Myna Seva Foundation’s Mission</strong></h2>
        <p>
          At Myna Seva Foundation, our mission is simple yet profound:
          <span className="mission-highlight"> to serve, uplift, and inspire</span>.
          We strive to address the most pressing challenges faced by underserved communities through innovative programs, collaborative partnerships,
          and a relentless focus on creating lasting impact.
        </p>
      </div>

      {/* Values */}
      <h2 style={sectionTitleStyle}>Our Core Values</h2>
      <div className="row text-center">
        <div className="col-md-4 animate-box value-box value-compassion">
          <img src="https://via.placeholder.com/80?text=Compassion" alt="Compassion" style={valueBoxImgStyle} />
          <h5>Compassion</h5>
          <p>We lead with empathy, embracing every individual with kindness and care.</p>
        </div>
        <div className="col-md-4 animate-box value-box value-integrity">
          <img src="https://via.placeholder.com/80?text=Integrity" alt="Integrity" style={valueBoxImgStyle} />
          <h5>Integrity</h5>
          <p>Our actions reflect honesty and transparency at every step.</p>
        </div>
        <div className="col-md-4 animate-box value-box value-inclusivity">
          <img src="https://via.placeholder.com/80?text=Inclusivity" alt="Inclusivity" style={valueBoxImgStyle} />
          <h5>Inclusivity</h5>
          <p>We celebrate diversity and unite to build stronger communities.</p>
        </div>
      </div>

      {/* Stats */}
      <h2 style={sectionTitleStyle} className="mt-5">Impact at a Glance</h2>
      <div className="row text-center mt-4">
        <div className="col-md-3 animate-box stat-box stat-experience">
          <img src="https://via.placeholder.com/80?text=Experience" alt="5+ Years" style={valueBoxImgStyle} />
          <h4>5+ Years</h4>
          <p>of Dedicated Service</p>
        </div>
        <div className="col-md-3 animate-box stat-box stat-global">
          <img src="https://via.placeholder.com/80?text=Global" alt="Global" style={valueBoxImgStyle} />
          <h4>Global</h4>
          <p>Partners and Friends</p>
        </div>
        <div className="col-md-3 animate-box stat-box stat-lives">
          <img src="https://via.placeholder.com/80?text=Lives" alt="44k Lives" style={valueBoxImgStyle} />
          <h4>44k+</h4>
          <p>Lives Empowered</p>
        </div>
        <div className="col-md-3 animate-box stat-box stat-projects">
          <img src="https://via.placeholder.com/80?text=Projects" alt="Projects" style={valueBoxImgStyle} />
          <h4>5M+</h4>
          <p>Projects Completed</p>

        </div>

          
          {/* What Myna Seva Foundation Does Section */}
<h2 style={sectionTitleStyle} className="mt-5">What Myna Seva Foundation Do</h2>
<div className="row mt-4">
  <div className="col-md-4 animate-box">
    <div className="highlight-box border-start border-primary border-4 h-100">
      <h4 className="fw-bold text-primary">Education</h4>
      <p>
        Education is the cornerstone of our efforts. We recognize that access to quality education is a fundamental right and a powerful tool for breaking the cycle of poverty. Through our programs, we provide underprivileged children with the resources, mentorship, and support they need to succeed academically and beyond. From scholarships and after-school tutoring to digital literacy programs, we are committed to nurturing the next generation of leaders, thinkers, and changemakers.
      </p>
    </div>
  </div>
  <div className="col-md-4 animate-box">
    <div className="highlight-box border-start border-danger border-4 h-100">
      <h4 className="fw-bold text-danger">Healthcare</h4>
      <p>
        Healthcare is another critical area of focus for Myna Seva Foundation. Millions of people in India lack access to basic medical care, leading to preventable illnesses and untold suffering. Our healthcare initiatives aim to bridge this gap by organizing free medical camps, distributing essential medicines, and raising awareness about preventive health practices. We also work closely with local communities to address maternal and child health, ensuring that vulnerable populations receive the care they need to thrive.
      </p>
    </div>
  </div>
  <div className="col-md-4 animate-box">
    <div className="highlight-box border-start border-success border-4 h-100">
      <h4 className="fw-bold text-success">Community Development</h4>
      <p>
        Building stronger communities through infrastructure and resource development. Sustainable livelihoods are essential for long-term community development. Our initiatives in this area focus on supporting farmers, artisans, and small entrepreneurs with the tools, training, and resources they need to build resilient and sustainable businesses. From agricultural training to market access programs, we are helping communities create a foundation for economic stability and growth.
      </p>
    </div>
  </div>
</div>
        {/* Foundation Values Section (Dark Box Style) */}
<div className="values-container animate-box">
  <h2 className="values-heading">Myna Seva Foundation’s Values</h2>
  <div className="row text-center">
    <div className="col-md-4 value-item">
      <div className="value-icon">❤️</div>
      <h5>Compassion</h5>
      <p>We approach every challenge with empathy and kindness.</p>
    </div>
    <div className="col-md-4 value-item">
      <div className="value-icon">🛡️</div>
      <h5>Integrity</h5>
      <p>We are committed to transparency and accountability.</p>
    </div>
    <div className="col-md-4 value-item">
      <div className="value-icon">👥</div>
      <h5>Inclusivity</h5>
      <p>We believe in the power of diversity and unity.</p>
    </div>
  </div>
  {/* ======= TEAM HISTORY SECTION ======= */}
<div className="team-section container animate-box my-5">
  <h2 className="section-title text-center">
    OUR TEAM MATES WITH <span className="highlight-red">GOOD</span> HISTORY
  </h2>

  <div className="row text-center mt-4 gx-3 gy-4">
    {[
      {
        img: "https://images.pexels.com/photos/14325728/pexels-photo-14325728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "Water : Access to Clean Water for All – Support",
      },
      {
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        title: "Shelter : Providing Safe and Dignified Living Spaces – Support",
      },
      {
      
      img: "https://images.pexels.com/photos/12094881/pexels-photo-12094881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Education : Empowering Minds, Building Futures – Support",


      },
      {
        img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        title: "Environment : Sustaining Our Planet for Future – Support",
      },
      {
        
      img: "https://images.pexels.com/photos/6646900/pexels-photo-6646900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Food : Supporting the Hungry and Needy – Donate Now",



      },
    ].map((item, index) => (
      <div className="col-md-2 col-6" key={index}>
        <img
          src={item.img}
          alt={item.title}
          className="img-fluid rounded shadow-sm team-image"
        />
        <p className="caption mt-2">{item.title}</p>
        <button className="btn btn-primary btn-sm mt-2">Donate Now</button>

      </div>
    ))}
    
  </div>

</div>

{/* ======= CALL TO ACTION SECTION ======= */}
<div className="cta-section text-white text-center p-5">
  <h5 className="text-warning">💛 Call To Action</h5>
  <h2 className="fw-bold mb-4">GIVE YOUR BIG HAND FOREVER</h2>

  <div className="row justify-content-center gx-3 gy-3">
    <div className="col-md-5">
      <input
        type="text"
        className="form-control cta-input"
        placeholder="👤 Enter your name"
      />
    </div>
    <div className="col-md-5">
      <input
        type="text"
        className="form-control cta-input"
        placeholder="📞 Enter phone number"
      />
    </div>
    <div className="col-md-5">
      <input
        type="text"
        className="form-control cta-input"
        placeholder="📍 Enter address"
      />
    </div>
    <div className="col-md-5">
      <input
        type="text"
        className="form-control cta-input"
        placeholder="🏷️ Zip Code"
      />
    </div>
    <div className="col-md-10 mt-3">
      <button className="btn btn-dark px-4 py-2">Get Involved Today</button>
    </div>
  </div>
</div>

</div>

      </div>

    </div>
  );
};

export default About;
