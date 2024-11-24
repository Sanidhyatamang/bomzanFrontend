
import React from 'react';
import { motion } from 'framer-motion'

const BlogSection = () => {
  
  const blogs = [
    {
      id: 1,
      title: 'Exploring the Beauty of the Mountains',
      description: 'A deep dive into mountain adventures and scenic beauty...',
      imageUrl: '/images/background17.jpg', // replace with actual path if you have images
    },
    {
      id: 2,
      title: 'Cultural Experiences at Bomzan Homestay',
      description: 'Discover the unique cultural aspects of staying with us...',
      imageUrl: 'images/background2.jpg',
    },
    {
      id: 3,
      title: 'Top 10 Hiking Trails Near Bomzan Homestay',
      description: 'Find the best trails and breathtaking views nearby...',
      imageUrl: 'images/background6.jpg',
    },
    
  ];

  return (
    <section 
    className="bg-cover bg-start py-10 flex flex-col"
    style={{
      backgroundImage: 'url(/images/background17.jpg)',
      minHeight: '100vh',
    }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
        className="text-3xl  text-center mb-6 text-white font-thin"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        >
          Our Blogs
        </motion.h2>
        
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
          {blogs.map((blog, index) => (
            <motion.div 
            key={blog.id} 
            className="bg-white bg-opacity-80 shadow-md rounded-lg p-4 backdrop-blur-sm"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={blog.imageUrl} 
                alt={blog.title}
                className="w-full h-48 object-cover rounded-md mb-4 opacity-80"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {blog.title}
              </h3>
              <p className="text-gray-700 mt-2">{blog.description}</p>
              <button className="mt-4 text-blue-600 hover:underline">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection