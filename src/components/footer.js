import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-column">
          <h2>Logiclite Solutions</h2>
          <p>Empowering businesses through innovation and technology.</p><br />
          
        {/* <a href="#" className="btn L">Linkedin</a>
        <a href="#" className="btn F">Facbook</a>
        <a href="#" className="btn T">Twitter</a>
        <a href="#" className="btn Y">YouTube</a> */}
        {/* </div>
        <div className="social icon">  */}
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
        
        {/* Address */}
        <div className="footer-column">
          <h3>Address</h3>
          <p> Jaipur, India</p>
          <p> +012 345 67890</p>
          <p>info@example.com</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <p><a href="#about">About Us</a></p>
          <p><a href="#contact">Contact Us</a></p>
          <p><a href="#services">Services</a></p>
          <p><a href="#">Careers</a></p>
          <p><a href="#">Terms</a></p>
          <p><a href="#">Support</a></p>
        </div>

        {/* Newsletter */}
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Stay updated with us</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Logiclite Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default footer;
