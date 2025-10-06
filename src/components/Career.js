import React from "react";
import "./Career.css";
import careerBanner from "../assets/banner1.png";

const Career = () => {
  return (
    <div className="career-container">
      {/* Banner Section */}
      <div
        className="career-banner"
        style={{ backgroundImage: `url(${careerBanner})` }}
      >
        <div className="career-banner-content">
          <h1>Career</h1>
          <p>Join our team and shape the future with us.</p>
          <div className="career-breadcrumb">
            Home <span>›</span> Career
          </div>
        </div>
      </div>

      {/* === Open Positions Section === */}
<section className="open-positions">
  <h2>Open Positions</h2>

  <div className="positions-grid">
    <div className="position-card">
      <h3>Frontend Developer</h3>
      <p>
        Build responsive, user-friendly interfaces with React and modern tools.
      </p>
      <button className="apply-btn">Apply Now</button>
    </div>

    <div className="position-card">
      <h3>Backend Developer</h3>
      <p>
        Work with Node.js and databases to design scalable APIs and backend systems.
      </p>
      <button className="apply-btn">Apply Now</button>
    </div>

    <div className="position-card">
      <h3>UI/UX Designer</h3>
      <p>
        Create engaging and intuitive user experiences through clean, modern design.
      </p>
      <button className="apply-btn">Apply Now</button>
    </div>
  </div>
</section>


      {/* Apply Form Section */}
      <section className="career-form">
        <h2 className="career-form-title">Come, Join Us!</h2>
        <p className="career-form-subtitle">We are excited to hear from you!</p>

        <form className="apply-form">
          <div className="form-row">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Contact Number" required />
            <input type="text" placeholder="Preferred Role" required />
          </div>

          <div className="form-group">
            <label>Attach Resume</label>
            <div className="resume-upload">
              <p>Drag & Drop Files Here</p>
              <button type="button">Browse Files</button>
            </div>
          </div>

          <div className="captcha">
            <label>What is 9 + 8 ?</label>
            <input type="text" placeholder="Type your answer" />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Career;
