// Contact.js

import React from "react";
import "./Contact.css";
// import { FaStar } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

const Contact = () => {
  return (
    <div className="heading">
      <h4 data-aos="fade-down" data-aos-delay="100"> Contact US</h4>   
    <div className="contact-section">
      <div className="contact-left"  data-aos="fade-left"
              data-aos-delay="100">
        
        <h2>Let’s Talk</h2>
        <p>
          Discuss your vision or scale up your entrepreneurial journey. We are
          only this form away.<br />
          Are you still not sure?
        </p>
        <a href="#check-this" className="check-link">CHECK THIS</a>
      </div>

      <form className="contact-form"  data-aos="fade-right"
              data-aos-delay="100">
        <label>
          Your Name
          <div className="input-wrapper">
            <input type="text" placeholder="Enter your name..." required />
            
          </div>
        </label>

        <label>
          Your Phone Number
          <div className="input-wrapper">
            <PhoneInput country={'us'} inputClass="phone-input" />
            
          </div>
        </label>

        <label>
          Your Email
          <div className="input-wrapper">
            <input type="email" placeholder="Enter your email..." required />
            
          </div>
        </label>
        <label>
          Services
          <div className="input-wrapper">
            
            <select required defaultValue="">
            <option value="" disabled>Select a service...</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-app">Mobile App Development</option>
            <option value="ui-ux">UI/UX Design</option>
            <option value="seo">SEO Optimization</option>
          </select>
          
            
          </div>
        </label>

        <label>
          Your Message
          <div className="input-wrapper">
            <textarea placeholder="Enter your message..." required />
           
          </div>
        </label>

        <button type="submit" className="send-button">SEND<i className="fa-solid fa-arrow-right"></i></button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
