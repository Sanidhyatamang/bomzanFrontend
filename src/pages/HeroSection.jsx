import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/rooms');
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className="relative h-screen w-screen bg-cover bg-center border-b-4 border-gradient-to-r from-blue-500 to-purple-500 overflow-hidden" 
      style={{
        backgroundImage: 'url(/images/background9.jpg)',
        minHeight: '100vh'
      }}
    >
      <motion.div
        className="absolute inset-0 bg-black opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      <div className="relative flex flex-col items-center justify-center h-full px-4">
        <div className="text-center text-white">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-3xl sm:text-4xl md:text-6xl font-thin drop-shadow-lg"
          >
            Welcome to Our Homestay
          </motion.h1>

          <motion.p
            className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 drop-shadow-md font-light"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Experience comfort and tranquility in a beautiful setting.
          </motion.p>

          <motion.button
            onClick={handleBookingClick}
            className="mt-8 px-6 py-3 bg-blue-700 text-white font-normal rounded-xl hover:bg-blue-900 hover:scale-105 transition-transform transform shadow-lg"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Book Your Stay"
          >
            Book Your Stay
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;