import React from "react";
import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaBullhorn, FaCode, FaUsersCog, FaBalanceScale, FaSmile, FaChartLine, FaUserGraduate, FaFolderOpen, FaBolt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import About from "../assets/About.jpg"

const ServicesMore = () => {
  const services = [
    {
      icon: <FaBullhorn size={35} className="service-icon" />,
      title: "Digital Marketing",
      desc: "We help businesses grow online with data-driven marketing strategies, including SEO, social media, paid ads, and content marketing to boost visibility and drive qualified leads.",
    },
    {
      icon: <FaCode size={35} className="service-icon" />,
      title: "Web & Software Development",
      desc: "From websites to complex enterprise software, we design and build scalable, secure, and user-friendly solutions tailored to your business goals.",
    },
    {
      icon: <FaUsersCog size={35} className="service-icon" />,
      title: "Staff Augmentation",
      desc: "Expand your team quickly with our skilled developers, designers, and IT specialists. We provide flexible staffing solutions to fill talent gaps and accelerate your projects.",
    },
    {
      icon: <FaBalanceScale size={35} className="service-icon" />,
      title: "Tax & compliance Solutions",
      desc: "Simplify regulatory challenges with our end-to-end tax and compliance services. From filings to audits, we ensure your business stays fully compliant with legal standards.",
    },
  ];

   const benefits = [
    {
      icon: <FaSmile />,
      title: "Increased Customer Satisfaction",
      desc: "Deliver better experiences and build long-term trust with your customers.",
    },
    {
      icon: <FaChartLine />,
      title: "Increased Revenue",
      desc: "Boost your business growth with strategies that maximize profitability.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Upgradation of Resource Skills",
      desc: "Empower your team with the latest skills and technology expertise.",
    },
    {
      icon: <FaFolderOpen />,
      title: "Enhanced Portfolio",
      desc: "Strengthen your portfolio with successful projects and innovative solutions.",
    },
    {
      icon: <FaBolt />,
      title: "Increased Efficiency",
      desc: "Save time and optimize processes for faster results and smoother operations.",
    },
  ];

  const testimonials = [
    {
      text: "We have enjoyed a long-standing partnership with Mitr, spanning over eight years...",
      name: "Jesse Deming",
      role: "Development Manager",
      company: "Perfection Learning",
    },
    {
      text: "The team delivered outstanding results and exceeded our expectations on every project.",
      name: "Sophia Carter",
      role: "CEO",
      company: "TechWave Inc.",
    },
    {
      text: "Great collaboration and excellent communication throughout the entire development process.",
      name: "Liam Johnson",
      role: "Product Manager",
      company: "InnovateX",
    },
    {
      text: "They are highly professional and always deliver quality work on time.",
      name: "Olivia Brown",
      role: "CTO",
      company: "Bright Solutions",
    },
    {
      text: "Our digital platform improved significantly thanks to their expertise and support.",
      name: "Ethan Wilson",
      role: "Founder",
      company: "FutureVision",
    },
  ];

  return (
    <>
    <section className="services-point-section">
      <img src={About} alt="Services" className="services-image" />
      <div className="services-overlay animate-on-scroll">
        <h1>Our Services</h1>
        <p>
          Your trusted partner in Digital Marketing, Recruitment, and Financial
          Compliance.
        </p>
        <div className="breadcrumb">
          <a href="/">Home</a> <span>›</span> <a href="/services">Services</a>
        </div>
      </div>
      </section>

      <section className="services-section">
      <div className="services-container">
        {/* Left Side */}
        <div className="services-left">
          <p className="section-subtitle">Our Services</p>
          <h2 className="section-title">
            We Provide A Lot of <br /> Cool Services
          </h2>
          <p className="section-desc">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <button className="services-btn">Contact Us</button>
        </div>

        {/* Right Side */}
        <div className="services-right">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrap">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="benefits-section">
      <h2 className="benefits-title">Customer Benefits</h2>
      <div className="benefits-container">
        {/* Center Circle */}
        <div className="benefits-center">
          <div className="circle">
            <span className="circle-icon">📊</span>
            <p>Project Benefits</p>
          </div>
        </div>

        {/* Benefit Items */}
        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <div className="benefit-item" key={index}>
              <div className="benefit-icon">{benefit.icon}</div>
              <div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-desc">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <section className="testimonial-section">
      <h2 className="testimonial-title">
        What Our <span>Clients</span> Say
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <span className="quote-icon">“</span>
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-footer">
                <div>
                  <h4 className="client-name">{item.name},</h4>
                  <p className="client-role">{item.role}</p>
                </div>
                <div className="client-logo">{item.company}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

       
    
    </section>
    </>
  );
};

export default ServicesMore;
