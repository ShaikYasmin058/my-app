import React from "react";
import "./Button.css"; // If you have button styles

const Button = ({ children, className, onClick }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
