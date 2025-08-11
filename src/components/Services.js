import React  from 'react';
import { useNavigate } from "react-router-dom";
import './Services.css';

import employee from '../assets/employee.gif';
import promotion from '../assets/promotion.mp4';
import Tax from '../assets/tax.mp4';
import programmer from '../assets/programmer.mp4';

import top from '../assets/top.jpg';
import seo from '../assets/seo.webp';
import tax from '../assets/Tax.webp';
import DM from '../assets/DM.jpg';




const services = [
  {
    
    video: promotion,
    title: 'Digital Marketing',
    description: 'We manage your social media presence to build engagement, grow followers, and create a strong brand image through creative content and consistent strategy',
    bgImage: DM,
    // gif: "../assets/employee.gif",
  },
  {
    video: programmer,
    bgImage: top,
    title: 'Web & Software Development',
    description: 'Need skilled professionals without long-term hiring? We provide qualified talent on-demand to scale your team and support your projects flexibly',
  },
  {
    gif: employee,
    bgImage: seo,
    title: 'Staff Augmentation',
    description: 'We help your website rank higher on search engines like Google with targeted keywords, on-page optimization, and quality backlinks—so more people can find you organically.',
  },
  {
    video: Tax,
    bgImage: tax,
    title: 'Tax & Compliance Solutions',
    description: ' We provide GST registration, returns, income tax, TDS, and account maintenance—ensuring timely, accurate compliance and support for your business financial needs.',
  },
  
 
];

const Services = () => {
 const navigate = useNavigate();

 const handleExploreClick = () => {
   navigate("/services-more"); // Opens new page/tab
 };

  return (
     <section className="services-page">
      <h2 className="services-title">OUR SERVICES</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
  <div className="flip-card">
    <div className="flip-inner">
      {/* Front */}
      <div className="flip-front">
        {service.video ? (
              <video
                src={service.video}
                className="service-icon"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={service.gif}
                alt={service.title}
                className="service-icon"
              />
              
            )}
             <h3>{service.title}</h3>
            {/* <p>{service.description}</p>  */}
      </div>

      {/* Back */}
      <div
        className="flip-back"
        style={{ backgroundImage: `url(${service.bgImage})` }}
      >
        <div className="flip-content">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</div>
        ))}
      </div>
    </section>
      
          
  
  );
};

export default Services;
