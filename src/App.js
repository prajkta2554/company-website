
import React, {useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import VideoSlider from './components/VideoSlider';
import About from './components/About';
import Footer from './components/Footer ';
import AboutMore from './components/AboutMore';
import Services from './components/Services';
import ServicesMore from './components/ServicesMore';
import Contact from './components/Contact'


import AOS from "aos";
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {  BrowserRouter,Routes, Route } from 'react-router-dom';








function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,      // Animation duration (in ms)
      once: false,         // Whether animation should happen only once
      mirror: false,       // Whether elements should animate out while scrolling past them
    });
  }, []);
  
  return (
    
    <BrowserRouter>
    
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <VideoSlider />
              <About />
              <Services />
              <Contact />
              <Footer  />

            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer  />
            </>
          }
        />
         <Route
          path="/home"
          element={
            <>
            <VideoSlider />
              <About />
              <Footer  />
            </>
          }
        />
        <Route
          path="/about-more"
          element={
            <>
              <AboutMore />
              <Footer  />
            </>
          }
        />

    <Route
          path="/Services-more"
          element={
            <>
              <ServicesMore />
              <Footer />
            </>
          }
        />
         <Route path="*" element={<h2 style={{ textAlign: "center" }}>404 Page Not Found</h2>} />

      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
