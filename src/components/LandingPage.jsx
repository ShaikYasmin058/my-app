import React from 'react';
import './LandingPage.css'; // For adding styles (optional)

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to Our Website!</h1>
        <p>Your journey starts here.</p>
        <button>Get Started</button>
      </header>
      <section className="landing-info">
        <h2>About Us</h2>
        <p>
          We are a company dedicated to providing the best services for our
          clients. Explore our platform to know more.
        </p>
      </section>
      <footer className="landing-footer">
        <p>© 2025 Our Company</p>
      </footer>
    </div>
  );
}

export default LandingPage;