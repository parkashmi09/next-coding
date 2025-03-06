import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Teams = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", // Business professional male
      expertise: ["Leadership", "Strategy", "Innovation"],
      description: "10+ years of experience in software development and team leadership",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", // Professional woman in tech
      expertise: ["Architecture", "Cloud", "DevOps"],
      description: "Expert in cloud architecture and scalable systems",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Design Lead",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", // Creative professional male
      expertise: ["UI/UX", "Product Design", "Brand"],
      description: "Passionate about creating intuitive user experiences",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Emma Davis",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", // Professional woman in business
      expertise: ["Agile", "Team Building", "Strategy"],
      description: "Certified Scrum Master with focus on team excellence",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
        id: 4,
        name: "Emma Davis",
        role: "Project Manager",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", // Professional woman in business
        expertise: ["Agile", "Team Building", "Strategy"],
        description: "Certified Scrum Master with focus on team excellence",
        social: {
          linkedin: "#",
          github: "#",
          twitter: "#"
        }
      },
      {
        id: 4,
        name: "Emma Davis",
        role: "Project Manager",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", // Professional woman in business
        expertise: ["Agile", "Team Building", "Strategy"],
        description: "Certified Scrum Master with focus on team excellence",
        social: {
          linkedin: "#",
          github: "#",
          twitter: "#"
        }
      },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#0B0B0F] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium mb-2 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            Meet Our Team
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            The Innovators Behind Our Success
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Our team of experts brings together diverse skills and experiences to deliver exceptional solutions for our clients.
          </motion.p>
        </motion.div>

        {/* Team Carousel with Smaller Cards */}
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            renderBullet: function (index, className) {
              return '<span class="' + className + ' custom-bullet"></span>';
            }
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full py-12"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id} className="w-[240px] sm:w-[280px]">
              <motion.div
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-[#1E2A4A]/80 to-[#0B0B0F]/90 rounded-2xl overflow-hidden shadow-xl border border-purple-900/20 backdrop-blur-sm">
                  {/* Image Container */}
                  <div className="relative h-[260px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600" />
                    {/* Social Icons */}
                    <div className="absolute bottom-3 left-3 right-3 flex justify-center gap-2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href={member.social.linkedin}
                        className="bg-purple-600/90 p-2 rounded-lg hover:bg-purple-700 shadow-lg"
                      >
                        <FaLinkedin className="w-4 h-4 text-white" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href={member.social.github}
                        className="bg-purple-600/90 p-2 rounded-lg hover:bg-purple-700 shadow-lg"
                      >
                        <FaGithub className="w-4 h-4 text-white" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href={member.social.twitter}
                        className="bg-purple-600/90 p-2 rounded-lg hover:bg-purple-700 shadow-lg"
                      >
                        <FaTwitter className="w-4 h-4 text-white" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h4 className="text-lg font-bold mb-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                      {member.name}
                    </h4>
                    <p className="text-purple-400 text-xs font-medium mb-2">
                      {member.role}
                    </p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-1 rounded-full bg-purple-900/20 text-purple-200 border border-purple-600/30 hover:bg-purple-900/40 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Call to Action (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg group focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-[#0B0B0F]"
          >
            <span className="absolute left-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-gradient-to-r from-pink-600 to-purple-600 group-hover:-translate-x-0"></span>
            <span className="relative">Join Our Team</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Updated Custom Styles */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }
        
        .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          margin: 0 8px !important;
          background: rgba(255, 255, 255, 0.2) !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        
        .swiper-pagination-bullet-active {
          width: 30px !important;
          border-radius: 6px !important;
          background: linear-gradient(to right, #9333ea, #ec4899) !important;
        }
      `}</style>
    </section>
  );
};

export default Teams;