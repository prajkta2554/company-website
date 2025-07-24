
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import VideoSlider from './components/VideoSlider';
import About from './components/About';


function App() {
  return (
    <div>
       <Navbar />
       <Home/>
       <VideoSlider/> 
       <About/>  
      
      
    </div>
  );
}

export default App;
