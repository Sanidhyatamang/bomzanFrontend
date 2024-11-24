import React from 'react';
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
    className="bg-white text-gray-800 py-10"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-center">
        {/* Company Section */}
        <motion.div
        className="text-center sm:text-center"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1}}
        transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-serif mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-400">
                Our Services
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Get Help Section */}
        <motion.div
        className="text-center sm:text-center"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-lg font-serif mb-4">Get Help</h3>
          <ul className="space-y-2">
            <li>
              <a href="" className="hover:text-gray-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-400">
                Cancellation Policy
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Follow Us Section */}
        <motion.div
        className="text-center sm:text-center"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-lg font-serif mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-center space-x-6">
            <a
              href="https://www.youtube.com/@bomzanvlogger3012"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-3 rounded-full border border-gray-700 hover:text-red-500 hover:border-none hover:scale-150 transition duration-300"
            >
              <FaYoutube className="text-xl" />
            </a>
            <a
              href="https://www.facebook.com/babina.tamang.7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-3 rounded-full border border-gray-700 hover:text-blue-600 hover:border-none hover:scale-150 transition duration-300"
            >
              <FaFacebook className="text-xl"/>
            </a>
            <a
              href="https://www.instagram.com/@BABINABOMZAN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 rounded-full border border-gray-700 hover:text-pink-500 hover:border-none hover:scale-150 transition duration-300"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;