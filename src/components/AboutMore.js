import React from "react";
import "./About.css";
import about from "../assets/about - Copy.jpg";
import abt from "../assets/abt.jpg";
import banner1 from "../assets/banner1.png";
import wedo from "../assets/wedo.webp";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Abhishek from "../assets/Abhishek Bhardwaj.png";
import Rahul from "../assets/Rahul Sharma.png";
import Nisha from "../assets/Nisha Lavanya.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";


const AboutMore = () => {

  const features = [
    {
      title: "Why We’re Different",
      desc: "Unlike others, we combine creativity with deep business understanding. We focus on results, not just deliverables — and we treat your growth like our own.",
    },
    {
      title: "Proof We’re Good",
      desc: "With 80+ happy clients and 140+ successful projects, our work speaks for itself. We’ve earned trust through transparency,quality, and consistent performance.",
    },
    {
      title: "Friendly Tone",
      desc: "We avoid jargon and keep communication simple, clear, and honest. Whether you're tech-savvy or not, we make sure you understand everything we do.",
    },
    {
      title: "Ready to Start?",
      desc: "Ready to grow your business? Let’s connect and create something impactful together. Contact us today or explore our services to see how we can help.",
    },
  ];




  const values = [
    {

      title: "Customer Focus",
      text: "We prioritize understanding your business needs to deliver personalized, impactful solutions that help you achieve your goals."
    },
    {

      title: "Innovation & Excellence",
      text: " We embrace cutting-edge technologies and innovative strategies to deliver high-quality digital marketing, web development, and staffing services that set you apart.",

    },
    {

      title: "Integrity & Transparency",
      text: "Honesty and open communication form the foundation of all our client relationships, ensuring trust and accountability",
    },
    {

      title: "Collaboration & Partnership",
      text: "We work closely with you as a dedicated partner, fostering teamwork and shared success in every project.",
    },
    {

      title: "Agility & Responsiveness",
      text: " Our flexible approach allows us to quickly adapt to changing market trends and client requirements for timely, effective solutions.",
    },
    {

      title: "Accountability & Results-Driven",
      text: "We take full responsibility for our work and focus on delivering measurable outcomes that drive your business growth.",
    },
  ];


  const team = [
  {
    name: "Abhishek Bhardwaj",
    role: "Head of Marketing",
    desc: "Leading marketing with vision, crativity, and measurable impact.",
    img: Abhishek,
    linkedin: "#",
    email: "mike@example.com",
  },
  {
    name: "Rahul Sharma",
    role: "Operations Head",
    desc: "Oversees project execution and ensures semless service delivery.",
    img: Rahul,
    linkedin: "#",
    email: "scott@example.com",
  },
  {
    name: "Nisha Lavanya",
    role: "Lead Developer",
    desc: "Expert in creative scalable web application with modern technologies.",
    img: Nisha, 
    linkedin: "#",
    email: "sri@example.com",
  },

];



  return (
    <section className="about-point-section">
      <img src={about} alt="About" className="about-image" />
      <div className="about-overlay animate-on-scroll">
        <h1>About Us</h1>
        <p>
          Your trusted partner in Digital Marketing, Recruitment, and Financial
          Compliance.
        </p>
        <div className="breadcrumb">
          <a href="/">Home</a> <span>›</span> <a href="/about">About</a>
        </div>
      </div>


      <div className="overview-section">
        {/* Left Side Image */}
        <div className="img-container" data-aos="fade-right" data-aos-delay="1000">
          <img src={banner1} alt="team members" className="banner-image" />
        </div>

        {/* Right Side Content */}
        <div className="overview-content">
          <h2 data-aos="fade-left" data-aos-delay="1000">LOGICLITE SOLUTIONS</h2>
          <p data-aos="fade-left" data-aos-delay="1000">
            Logiclite Solutions, your trusted partner in the ever-evolving digital world.
            Headquartered in Jaipur, Rajasthan, we specialize in Digital Marketing, SEO,
            Social Media Marketing (SMM), PPC Advertising, SMO, Google Ads, Web Development,
            and Staff Augmentation.
          </p>
          <p data-aos="fade-left" data-aos-delay="1000">
            Founded in 2023, Logiclite Solutions has quickly gained a reputation for innovation,
            reliability, and client-focused delivery. We believe in partnership over transactions,
            ensuring every solution aligns with your unique goals.
          </p>
        </div>
      </div>


      {/* right Side Content */}
      <div className="Who-content">

        <div className="image-container" data-aos="fade-right" data-aos-delay="1000">
          <img src={wedo} alt="team members" className="wedo-image" />
        </div>

        {/* left Side Content */}
        <div className="wedo-content">
          <h2 data-aos="fade-left" data-aos-delay="1000">WHAT WE DO</h2>
          <p data-aos="fade-left" data-aos-delay="1000">
            Our digital marketing services are designed to go beyond conventional strategies. We create
            data-driven, result-oriented campaigns that improve your Google rankings, strengthen your
            brand presence, and drive higher conversions. From SEO optimization to engaging social
            media campaigns and impactful Google Ads management — we ensure every move
            contributes to your business success.
          </p>
          <p data-aos="fade-left" data-aos-delay="1000">
            In web development, we design and develop responsive, secure, and visually appealing
            websites, high-performing e-commerce platforms, and custom web applications that combine
            creativity with functionality
          </p>


          <p data-aos="fade-left" data-aos-delay="1000">
            Through our staff augmentation services, we provide businesses with the right IT talent at the
            right time, helping you scale operations efficiently and stay competitive in a fast-changing
            market.
          </p>
        </div>
      </div>

      <div className="why-header" data-aos="fade-up" data-aos-delay="1000">
        <h4 className="why-subtitle">WHY CHOOSE US</h4>
        <h2 className="why-title">
          We design user-friendly websites, run effective digital
          campaigns, and help companies hire top talent. Our services
          are tailored to meet your business goals and solve real-world
          challenges.
        </h2>
      </div>

      <div className="why-grid" data-aos="fade-right" data-aos-delay="1000">
        {/* Left Features */}
        <div className="why-features">
          {features.slice(0, 2).map((f, i) => (
            <div key={i} className="why-feature">

              <h3 className="why-feature-title">{f.title}</h3>
              <div className="why-line"></div>
              <p className="why-desc">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="why-image-wrapper" data-aos="fade-down" data-aos-dealy="1000">
          <img
            src={abt}
            alt="Team working"
            className="why-image"
          />
        </div>

        {/* Right Features */}
        <div className="why-features" data-aos="fade-left" data-aos-delay="1000">
          {features.slice(2).map((f, i) => (
            <div key={i} className="why-feature">
              <h3 className="why-feature-title">{f.title}</h3>
              <div className="why-line"></div>
              <p className="why-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>




      {/* Values Section */}
      <section className="values-section" data-aos="fade-up" data-aos-delay="1000">
        <h2 className="values-title">Our Values</h2>
        <p className="values-subtitle">
          At Logiclite Solutions, our core values drive every decision and define how we deliver
          exceptional results for our clients:
        </p>

        <div className="values-grid" data-aos="fade-up" data-aos-delay="1000">
          {values.map((item, index) => (
            <div className="value-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <p className="team-subtitle">The people behind our success</p>

      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p className="team-desc">{member.desc}</p>

            <div className="team-socials">
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href={`mailto:${member.email}`}>
                <FaEnvelope />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
       
       <section className="cta-section">
      <h2 className="cta-heading">
        Starting a new project or want to collaborate with us?
      </h2>
      <p className="cta-subtext">
        Let’s <span>Let’s build something amazing together!"</span>
      </p>
      <button className="cta-button">
        Get in Touch <FaArrowRight className="arrow-icon" />
      </button>
    </section>
    
    </section>
  );
};

export default AboutMore;
