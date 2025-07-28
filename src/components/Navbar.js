import React, { useState } from "react";
import "./Navbar.css"; 
import logo from "../assets/logo1.jpg"; 
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <span className="brand-name">LogicLite Solutions</span>

          {/* ☰ Hamburger icon */}
          <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
