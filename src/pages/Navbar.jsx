import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/booking');
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Hide or show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      className={`fixed top-0 left-0 w-full backdrop-blur-sm bg-gray-900/10 py-4 shadow-md z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left Side - Brand Name for large screens */}
        <div className="text-2xl text-white font-thin lg:block hidden">
          <span>Bomzan Homestay</span>
        </div>

        {/* Center Links for large screens */}
        <div className="hidden lg:flex space-x-8 text-lg font-light font-serif">
          <Link to="/testimonials" className="text-white hover:text-gray-300">Reviews</Link>
          <Link to="/blogs" className="text-white hover:text-gray-300">Blogs</Link>
          <Link to="/rooms" className="text-white hover:text-gray-300">Rooms</Link>
          <button onClick={handleBooking} className="text-white hover:text-gray-300">Book Now</button>
        </div>

        {/* Right Side - Buttons for large screens */}
        <div className="hidden lg:flex space-x-2">
          <button
            className="font-light font-serif text-white border border-gray-200 py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-500 hover:border-blue-500 hover:scale-105 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Icon - Hidden on large screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Content */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-900/10 shadow-md backdrop-blur-sm">
          <div className="flex flex-col items-center justify-start space-y-4 py-6 text-semibold text-lg font-light font-serif">
            <Link to="/testimonials" className="text-white hover:text-gray-300" onClick={toggleMenu}>Reviews</Link>
            <Link to="/blogs" className="text-white hover:text-gray-300" onClick={toggleMenu}>Blogs</Link>
            <Link to="/rooms" className="text-white hover:text-gray-300" onClick={toggleMenu}>Rooms</Link>
            <button onClick={handleBooking} className="text-white hover:text-gray-300">Book Now</button>

            {/* Mobile View Button */}
            <button
              className="text-white border border-white font-medium py-2 px-4 rounded-full transition-colors duration-300 hover:scale-105 hover:bg-blue-500 hover:border-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;