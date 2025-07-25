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
        <div className="about-left" data-aos="fade-right" data-aos-duration="1000">
         <h5 data-aos="fade-down" data-aos-delay="100">ABOUT US</h5>
         <h2 className="typewriter-text" data-aos="zoom-in" data-aos-delay="200">
              Driven by innovation, built for performance.
          </h2>
          <p data-aos="fade-up" data-aos-delay="300">
             Welcome to Logiclite Solutions — your trusted partner in Digital Marketing, Web Development, and Staff Augmentation. 
             We deliver innovative, results-driven solutions tailored to your business goals. 
             From boosting brand visibility to building powerful digital experiences and providing the right talent, we’re here to fuel your growth. 
             Let’s grow together with a vision for success.
           </p>

  <ul className="about-list updated-stats">
    <li data-aos="flip-left" data-aos-delay="400">
      <div className="stat-value">86 <span>+</span></div>
      <div className="stat-label">Happy Clients</div>
      <p className="stat-desc">
        From building websites that convert to running high-performing ad campaigns, Logiclite Solutions is your go-to digital growth partner.
      </p>
    </li>
    <li data-aos="flip-left" data-aos-delay="500">
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
            <div className="experience-box" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">

              <strong>Designing success through tech <br />
              and creativity.</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
