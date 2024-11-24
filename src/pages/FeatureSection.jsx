
import React from "react";
import { MapPinIcon, HomeIcon, GlobeAltIcon, BellIcon, WrenchIcon, SparklesIcon, CurrencyDollarIcon, ShieldCheckIcon, TruckIcon } from "@heroicons/react/24/outline";
import { motion } from 'framer-motion'
  

const features = [
  {
    title: "Prime Location",
    description: "Stay close to popular attractions and enjoy scenic surroundings.",
    icon: <MapPinIcon className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "Comfortable Stay",
    description: "Spacious rooms with cozy bedding for a restful experience.",
    icon: <HomeIcon className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "Authentic Local Experience",
    description: "Discover the local culture and enjoy traditional cuisines.",
    icon: <GlobeAltIcon className="w-10 h-10 text-green-500" />,
  },
  {
    title: "Personalized Services",
    description: "Tailored services to make your stay unforgettable.",
    icon:  <BellIcon className="w-10 h-10 text-red-500" />,
  },
  {
    title: "Modern Amenities",
    description: "Essential facilities for your comfort and convenience.",
    icon: <WrenchIcon className="w-10 h-10 text-indigo-500" />,
  },
  {
    title: "Nature and Serenity",
    description: "Relax amidst lush greenery and tranquil surroundings.",
    icon: <SparklesIcon className="w-10 h-10 text-teal-500" />,
  },
  {
    title: "Affordable Pricing",
    description: "Enjoy luxury at an affordable price with no hidden charges.",
    icon: <CurrencyDollarIcon className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Safety and Hygiene",
    description: "Stay in a clean and secure environment with regular sanitization.",
    icon: <ShieldCheckIcon className="w-10 h-10 text-gray-600" />,
  },
  {
    title: "Additional Services",
    description: "Book vehicles or guided tours directly with us.",
    icon: <TruckIcon className="w-10 h-10 text-orange-500" />,
  }
];




const FeatureSection = () => {
  return (
    <motion.div 
    className="bg-cover bg-center py-16"
    style={{backgroundImage: "url('/images/background21.jpg')"}}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 lg:px-20">
        <motion.h2 
        className="text-3xl font-thin text-center text-white mb-12"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-white/50 backdrop-blur-md p-6 rounded-lg shadow-md"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureSection;