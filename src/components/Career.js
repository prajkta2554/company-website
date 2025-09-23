import React  from 'react';
import './Career.css';

import about from "../assets/About.jpg";

const Career = () => {
     const features = [
    {
      title: "Your role, your way",
      description:
        "They say if you do what you love, you'll love what you do. We don’t limit your role to set responsibilities, and instead support you to try hands at everything you're keen about!",
      icon: "🌸",
    },
    {
      title: "Squad, All Inclusive",
      description:
        "At our company, we have an inclusive workplace, ensuring a safe & fun work environment for every employee regardless of background, while recognizing differences and celebrating wins.",
      icon: "✨",
    },
    {
      title: "We Water Your Growth",
      description:
        "New skill on your mind? We’re here to help you learn! Choose a certification or training that helps you grow in your role. We’ve got you covered.",
      icon: "🌱",
    },
    {
      title: "Equal Opportunity",
      description:
        "We know our members by skill, not caste, gender, or orientation. Prove your skill and the squad's success is yours, just like yours is ours!",
      icon: "⚖️",
    },
  ];

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

      <div className="career-container">
      <h1 className="career-heading">
        As a part of <span className="highlight">Our Company</span>, you will..
      </h1>


      <div className="career-features">
        {features.map((item, index) => (
          <div className="career-card" key={index}>
            <div className="career-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
      </section>

      
    );
}
export default Career;