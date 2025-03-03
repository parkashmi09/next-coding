import heroIllustration from '../assets/images/hero.png'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="w-full bg-[#0B0F19] pt-16 md:pt-20 relative overflow-hidden">
      {/* Semicircle at the bottom-left corner */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        style={{
          backgroundImage: 'linear-gradient(to right, #F76680, #57007B)'
        }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute bottom-0 left-[30%] w-12 md:w-20 h-6 md:h-10 rounded-t-full"
      />
      

      <div className="container mx-auto px-3 md:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between py-8 md:py-20">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white"
              >
                Great{' '}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-purple-800 to-pink-600 inline-block text-transparent bg-clip-text font-bold"
              >
                Product
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-white"
              >
                {' '}is<br className="hidden sm:block" />built by great{' '}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-r from-purple-400 to-purple-600 inline-block text-transparent bg-clip-text font-bold"
              >
                teams
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-base md:text-lg text-secondary mb-4 md:mb-8"
            >
              We help build and manage a team of world-class developers
              <br className="hidden md:block" />
              to bring your vision to life
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, delay: 1.2 }}
              className="px-6 py-3 md:px-8 md:py-4 bg-white text-primary rounded-lg font-semibold hover:bg-opacity-90 transition-opacity text-sm md:text-base"
            >
              Let's get started!
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              src={heroIllustration}
              alt="Team collaboration illustration"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;