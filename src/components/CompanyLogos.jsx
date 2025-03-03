import { useRef, useEffect } from 'react';
import { motion, useAnimationControls, useMotionValue } from 'framer-motion';
import L1 from "../assets/images/logos/logo-1.png";
import L2 from "../assets/images/logos/logo-2.png";
import L3 from "../assets/images/logos/logo-3.png";
import L4 from "../assets/images/logos/logo-4.png";
import L5 from "../assets/images/logos/logo-5.png";
import L6 from "../assets/images/logos/logo-6.png";

const CompanyLogos = () => {
  const containerRef = useRef(null);
  const controls = useAnimationControls();
  const x = useMotionValue(0);

  // Mock company data
  const companies = [
    {
      id: 1,
      name: "Sampath Cream House",
      logo:L1
    },
    {
      id: 2,
      name: "Snotes",
      logo:L2
    },
    {
      id: 3,
      name: "AdClipse",
      logo: L3
    },
    {
      id: 4,
      name: "PJC Bridge",
      logo: L4
    },
    {
      id: 5,
      name: "ClickOrder",
      logo: L6
    },
    {
      id: 6,
      name: "TechMate",
      logo: L5
    }
  ];

  // Duplicate array for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroll = async () => {
      await controls.start({
        x: [0, -container.scrollWidth / 2],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    scroll();
  }, [controls]);

  const handleDragStart = () => {
    controls.stop();
  };

  const handleDragEnd = () => {
    controls.start({
      x: [x.get(), -containerRef.current.scrollWidth / 2],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  return (
    <div className="w-full bg-white py-8 md:py-12 overflow-hidden">
      <div className="max-w-[1800px] mx-auto relative">
        <motion.div
          ref={containerRef}
          className="flex items-center gap-8 md:gap-12"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          animate={controls}
          style={{ x }}
        >
          {duplicatedCompanies.map((company, index) => (
            <motion.div
              key={`${company.id}-${index}`}
              className="flex-shrink-0 h-12 md:h-16 w-auto  transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-full w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Overlays */}
        {/* <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0B0F19] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0B0F19] to-transparent pointer-events-none" /> */}
      </div>
    </div>
  );
};

export default CompanyLogos; 