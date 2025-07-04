import './Home.css';

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../components/Button";
import logo from "../assets/logo.jpeg";

const Home = () => {
  const navigate = useNavigate();
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then((res) => setBackendMessage(res.data))
      .catch(() => setBackendMessage("⚠️ Failed to connect to backend"));
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Helping Hands Logo" className="logo-image" />
          <h2 className="logo-text">Crowdfunding</h2>
        </div>
        <div className="nav-links">
          <Button className="nav-button" onClick={() => navigate("/about")}>About Us</Button>
          <Button className="nav-button" onClick={() => navigate("/contact")}>Contact Us</Button>
          <Button className="nav-button" onClick={() => navigate("/signin")}>Sign In</Button>
          <Button className="nav-button" onClick={() => navigate("/signup")}>Sign Up</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" data-aos="fade-up">
        <h1 className="hero-title">Support Our Cause</h1>
        <p className="hero-text">Your donation helps us make a difference. Join us in making a change.</p>
        <p className="backend-status">🔗 Backend says: {backendMessage}</p>
        <div className="hero-buttons">
          <Button className="donate-button" onClick={() => navigate("/campaign")}>🎯 View Campaigns</Button>
          <Button className="create-campaign-button" onClick={() => navigate("/add-campaign")}>🚀 Create Campaign</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" data-aos="fade-right">
        <h2>Who We Are</h2>
        <p>We are a team committed to helping individuals and groups raise funds for causes that matter.</p>
      </section>

      {/* Campaign Preview */}
      <section className="campaign-preview" data-aos="fade-left">
        <h2>Trending Campaigns</h2>
        <p>Explore some of the most impactful campaigns running right now.</p>
        <Button className="view-more-button" onClick={() => navigate("/campaign")}>View More</Button>
      </section>

      {/* Testimonials */}
      <section className="testimonials" data-aos="zoom-in">
        <h2>What Our Donors Say</h2>
        <blockquote>"This platform made it easy for me to support causes I believe in."</blockquote>
        <blockquote>"Great experience and a wonderful initiative!"</blockquote>
      </section>

      {/* Footer */}
      <footer className="footer" data-aos="fade-up">
        <p>&copy; 2025 Helping Hands Crowdfunding. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
