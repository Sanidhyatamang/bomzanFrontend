import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: 'A spacious deluxe room with a king-sized bed, private balcony, and sea view.',
    price: 'Rs 1200/per head day (That includes all the meals)',
    image: '/path/room1.jpg'
  },
  {
    id: 2,
    name: 'Suite',
    description: 'Luxury suite with private jacuzzi, city view, and elegant decor.',
    price: 'Rs 1200/per head day (That includes all the meals)',
    image: '/images/room2.jpg'
  },
  {
    id: 3,
    name: 'luxury',
    description: "Cozy rooms with modern amenities for your perfect getaway retreat.",
    price: "Rs 1200/per head day (That includes all the meals)",
    image: 'images/room3.jpg'
  },
  {
    id: 4,
    name: 'Honeymoon Suite',
    description: "Unwind in comfort and style, surrounded by serene beauty.",
    price: "Rs 1200/per head day (That includes all the meals)",
    image: 'images/room4.jpg'
  }


  
];

const RoomsSection = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking'); 
  };

  return (
    <section
      className="py-12 bg-cover bg-center bg-fixed relative flex flex-col items-center border-b-4 border-white"
      style={{ backgroundImage: 'url("/images/background28.jpg")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <motion.h2 
      className="relative text-center text-4xl font-thin text-white mb-12 z-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, }}
      >
        Our Rooms
        </motion.h2>

      <div className="container mx-auto space-y-16 relative z-10">
        {rooms.map((room, index) => (
          <div
            key={room.id}
            className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} space-y-8 lg:space-y-0`}
          >
            {/* Transparent Box for Room Image */}
            <motion.div 
            className="lg:w-1/2 w-full h-64 lg:h-80 bg-white bg-opacity-30 rounded-lg p-4 flex justify-center items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8,  delay: 0.2 }}
            >
              <div className="w-3/4 h-full rounded-xl overflow-hidden flex justify-center items-center">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover rounded-l-full rounded-r-full"
                />
              </div>
            </motion.div>

            {/* Room Description with Transparency */}
            <motion.div 
            className="lg:w-1/2 w-full p-6 lg:p-8 bg-white bg-opacity-50 backdrop-blur-sm rounded-lg shadow-lg flex flex-col space-y-4"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 , delay: 0.4 }}
            >
              <h3 className="text-3xl font-semibold text-gray-800">{room.name}</h3>
              <p className="text-gray-700">{room.description}</p>
              <p className="text-lg font-bold text-blue-600">{room.price}</p>
              <button
                onClick={handleBookingClick}
                className="w-32 px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Book Now
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomsSection;