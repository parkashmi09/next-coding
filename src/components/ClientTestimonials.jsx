import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Person1 from "../assets/images/reviews/person-1.png";

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const carouselRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Client koi",
      company: "KUch bhi Dalenge",
      image: Person1,
      testimonial: "Without a doubt, I highly recommend NextCod.ing for top-tier software development and tech solutions. Their innovation and expertise set them apart in the industry."
    },
    {
      id: 2,
      name: "John Wick",
      company: "Kuch nahi ta to yah data",
      image: Person1,
      testimonial: "Their innovation and expertise set them apart in the industry, and I'd enthusiastically share their remarkable work with anyone seeking cutting-edge technology and exceptional service."
    },
    {
      id: 3,
      name: "Rohan Agalawe",
      company: "KUCH BHII",
      image: Person1,
      testimonial: "Without a doubt, I highly recommend NextCod.ing for top-tier software development and tech solutions. Their innovation and expertise set them apart in the industry."
    },
    {
      id: 4,
      name: "Ashiwni K.",
      company: "Iska Brand",
      image: Person1,
      testimonial: "I'd enthusiastically share their remarkable work with anyone seeking cutting-edge technology and exceptional service. Their team delivers on every promise."
    },
    {
      id: 5,
      name: "Koi to Dusara",
      company: "Uska Brand",
      image: Person1,
      testimonial: "Without a doubt, I highly recommend NextCod.ing for top-tier software development and tech solutions. Their innovation and expertise set them apart."
    },
    {
      id: 6,
      name: "Sarah Johnson",
      company: "Tech Innovators",
      image: Person1,
      testimonial: "NextCod.ing delivered our project ahead of schedule with exceptional quality. Their attention to detail and communication throughout was outstanding."
    },
    {
      id: 7,
      name: "Michael Chen",
      company: "Data Solutions Inc",
      image: Person1,
      testimonial: "We've worked with many development teams, but NextCod.ing stands out for their technical expertise and ability to translate our ideas into reality."
    },
    {
      id: 8,
      name: "Priya Sharma",
      company: "Global Ventures",
      image: Person1,
      testimonial: "The team at NextCod.ing went above and beyond our expectations. Their solutions have helped us increase efficiency by over 40%."
    },
    {
      id: 9,
      name: "Alex Morgan",
      company: "Digital First",
      image: Person1,
      testimonial: "From concept to execution, NextCod.ing proved to be the perfect partner for our digital transformation. Highly recommended!"
    },
    {
      id: 10,
      name: "David Wilson",
      company: "Future Forward",
      image: Person1,
      testimonial: "The expertise and dedication of the NextCod.ing team have made them our go-to development partner for all our projects."
    }
  ];

  // Calculate how many cards to show based on screen size
  const [cardsToShow, setCardsToShow] = useState(5);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 768) {
        setCardsToShow(2);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(3);
      } else {
        setCardsToShow(5);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  // Calculate card width on mount and resize
  useEffect(() => {
    const calculateCardWidth = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.clientWidth;
        const gapSize = 16; // gap-4 = 16px
        setCardWidth((containerWidth - (gapSize * (cardsToShow - 1))) / cardsToShow);
      }
    };

    calculateCardWidth();
    window.addEventListener('resize', calculateCardWidth);
    
    return () => window.removeEventListener('resize', calculateCardWidth);
  }, [cardsToShow]);

  const maxIndex = testimonials.length - cardsToShow;

  const handleNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex) ? 0 : prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev <= 0) ? maxIndex : prev - 1);
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, maxIndex]);

  return (
    <section className="w-full bg-[#0B0F19] py-16 md:py-24 relative overflow-hidden">
      {/* Quote marks decoration */}
      <div className="absolute left-[5%] top-[15%] text-[#2A2A2A] text-8xl font-serif hidden md:block">"</div>
      <div className="absolute right-[5%] top-[15%] text-[#2A2A2A] text-8xl font-serif transform rotate-180 hidden md:block">"</div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            transition={{ duration: 0.4 }}
            className="h-1 bg-pink-500 mx-auto mb-6"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Why customers love
            <br />
            <span className="mt-2 inline-block">working with us</span>
          </motion.h2>
        </div>

        <div className="relative px-8 md:px-12">
          {/* Carousel container */}
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <motion.div
              className="flex gap-4"
              animate={{
                x: -currentIndex * (cardWidth + 16) // 16px is the gap size (gap-4)
              }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  style={{ width: cardWidth > 0 ? cardWidth : 'auto' }}
                  className="flex-shrink-0 bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg"
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-500"
                    />
                    <div className="ml-3">
                      <h3 className="text-white font-medium">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-4">{testimonial.testimonial}</p>
                  
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full left-0 px-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-purple-500 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition-all bg-gray-900 bg-opacity-70 z-10"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white z-10"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.ceil(testimonials.length / cardsToShow) }).map((_, idx) => {
            const isActive = idx * cardsToShow <= currentIndex && currentIndex < (idx + 1) * cardsToShow;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx * cardsToShow)}
                className={`w-2 h-2 rounded-full transition-all ${isActive ? 'w-6 bg-pink-500' : 'bg-gray-600'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;