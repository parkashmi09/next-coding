import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

const DevelopmentApproach = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    {
      id: 1,
      title: "UX Driven Engineering",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "/images/files/first.png",
      bgColor: "bg-black"
    },
    {
      id: 2,
      title: "Developing Shared Understanding",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "/images/files/second.png",
      bgColor: "bg-[#58B4FF]"
    },
    {
      id: 3,
      title: "Proven Experience and Expertise",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "/images/files/third.png",
      bgColor: "bg-[#FF5FA8]"
    },
    {
      id: 4,
      title: "Security & Intellectual Property (IP)",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "/images/files/fourth.png",
      bgColor: "bg-[#2EEAAB]"
    },
    {
      id: 5,
      title: "Code Reviews",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "/images/files/fifth.png",
      bgColor: "bg-[#FFB258]"
    },
    {
      id: 6,
      title: "Quality Assurance & Testing",
      description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      icon: "/images/files/sixth.png",
      bgColor: "bg-[#B658FF]"
    }
  ];

  const FeatureCard = ({ feature }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow h-full flex flex-col"
    >
      <div className="flex items-start space-x-4 flex-grow">
        <div className={`w-12 h-12 flex-shrink-0 rounded-lg ${feature.bgColor} p-2.5`}>
          <img
            src={feature.icon}
            alt={feature.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-grow">
          <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium mb-2">Our design and</h2>
          <h3 className="text-3xl md:text-4xl font-bold">development approach</h3>
        </motion.div>

        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1.1}
            centeredSlides={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="w-full pb-12"
          >
            {features.map((feature) => (
              <SwiperSlide key={feature.id} className="flex justify-center">
                <div className="w-[90%] max-w-[350px]">
                  <FeatureCard feature={feature} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DevelopmentApproach;