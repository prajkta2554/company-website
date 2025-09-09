import React from "react";
import "./Contact.css";

const ContactMore =() =>{
    return (
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
          <li><strong>Address:</strong> Mumbai, India</li>
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
  );
};
















export default ContactMore;