import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

import S1 from '../assets/images/recent/s1.png'
import S2 from '../assets/images/recent/s2.png'
import S3 from '../assets/images/recent/s3.png'


function RecentProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call with setTimeout
    const fetchProjects = async () => {
      try {
        setLoading(true);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Dummy API response data
        const dummyData= [
          {
            id: 1,
            title: "App design For Industrial Audits",
            description: "iAudits is a powerful industrial audit management app that simplifies the audit process, ensures compliance, and boosts operational efficiency. Designed for various industries, iAudits provides auditors with intuitive tools for scheduling, conducting, and reporting audits seamlessly from their mobile devices. Enhance your auditing workflow with real-time data capture, automated checklists, and instant report generation.",
            image: S1,
            bgColor: "bg-blue-50"
          },
          {
            id: 2,
            title: "App development for SKY ERP",
            description: "SKY ERP is an all-in-one enterprise resource planning solution designed to streamline and optimize business operations across various industries. With robust modules for finance, inventory, human resources, sales, and customer relationship management, SKY ERP offers a comprehensive and customizable platform to manage your entire business process. Its user-friendly interface, real-time data analytics, and seamless integration capabilities empower businesses to enhance productivity, improve decision-making, and achieve greater efficiency. Experience the future of enterprise management with SKY ERP.",
            image: S2,
            bgColor: "bg-green-50"
          },
          {
            id: 3,
            title: "Custome Dev",
            description: "At NextCod.ing, we offer comprehensive tech support and custom development services to industries, organizations, and companies. Our expertise covers all aspects of development, from initial design to final deployment. We provide tailored solutions that address specific business needs, ensuring high-quality, scalable, and cost-effective outcomes. Partner with NextCod.ing to harness the power of advanced technologies and receive dedicated support for your custom development projects.",
            image: S3,
            bgColor: "bg-purple-50"
          }
        ];
        
        setProjects(dummyData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch projects. Please try again later.");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Animation */}
        <motion.div 
          className="relative mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
         ` {/* <div className="absolute -top-16 left-1/4">
            <div className="w-4 h-4 rounded-full bg-purple-600"></div>
          </div>` */}
          {/* <div className="absolute -top-8 right-1/4">
            <div className="text-purple-300">
              <ChevronRight size={24} />
            </div>
          </div> */}
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <div className="w-12 h-1 bg-purple-600"></div>
            </div>
            <h2 className="text-2xl font-medium text-gray-900">Our recent</h2>
            <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          </div>
        </motion.div>

        {/* Loading Animation */}
        {loading && (
          <motion.div 
            className="flex justify-center items-center py-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <div className="rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
          </motion.div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <p className="text-red-500">{error}</p>
            <button 
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        )}

        {/* Projects Cards Animation */}
        {!loading && !error && (
          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                className={`${project.bgColor} rounded-2xl overflow-hidden shadow-sm`}
              >
                <div className="flex flex-col md:flex-row">
                  <motion.div 
                    className="md:w-1/2 p-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src={project.image} 
                      alt={`${project.title} Screenshots`}
                      className="w-full h-auto rounded-lg"
                    />
                  </motion.div>
                  <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Button Animation */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button 
            className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Read more case studies <ArrowRight size={16} className="ml-1" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default RecentProjects;