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
          
           <h3>Follow US</h3>
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-regular fa-envelope"></i>
          
        </div>
        
        {/* Address */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p>#43, Pashupathinath Nagar, Jaipur, Rajasthan 302031</p>
          <p> (+91) 9352072936</p>
          <p>info@logiclitesolutions.in</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <p><a href="#about">About Us</a></p>
          <p><a href="#contact">Contact Us</a></p>
          <p><a href="#services">Services</a></p>
          <p><a href="#">Careers</a></p>
          <p><a href="#">Project</a></p>
          <p><a href="#">Pricing</a></p>
        </div>

        <div className="footer-column">
          <h3>Useful Links</h3>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">terms & condition</a></p>
          <p><a href="#">Disclaimer</a></p>
          <p><a href="#">Careers</a></p>
          <p><a href="#">Support</a></p>
          <p><a href="#">FAQ</a></p>
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
