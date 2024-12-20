import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-cover bg-center w-full h-screen overflow-hidden"
      style={{ backgroundImage: "url('/images/background3.jpg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content Wrapper */}
      <div className="relative container mx-auto px-6 py-12 text-white h-full flex items-center justify-center">
        {/* Merged Contact Box */}
        <div className="w-full max-w-5xl p-6 bg-white bg-opacity-10 rounded-lg flex flex-col lg:flex-row gap-8">
          {/* Left Section - Contact Information */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
            <p>Bomzan Homestay,<br />Darjeeling, India</p>

            <h3 className="text-2xl font-semibold mt-6 mb-4">Call Us</h3>
            <p>+91 12345 67890</p>

            <h3 className="text-2xl font-semibold mt-6 mb-4">Email Us</h3>
            <p>info@bomzanhomestay.com</p>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Get In Touch
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-white mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-2 rounded bg-transparent border border-white focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-white mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full p-2 rounded bg-transparent border border-white focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-white mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-2 rounded bg-transparent border border-white focus:outline-none focus:border-blue-400"
                ></textarea>
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
