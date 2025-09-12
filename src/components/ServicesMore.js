import React from "react";
import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { FaBullhorn, FaCode, FaUsersCog, FaBalanceScale, FaSmile, FaChartLine, FaUserGraduate, FaFolderOpen, FaBolt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import About from "../assets/About.jpg"
import digital from "../assets/digital.jpeg";
import mobile from "../assets/mobile.png";
import staff from "../assets/staff.jpeg";
import Taxx from "../assets/Taxx.jpg";

import wave from "../assets/green.jpg"

import react from "../assets/react.png";
import javascript from "../assets/javascript.webp";
import java from "../assets/java.png";
import c from "../assets/c.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";
import sql from "../assets/sql.webp";
import cloud from "../assets/CLOUD1.jpg";
import seo from "../assets/SEO.png";
import Python from "../assets/python.png";
import DM1 from "../assets/DM1.jpg";


import a1 from "../assets/a1.jpg"
import a2 from "../assets/a2.jpg"
import a3 from "../assets/a3.jpg"

import progress from "../assets/progress.jpg"


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
      icon: <FaSmile size={30} color="#179f99" />,
      title: "Increased Customer Satisfaction",
      desc: "Deliver better experiences and build long-term trust with your customers.",
    },
    {
      icon: <FaChartLine size={30} color="#179f99" />,
      title: "Increased Revenue",
      desc: "Boost your business growth with strategies that maximize profitability.",
    },
    {
      icon: <FaUserGraduate size={30} color="#179f99" />,
      title: "Upgradation of Resource Skills",
      desc: "Empower your team with the latest skills and technology expertise.",
    },
    {
      icon: <FaFolderOpen size={30} color="#179f99" />,
      title: "Enhanced Portfolio",
      desc: "Strengthen your portfolio with successful projects and innovative solutions.",
    },
    {
      icon: <FaBolt size={30} color="#179f99" />,
      title: "Increased Efficiency",
      desc: "Save time and optimize processes for faster results and smoother operations.",
    },
  ];

  const logos = [react, javascript, java, c, php, mysql, sql, Python, cloud, seo, DM1];

  const testimonials = [
    {
      text: "We have enjoyed a long-standing partnership with Mitr, spanning over eight years...",
      name: "Ahraz Imtiyaz",
      role: "Development Manager",
      company: "Perfection Learning",
      image: a1,
    },
    {
      text: "The team delivered outstanding results and exceeded our expectations on every project.",
      name: "Sunit Sharma",
      role: "CEO",
      company: "TechWave Inc.",
      image: a2,
    },
    {
      text: "Great collaboration and excellent communication throughout the entire development process.",
      name: "Ritika Tiwari",
      role: "Product Manager",
      company: "InnovateX",
      image: a3,
    },
    {
      text: "They are highly professional and always deliver quality work on time.",
      name: "Sunit Sharma",
      role: "CTO",
      company: "Bright Solutions",
      image: a2,
    },
    {
      text: "Our digital platform improved significantly thanks to their expertise and support.",
      name: "Sunit Sharma",
      role: "Founder",
      company: "FutureVision",
      image: a2,
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

      <section className="alt-services-container">
        {/* Service 1 - Digital Marketing */}
        <div className="alt-service-row">
          <div className="alt-service-text" data-aos="fade-right" data-aos-delay="1000">
            <h2>Digital Marketing</h2>
            <p>
              Boost your online presence with our tailored digital marketing
              strategies. From SEO and social media to paid campaigns, we help
              your business connect with the right audience and drive measurable
              results.
            </p>
          </div>
          <div className="alt-service-image" data-aos="fade-left" data-aos-delay="1000">
            <img src={digital} alt="Digital Marketing" />
          </div>
        </div>

        {/* Service 2 - Web & Software Development */}
        <div className="alt-service-row">
          <div className="alt-service-text" data-aos="fade-right" data-aos-delay="1000">
            <h2>Web & Software Development</h2>
            <p>
              Build scalable, secure, and high-performing web and software
              solutions tailored to your business needs. We use modern
              technologies to deliver seamless user experiences.
            </p>
          </div>
          <div className="alt-service-image" data-aos="fade-left" data-aos-delay="1000">
            <img src={mobile} alt="Web Development" />
          </div>
        </div>

        {/* Service 3 - Staff Augmentation */}
        <div className="alt-service-row">
          <div className="alt-service-text" data-aos="fade-right" data-aos-delay="1000">
            <h2>Staff Augmentation</h2>
            <p>
              Scale your team quickly with our staff augmentation services. We
              provide skilled professionals who integrate seamlessly with your
              existing team to accelerate project delivery.
            </p>
          </div>
          <div className="alt-service-image" data-aos="fade-left" data-aos-delay="1000">
            <img src={staff} alt="Staff Augmentation" />
          </div>
        </div>

        {/* Service 4 - Tax & Compliance Solutions */}
        <div className="alt-service-row">
          <div className="alt-service-text" data-aos="fade-right" data-aos-delay="1000">
            <h2>Tax & Compliance Solutions</h2>
            <p>
              Simplify complex regulatory and compliance processes with our expert
              solutions. We help businesses stay compliant with tax regulations
              while reducing risks and improving efficiency.
            </p>
          </div>
          <div className="alt-service-image" data-aos="fade-left" data-aos-delay="1000">
            <img src={Taxx} alt="Tax Solutions" />
          </div>
        </div>
      </section>



      <section
        className="benefits-section"
        data-aos="fade-up"
        data-aos-delay="1000" style={{ backgroundImage: `url(${wave})` }}

      >
        <h2 className="benefits-title">Customer Benefits</h2>
        <div className="benefits-container">
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



      <div className="logos-wrapper">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={5}     // number of logos visible
          loop={true}           // infinite loop
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={1000}          // smooth speed
          navigation={true}     // enable arrows
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={logo} alt={`Logo ${index}`} className="logo-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      <section className="progress-section">
        <div className="progress-container">
          <h2>
            Our <span>Process</span>
          </h2>
          <img
            src= {progress}   
            alt="Workflow Progress"
          />
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
                  <div className="client-info">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="client-image"
                    />
                    <div>
                      <h4 className="client-name">{item.name},</h4>
                      <p className="client-role">{item.role}</p>
                    </div>
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
