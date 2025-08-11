import React, { useState } from "react";
import "./Navbar.css"; 
import logo from "../assets/Logo (2).png"; 
import { HashLink as Link } from 'react-router-hash-link';
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
          {/* <span className="brand-name">LogicLite Solutions</span> */}
          {/* <Link to="/about-more">About</Link> */}

          {/* ☰ Hamburger icon */}
          <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about-more">About</NavLink></li>
        <li><NavLink to="/Services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      </div>
    </nav>
  );
};


export default Navbar;
