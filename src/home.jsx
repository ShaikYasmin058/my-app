// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";
// import logo from "../assets/logo.jpeg";

// const Home = () => {
//   const navigate = useNavigate();
//   const [backendMessage, setBackendMessage] = useState("");

//   useEffect(() => {
//     axios.get("http://localhost:5000/")
//       .then((res) => setBackendMessage(res.data))
//       .catch((err) => {
//         console.error("Backend error:", err);
//         setBackendMessage("⚠️ Failed to connect to backend");
//       });
//   }, []);

//   return (
//     <div className="app-container">
//       <nav className="navbar">
//         <div className="logo-container">
//           <img src={logo} alt="Helping Hands Logo" className="logo-image" />
//           <h2 className="logo-text">Crowdfunding</h2>
//         </div>
//         <div className="nav-links">
//           <Button className="nav-button" onClick={() => navigate("/about")}>About Us</Button>
//           <Button className="nav-button" onClick={() => navigate("/contact")}>Contact Us</Button>
//           <Button className="nav-button" onClick={() => navigate("/signin")}>Sign In</Button>
//           <Button className="nav-button" onClick={() => navigate("/signup")}>Sign Up</Button>
//         </div>
//       </nav>

//       <section className="hero">
//         <h1 className="hero-title">Support Our Cause</h1>
//         <p className="hero-text">
//           Your donation helps us make a difference in the community. Join us in making a change.
//         </p>
//         <p className="backend-status">🔗 Backend says: {backendMessage}</p>
//         <div className="hero-buttons">
//           <Button className="donate-button" onClick={() => navigate("/campaign")}>🎯 View Campaigns</Button>
//           <Button className="create-campaign-button" onClick={() => navigate("/add-campaign")}>🚀 Create Campaign</Button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;









// import './Home.css';
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";
// import logo from "../assets/logo.jpeg";

// const backgroundImages = [
//   "/images/bg1.jpeg",
//   "/images/bg2.jpeg",
//   "/images/bg3.jpeg",
//   "/images/bg4.jpeg",
//   "/images/bg5.jpeg"
// ];

// <div className="slideshow-background">
//   {backgroundImages.map((src, index) => (
//     <img
//       key={index}
//       src={src}
//       alt={`slide-${index}`}
//       className={`bg-image ${index === currentImageIndex ? "active" : ""}`}
//     />
//   ))}
// </div>


// const Home = () => {
//   const navigate = useNavigate();
//   const [backendMessage, setBackendMessage] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Fetch backend message
//   useEffect(() => {
//     axios
//       .get("http://localhost:5001/")
//       .then((res) => setBackendMessage(res.data))
//       .catch((err) => {
//         console.error("Backend error:", err);
//         setBackendMessage("⚠️ Failed to connect to backend");
//       });
//   }, []);

//   // Slideshow logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
//     }, 4000); // Change every 4 sec
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="app-container">
//       {/* Background Slideshow */}
//       <div className="slideshow-background">
//         {backgroundImages.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`slide-${index}`}
//             className={`bg-image ${index === currentImageIndex ? "active" : ""}`}
//           />
//         ))}
//       </div>

//       {/* Navigation Bar */}
//       <nav className="navbar">
//         <div className="logo-container">
//           <img src={logo} alt="Helping Hands Logo" className="logo-image" />
//           <h2 className="logo-text">Crowdfunding</h2>
//         </div>
//         <div className="nav-links">
//           <Button className="nav-button" onClick={() => navigate("/about")}>About Us</Button>
//           <Button className="nav-button" onClick={() => navigate("/contact")}>Contact Us</Button>
//           <Button className="nav-button" onClick={() => navigate("/signin")}>Sign In</Button>
//           <Button className="nav-button" onClick={() => navigate("/signup")}>Sign Up</Button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <h1 className="hero-title">Support Our Cause</h1>
//         <p className="hero-text">
//           Your donation helps us make a difference in the community. Join us in making a change.
//         </p>
//         <p className="backend-status">🔗 Backend says: {backendMessage}</p>
//         <div className="hero-buttons">
//           <Button className="donate-button" onClick={() => navigate("/campaign")}>🎯 View Campaigns</Button>
//           <Button className="create-campaign-button" onClick={() => navigate("/add-campaign")}>🚀 Create Campaign</Button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;











// import './Home.css';
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";
// import logo from "../assets/logo.jpeg";

// // Background slideshow images from public/images
// const backgroundImages = [
//   "/images/bg1.jpeg",
//   "/images/bg2.jpeg",
//   "/images/bg3.jpeg",
//   "/images/bg4.jpeg",
//   "/images/bg5.jpeg"
// ];

// const Home = () => {
//   const navigate = useNavigate();
//   const [backendMessage, setBackendMessage] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Fetch backend message from API
//   useEffect(() => {
//     axios
//       .get("http://localhost:5001/")
//       .then((res) => setBackendMessage(res.data))
//       .catch((err) => {
//         console.error("Backend error:", err);
//         setBackendMessage("⚠️ Failed to connect to backend");
//       });
//   }, []);

//   // Background slideshow logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
//     }, 4000); // every 4 seconds
//     return () => clearInterval(interval);
//   }, []);

//   // Navigate to Donation Page with campaign data
//   const handleDonateNow = () => {
//     navigate("/donate", {
//       state: {
//         title: "Feed the Hungry",
//         description: "Your contribution helps us serve meals to the poor and homeless.",
//         image: "https://images.pexels.com/photos/6646900/pexels-photo-6646900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//       },
//     });
//   };

//   return (
//     <div className="app-container">
//       {/* Background Slideshow */}
//       <div className="slideshow-background">
//         {backgroundImages.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`slide-${index}`}
//             className={`bg-image ${index === currentImageIndex ? "active" : ""}`}
//           />
//         ))}
//       </div>

//       {/* Navigation Bar */}
//       <nav className="navbar">
//         <div className="logo-container">
//           <img src={logo} alt="Helping Hands Logo" className="logo-image" />
//           <h2 className="logo-text">Crowdfunding</h2>
//         </div>
        
        
//         <div className="nav-links">
//           <Link to="/education" className="nav-button">🎓 Education</Link>
//           <Button className="nav-button" onClick={() => navigate("/about")}>About Us</Button>
//           <Button className="nav-button" onClick={() => navigate("/contact")}>Contact Us</Button>
//           <Button className="nav-button" onClick={() => navigate("/signin")}>Sign In</Button>
//           <Button className="nav-button" onClick={() => navigate("/signup")}>Sign Up</Button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <h1 className="hero-title">Support Our Cause</h1>
//         <p className="hero-text">
//           Your donation helps us make a difference in the community. Join us in making a change.
//         </p>
//         <p className="backend-status">🔗 Backend says: {backendMessage}</p>

//         {/* Action Buttons */}
//         <div className="hero-buttons">
//           <Button className="donate-button" onClick={() => navigate("/campaign")}>🎯 View Campaigns</Button>
//           <Button className="create-campaign-button" onClick={() => navigate("/add-campaign")}>🚀 Create Campaign</Button>
//           <Button className="donate-button" onClick={handleDonateNow}>❤️ Donate Now</Button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;











import './Home.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";  // ✅ Added Link
import Button from "../components/Button";
import logo from "../assets/logo.jpeg";

// Background slideshow images from public/images
const backgroundImages = [
  "/images/bg1.jpeg",
  "/images/bg2.jpeg",
  "/images/bg3.jpeg",
  "/images/bg4.jpeg",
  "/images/bg5.jpeg"
];

const Home = () => {
  const navigate = useNavigate();
  const [backendMessage, setBackendMessage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetch backend message from API
  useEffect(() => {
    axios
      .get("http://localhost:5001/")
      .then((res) => setBackendMessage(res.data))
      .catch((err) => {
        console.error("Backend error:", err);
        setBackendMessage("⚠️ Failed to connect to backend");
      });
  }, []);

  // Background slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000); // every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Navigate to Donation Page with campaign data
  const handleDonateNow = () => {
    navigate("/donate", {
      state: {
        title: "Feed the Hungry",
        description: "Your contribution helps us serve meals to the poor and homeless.",
        image: "https://images.pexels.com/photos/6646900/pexels-photo-6646900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
    });
  };

  return (
    <div className="app-container">
      {/* Background Slideshow */}
      <div className="slideshow-background">
        {backgroundImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className={`bg-image ${index === currentImageIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Helping Hands Logo" className="logo-image" />
          <h2 className="logo-text">Crowdfunding</h2>
        </div>

        <div className="nav-links">
          <Link to="/education" className="nav-button">🎓 Education</Link>
          <Button className="nav-button" onClick={() => navigate("/about")}>About Us</Button>
          <Button className="nav-button" onClick={() => navigate("/contact")}>Contact Us</Button>
          <Button className="nav-button" onClick={() => navigate("/signin")}>Sign In</Button>
          <Button className="nav-button" onClick={() => navigate("/signup")}>Sign Up</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Support Our Cause</h1>
        <p className="hero-text">
          Your donation helps us make a difference in the community. Join us in making a change.
        </p>
        <p className="backend-status">🔗 Backend says: {backendMessage}</p>

        {/* Action Buttons */}
        <div className="hero-buttons">
          <Button className="donate-button" onClick={() => navigate("/campaign")}>🎯 View Campaigns</Button>
          <Button className="create-campaign-button" onClick={() => navigate("/add-campaign")}>🚀 Create Campaign</Button>
          <Button className="donate-button" onClick={handleDonateNow}>❤️ Donate Now</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
