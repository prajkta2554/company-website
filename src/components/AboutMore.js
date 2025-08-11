import React from "react";
import "./About.css";
import about from "../assets/about - Copy.jpg";

const AboutMore = () => {

  


  return (
    <section className="about-point-section">
      <div className="More-info">
        <img src={about} alt="about" className="info" />
         <div
              className="about-heading"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <h5>About US</h5>
            </div>

      </div>
          <div className="about-point">
            <div
              className="about-point-heading"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <h5>Building Better Business, Together</h5>
              <h2>
                We are Logiclite Solutions — experts in digital growth, tech,
                and talent.
              </h2>
            </div>
          
            <div className="about-point-content">
              <div
                className="about-point-left"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h4>What We Do</h4>
                <p>
                  We design user-friendly websites, run effective digital
                  campaigns, and help companies hire top talent. Our services
                  are tailored to meet your business goals and solve real-world
                  challenges.
                </p>

                <h4>Why We’re Different</h4>
                <p>
                  Unlike others, we combine creativity with deep business
                  understanding. We focus on results, not just deliverables — and we treat your growth like our own.
                </p>

                <h4>Proof We’re Good</h4>
                <p>
                  With 80+ happy clients and 140+ successful projects, our work
                  speaks for itself. We’ve earned trust through transparency,
                  quality, and consistent performance.
                </p>
              </div>

              <div
                className="about-point-right"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h4>Friendly Tone</h4>
                <p>
                  We avoid jargon and keep communication simple, clear, and
                  honest. Whether you're tech-savvy or not, we make sure you
                  understand everything we do.
                </p>

                <h4>Ready to Start?</h4>
                <p>
                  Ready to grow your business? Let’s connect and create
                  something impactful together. Contact us today or explore our
                  services to see how we can help.
                </p>

                <h4>Looks That Impress</h4>
                <p>
                  We use clean visuals, meaningful icons, and thoughtful design
                  to make our content engaging. Good design builds trust — and
                  we make sure your experience is both informative and
                  attractive.
                </p>
              </div>
            </div>
          </div>
        </section> 
        
      )}
      export default AboutMore;