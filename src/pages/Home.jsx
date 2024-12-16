import React from 'react';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Navbar from './Navbar';
import About from './About';
import FeatureSection from './FeatureSection';





const Home = () => {
  return (
    <div className="overflow-x-hidden h-screen grid place-items-center">
      <Navbar/>
      <HeroSection />
      <About />
      <FeatureSection />
      <Footer />
      
      
      
    </div>
  );
};

export default Home;






