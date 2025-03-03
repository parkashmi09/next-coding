import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Services = () => {
  // Mock data for services
  const services = [
    {
      id: 1,
      title: 'Mobile App Development',
      description: 'Development of native and cross-platform apps for Android and iOS, ensuring seamless performance and user experience.',
      icon: '📱',
    },
    {
      id: 2,
      title: 'Web Design & Development',
      description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
      icon: '💻',
    },
    {
      id: 3,
      title: 'Software Development Service',
      description: 'We create bespoke software solutions tailored to your specific business needs, enhancing functionality and efficiency.',
      icon: '⚙️',
    },
    {
      id: 4,
      title: 'Web3 & Crypto',
      description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
      icon: '🔗',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    beforeChange: (_, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '16px',
          slidesToScroll: 1,
          autoplaySpeed: 2000,
        }
      }
    ]
  };

  return (
    <section className="w-full py-6 md:py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-2 md:px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-8"
        >
          Services we offer
        </motion.h2>
        
        <div className="relative py-2 md:py-4">
          <div className="max-w-6xl mx-auto">
            <Slider {...settings} className="services-slider">
              {services.map((service, index) => (
                <div key={service.id} className="px-1 md:px-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div 
                      className={`p-3 md:p-4 rounded-xl bg-white transition-all duration-300 h-[220px] md:h-[280px] ${
                        index === activeSlide 
                          ? 'border-2 border-purple-600 shadow-lg scale-[1.02] md:scale-105 z-10' 
                          : 'border border-gray-200 shadow-sm scale-100'
                      }`}
                    >
                      <motion.div 
                        className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          index === activeSlide
                            ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          <span className="text-lg md:text-xl">{service.icon}</span>
                        </div>
                        <h3 className={`text-sm md:text-lg font-semibold transition-colors duration-300 line-clamp-1 ${
                          index === activeSlide ? 'text-purple-600' : 'text-gray-800'
                        }`}>
                          {service.title}
                        </h3>
                      </motion.div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-5 md:line-clamp-4">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Custom Navigation */}
          <div className="flex flex-col items-center mt-6 md:mt-8 gap-2 md:gap-3">
            {/* Progress Dots */}
            <div className="flex gap-1 md:gap-2">
              {services.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveSlide(index)}
                  className={`transition-all duration-300 h-1 md:h-1.5 rounded-full bg-gray-300 ${
                    index === activeSlide ? 'w-4 md:w-6 bg-purple-600' : 'w-1 md:w-1.5'
                  }`}
                />
              ))}
            </div>
            
            {/* Progress Numbers */}
            <motion.div 
              className="flex items-center gap-1 md:gap-2 text-xs"
              animate={{ opacity: [0.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            >
              <span className="text-purple-600 font-medium">0{activeSlide + 1}</span>
              <div className="w-4 md:w-6 h-[1px] bg-gray-300"></div>
              <span className="text-gray-400">05</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;