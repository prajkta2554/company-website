import React from "react";
import "./Contact.css";
import about from "../assets/About.jpg";

const ContactMore =() =>{
    return (
      <section className="contact-point-section">
      <img src={about} alt="About" className="about-image" />
      <div className="about-overlay animate-on-scroll">
        <h1>Contact Us</h1>
        <p>
          Your trusted partner in Digital Marketing, Recruitment, and Financial
          Compliance.
        </p>
        <div className="breadcrumb">
          <a href="/">Home</a> <span>›</span> <a href="/about">Contact us</a>
        </div>
      </div>
     
    <div className="contact-container">
      {/* Contact Info */}
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          Have questions or want to work together? Reach out using the details
          below or send us a message.
        </p>

        <ul>
          <li><strong>Email:</strong> contact@example.com</li>
          <li><strong>Phone:</strong> +91 98765 43210</li>
          <li><strong>Address:</strong> Jaipur, India</li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Send a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    
        {/* Google Map */}
        <div className="map-container">
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.484900441529!2d75.754163!3d26.862257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db51c65b1f6a3%3A0x8e166e4b36a3b8f7!2sPashupatinath%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302031!5e0!3m2!1sen!2sin!4v1726157321477!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      
    </section>
  );
};
















export default ContactMore;