import React from 'react';
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="p-8 bg-gray-50">
      {/* Heading */}
      <motion.h2 
      className="text-4xl font-thin text-center text-gray-800 mb-6 py-8"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      >
        About Bomzan Homestay
      </motion.h2>

      {/* Image and Text Container */}
      <div className="flex flex-wrap items-center justify-center py-20">
        {/* Image */}
        <motion.div 
        className="w-full lg:w-1/2 mb-6 lg:mb-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        >
          <img
            src="/images/background2.jpg"
            alt="Bomzan Homestay"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </motion.div>

        {/* Text */}
        <motion.div 
        className="w-full lg:w-1/2 p-4 text-gray-700 leading-relaxed text-lg"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
  
        >
          <p>
            <span className="font-semibold">Welcome to Bomzan Homestay,</span> your perfect getaway in the serene hills
            of Darjeeling. We offer a cozy retreat surrounded by breathtaking
            nature, where you can relax and reconnect with yourself. Experience
            local culture, delicious cuisine, and warm hospitality during your
            stay with us. Whether you're here for adventure or simply seeking
            peace and quiet, Bomzan Homestay promises an unforgettable experience.
          </p>
        </motion.div>
        
      
      { /* Button */ }
      <motion.div 
      className="text-end mt-8 lg:py-[55px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      
      
      >
        <button className="border border-gray-800 text-gray-800 px-6 py-3 rounded-lg text-lg hover:scale-105 transition duration-300">
          Get to know us
        </button>
    </motion.div>
    </div>
 </section>
  );
};

export default About;