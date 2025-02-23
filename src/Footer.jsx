// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-8">
      <p className="text-sm">&copy; {new Date().getFullYear()} Crowdfunding Platform. All rights reserved.</p>
    </footer>
  );
};

export default Footer;