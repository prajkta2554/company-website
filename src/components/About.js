import React from "react";
import "./About.css";
import aboutImg from "../assest/About.jpg"; // save the image from your template and rename to 'about.jpg'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2> Driving Digital Success with SEO, PPC, Web & Software Development Since 2023.</h2>
            <p className="subtitle">
              Welcome to Logiclite Solutions, where we are dedicated to being your comprehensive partner in navigating the dynamic realms of the digital landscape.</p>
            <p>
               Specializing in Digital Marketing, Web Development, and Staff Augmentation, we offer a diverse range of services designed to propel businesses to new heights of success. In the realm of Digital Marketing, we go beyond conventional approaches, tailoring strategies to enhance brand visibility, engagement, and conversion rates.</p>
            <p>
              Our experienced team of web developers transforms visions into captivating digital experiences, whether it's a corporate website, e-commerce platform, or a custom web application.</p>

            <div className="about-stats">
              <div>
                <h3>4+</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3>142+</h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3>18+</h3>
                <p>Team Members</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={aboutImg} alt="Team High Five" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
