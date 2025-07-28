
import React, {useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import VideoSlider from './components/VideoSlider';
import About from './components/About';
import Footer from './components/footer';
import AOS from "aos";
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';







function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,      // Animation duration (in ms)
      once: false,         // Whether animation should happen only once
      mirror: false,       // Whether elements should animate out while scrolling past them
    });
  }, []);
  
  return (
    <div>
       <Navbar />
       <Home/>
       <VideoSlider/> 
       <About/>  
       <Footer/>
      
      
    </div>
  );
}

export default App;
