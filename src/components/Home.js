import React from "react";
import "./Home.css";
import VideoSlider from "./VideoSlider";

const Home = () => {
  return (
    <section className="hero">
      <div className="video-background">
        <VideoSlider />
      </div>
    </section>
  );
};

export default Home;
