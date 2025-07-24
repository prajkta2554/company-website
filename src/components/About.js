import React, { useEffect } from "react";
import "./About.css";
import about from "../assets/about.webp";
import aboutt from "../assets/aboutt.webp";

const About = () => {
  useEffect(() => {
    const section = document.querySelector(".about-section");

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("typewriter-start");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger once in case already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
          <h5>ABOUT US</h5>
          <h2 className="typewriter-text">Driven by innovation, built for performance.</h2>
          <p>
            We blend creative digital marketing, efficient recruitment services, and trusted tax solutions to empower businesses across every stage — helping you grow faster, smarter, and legally sound
          </p>
          <ul className="about-list updated-stats">
            <li>
              <div className="stat-value">86 <span>+</span></div>
              <div className="stat-label">Happy Clients</div>
              <p className="stat-desc">
                From building websites that convert to running high-performing ad campaigns, Logiclite Solutions is your go-to digital growth partner.
              </p>
            </li>
            <li>
              <div className="stat-value">142 <span>+</span></div>
              <div className="stat-label">Projects Completed</div>
              <p className="stat-desc">
                Our data-driven approach, attention to detail, and commitment to quality make us stand out in a crowded digital landscape.
              </p>
            </li>
          </ul>
        </div>

        <div className="about-right">
          <div className="img-wrapper">
            <img src={aboutt} alt="Office" className="bg-image" />
            <img src={about} alt="Girl on laptop" className="overlay-image" />
            <div className="experience-box">
              <strong>15+</strong><br />
              Years of experience in business service
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
