import { motion } from 'framer-motion';
import { useState } from 'react';
import Video from "../assets/images/video-1.png"

const TrustedCompanies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Leading companies trust us",
      subtitle: "to develop software",
      description: "We add development capacity to tech teams. Our value isn't limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.",
      image: Video,
      showPlayButton: true
    },
    {
      title: "Meet the People",
      subtitle: "We are Working With",
      description: "",
      image: Video,
      showPlayButton: false
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full bg-[#0B0F19] py-16 md:py-24 relative overflow-hidden">
      {/* Top Left Semicircle */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        style={{
          backgroundImage: 'linear-gradient(to right, #F76680, #57007B)'
        }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-0 left-[30%] w-12 md:w-20 h-6 md:h-10 bg-gradient-to-b from-pink-500 to-purple-900 rounded-b-full transform rotate-180"
      />

      {/* Bottom Right Semicircle */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        style={{
          backgroundImage: 'linear-gradient(to right, #F76680, #57007B)'
        }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute bottom-0 right-[30%] w-12 md:w-20 h-6 md:h-10 rounded-t-full"
      />

      {/* Background Gradient Circle */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-b from-purple-500/20 to-transparent blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 md:gap-20">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              transition={{ duration: 0.4 }}
              className="h-1 bg-gradient-to-r from-purple-600 to-pink-500 mb-6"
            />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-4xl font-bold text-white mb-4"
            >
              {slides[currentSlide].title}
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              {slides[currentSlide].subtitle}
            </motion.h3>
            {slides[currentSlide].description && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-400 text-base md:text-lg mb-8"
              >
                We <span className="text-purple-500">add development capacity</span> {slides[currentSlide].description}
              </motion.p>
            )}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
            >
              <span>See more Informations</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Content - Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative"
          >
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src={slides[currentSlide].image}
                alt="Team collaboration" 
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Play Button - Only show for first slide */}
              {/* {slides[currentSlide].showPlayButton && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.button>
              )} */}
            </motion.div>

            {/* Navigation Arrows */}
            <div className="flex justify-end gap-2 mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-purple-500 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies; 