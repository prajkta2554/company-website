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
    <section className="about-section" id="about"> 
    {/* style={{ height: "100vh", background: "#ccc" }}>  for about background color*/}
      <div className="about-container">
        <div className="about-left" data-aos="fade-right" data-aos-duration="1000">
         <h5 data-aos="fade-down" data-aos-delay="100">ABOUT US</h5>
         <h2 className="typewriter-text" data-aos="zoom-in" data-aos-delay="200">
              Driven by innovation, built for performance.
          </h2>
          <p data-aos="fade-up" data-aos-delay="300">
             Welcome to Logiclite Solutions — your trusted partner in Digital Marketing, Web Development, Staff Augmentation, Tax & Compliance Solutions. 
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
  {/* <p data-aos="fade-up" data-aos-delay="300">
    <h4>Who We Are</h4>
    <p>We are Logiclite Solutions — experts in digital growth, tech, and talent.</p>

  </p> */}
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
      <section className="about-point-section">
      <div className="about-point">
  {/* Centered Heading */}
  <div className="about-point-heading" data-aos="fade-down" data-aos-delay="100">
    <h5>Building Better Business, Together</h5>
    <h2>We are Logiclite Solutions — experts in digital growth, tech, and talent.</h2>
  </div>
  

     <div className="about-point-content">
    <div className="about-point-left" data-aos="fade-right" data-aos-duration="1000">
      <h4>What We Do</h4>
      <p>We design user-friendly websites, run effective digital campaigns, and help companies hire top talent.
        Our services are tailored to meet your business goals and solve real-world challenges.</p>


      <h4>Why We’re Different</h4>
      <p>Unlike others, we combine creativity with deep business understanding.
We focus on results, not just deliverables — and we treat your growth like our own.</p>

      <h4>Proof We’re Good</h4>
      <p>With 80+ happy clients and 140+ successful projects, our work speaks for itself.
We’ve earned trust through transparency, quality, and consistent performance.

</p>
    </div>

    <div className="about-point-right" data-aos="fade-left" data-aos-duration="1000">
      <h4>Friendly Tone</h4>
      <p>We avoid jargon and keep communication simple, clear, and honest.
Whether you're tech-savvy or not, we make sure you understand everything we do..</p>

      <h4>Ready to Start?</h4>
      <p>Ready to grow your business? Let’s connect and create something impactful together.
Contact us today or explore our services to see how we can help.

</p>

      <h4>Looks That Impress</h4>
      <p>We use clean visuals, meaningful icons, and thoughtful design to make our content engaging.
Good design builds trust — and we make sure your experience is both informative and attractive.</p>
    </div>
  </div>
</div>
</section>
  

    {/* <div className="about-feature">
      <h4>What We Do</h4>
      <p>We build digital solutions, market your brand, and support your hiring goals.</p>
    </div>

    <div className="about-feature">
      <h4>Why We’re Different</h4>
      <p>Creative minds with a business mindset — we focus on outcomes, not fluff.</p>
    </div>
  </div> */}

  {/* <div className="about-point-right" data-aos="fade-left" data-aos-duration="1000">
    <div className="about-feature">
      <h4>Proof We’re Good</h4>
      <p>Award-winning work, happy clients, and a proven track record of success.</p>
    </div>

   <div className="about-feature">
      <h4>Friendly & Clear</h4>
      <p>We use simple words, honest advice, and keep things easy to understand.</p>
    </div>

    <div className="about-feature">
      <h4>What’s Next?</h4>
      <p>Let’s talk! Contact us today or explore our services to get started.</p>
    </div>
  </div>
</div>  */}

  
    </section>
  );
};

export default About;
