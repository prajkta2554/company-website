import React, { useState, useEffect } from "react";
import "./VideoSlider.css";

const videos = [
  require("../assets/Dm.mp4"),
  require("../assets/web.mp4"),
  require("../assets/mobile.mp4"),
];

const animatedTexts = [
  "Digital Marketing",
  "Web Development",
  "Mobile App Development",
];

const VideoSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = videos.length;

  const nextVideo = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const prevVideo = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextVideo, 3000); // Change every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="video-slider">
      {/* <button className="nav-btn left" onClick={prevVideo}>❮</button> */}

      <div className="video-container">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`video-slide ${index === current ? "active" : ""}`}
          >
            {index === current && (
              <video
                src={video}
                autoPlay
                muted
                loop
                className="video-element"
              />
            )}
          </div>
        ))}

        {/* Animated Text and Buttons */}
        <div className="hero-content">
          <h1 className="animated-text" data-aos="type" data-aos-delay="1000">{animatedTexts[current]}</h1>
          <div className="buttons">
            <a href="#" className="btn schedule">Schedule Call</a>
            <a href="#" className="btn contact">Contact</a>
          </div>
        </div>
      </div>

      {/* <button className="nav-btn right" onClick={nextVideo}>❯</button> */}
    </div>
  );
};

export default VideoSlider;
