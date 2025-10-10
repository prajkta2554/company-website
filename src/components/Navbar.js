import React, { useState } from "react";
import "./Navbar.css"; 
import logo from "../assets/Logo (2).png"; 
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };


  return (
    <nav className="navbar" >
      
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />

          {/* ☰ Hamburger icon */}
          <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about-more">About</NavLink></li>
        <li><NavLink to="/Services-more">Services</NavLink></li>
        <li><NavLink to="/contact-more">Contact</NavLink></li>
        <li><NavLink to="/Blog">Blog</NavLink></li>
        <li><NavLink to="/Career">Career</NavLink></li>
      </ul>
      </div>
    </nav>
  );
};


export default Navbar;
