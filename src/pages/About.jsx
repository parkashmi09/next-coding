import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { HiOutlineUsers, HiOutlineLightBulb, HiOutlineGlobeAlt } from 'react-icons/hi';
import ContactUsForm from '../components/common/ContactUsForm';

const About = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const teamMembers = [
    {
      id: 1,
      name: "Palkash Sharma",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Professional male in suit
      bio: "With over 10 years of experience in software development and team leadership, Palkash has guided numerous projects from concept to successful deployment.",
      social: {
        linkedin: "https://linkedin.com/in/palkash",
        twitter: "https://twitter.com/palkash",
        github: "https://github.com/palkash"
      }
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Sarah is an expert in cloud architecture and scalable systems with a passion for creating efficient, maintainable code.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Design Lead",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Michael brings creative vision to life with a focus on intuitive user experiences and beautiful interfaces.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  const companyValues = [
    {
      id: 1,
      title: "Client-Focused Approach",
      description: "We prioritize our clients' needs and goals, ensuring every solution we deliver creates real value.",
      icon: <HiOutlineUsers className="w-8 h-8 text-purple-600" />
    },
    {
      id: 2,
      title: "Innovation & Excellence",
      description: "We constantly push boundaries to deliver cutting-edge solutions that exceed expectations.",
      icon: <HiOutlineLightBulb className="w-8 h-8 text-purple-600" />
    },
    {
      id: 3,
      title: "Global Perspective",
      description: "Our diverse team brings global insights and experiences to every project we undertake.",
      icon: <HiOutlineGlobeAlt className="w-8 h-8 text-purple-600" />
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <div className="bg-[#0B0F19] text-white min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Elements */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-600 filter blur-[100px] opacity-20"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-pink-600 filter blur-[100px] opacity-20"></div>
          </motion.div>

          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.h1 
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                About <span className="bg-gradient-to-r from-purple-400 to-pink-600 inline-block text-transparent bg-clip-text">NextCod.ing</span>
              </motion.h1>
              <motion.p 
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-300 mb-8"
              >
                We're a team of passionate developers, designers, and strategists dedicated to transforming ideas into exceptional digital experiences.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24 bg-[#0F1525]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Founded in 2020, NextCod.ing began with a simple mission: to help businesses transform their digital presence through innovative technology solutions.
                  </p>
                  <p>
                    What started as a small team of passionate developers has grown into a full-service digital agency with expertise across web development, mobile applications, and custom software solutions.
                  </p>
                  <p>
                    Today, we're proud to have partnered with clients ranging from ambitious startups to established enterprises, helping them achieve their goals through technology.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:w-1/2"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-30 blur-lg"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Team collaboration" 
                    className="rounded-lg w-full h-auto relative z-10"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-gray-300">
                These core principles guide everything we do, from how we build our products to how we interact with our clients and each other.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1A1F2E] p-8 rounded-xl hover:bg-[#232A3F] transition-colors duration-300"
                >
                  <div className="bg-[#2D3958]/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 md:py-24 bg-[#0F1525]">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership Team</h2>
              <p className="text-gray-300">
                Meet the talented individuals who drive our vision and lead our company to success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-b from-[#1E2A4A]/80 to-[#0B0B0F]/90 rounded-xl overflow-hidden border border-purple-900/20 backdrop-blur-sm"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                    
                    {/* Social Icons */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-20">
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href={member.social.linkedin}
                        className="bg-purple-600/90 p-2 rounded-lg hover:bg-purple-700 shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="w-4 h-4 text-white" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href={member.social.twitter}
                        className="bg-purple-600/90 p-2 rounded-lg hover:bg-purple-700 shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter className="w-4 h-4 text-white" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href={member.social.github}
                        className="bg-purple-600/90 p-2 rounded-lg hover:bg-purple-700 shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="w-4 h-4 text-white" />
                      </motion.a>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-purple-400 text-sm mb-4">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ background: 'linear-gradient(to bottom, #222C42, #243458, #273B6D)' }}
              className="rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to bring your ideas to life?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Partner with us to transform your vision into reality. Our team is ready to help you build the next great digital experience.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openContactModal}
                className="px-8 py-4 bg-gradient-to-t from-indigo-950 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Contact Form Modal */}
      <ContactUsForm 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />
    </>
  );
};

export default About;