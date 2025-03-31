import { useState } from "react";
import { motion } from "framer-motion";
import ContactUsForm from "./common/ContactUsForm";

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("Backend");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const categories = [
    "Backend",
    "Frontend",
    "Databases",
    "CMS",
    "CloudTesting",
    "DevOps",
  ];

  const techStackData = {
    Backend: [
      { id: 1, name: "Node.js", image: "/images/techstack/NodeJS.png" },
      { id: 2, name: "PHP", image: "/images/techstack/php.png" },
      { id: 3, name: "Python", image: "/images/techstack/Python.png" },
      { id: 4, name: "Ruby on Rails", image: "/images/techstack/rr.png" },
      { id: 5, name: "Java", image: "/images/techstack/java.png" },
      { id: 6, name: "Go", image: "/images/techstack/Go.png" },
      { id: 8, name: "mySql", image: "/images/techstack/mysql.png" },
      { id: 7, name: "dot", image: "/images/techstack/net.png" },
      { id: 9, name: "MongoDB", image: "/images/techstack/mongo.png" },
    ],
    Frontend: [
      { id: 1, name: "Node.js", image: "/images/techstack/NodeJS.png" },
      { id: 2, name: "PHP", image: "/images/techstack/php.png" },
      { id: 3, name: "Python", image: "/images/techstack/Python.png" },
      { id: 4, name: "Ruby on Rails", image: "/images/techstack/rr.png" },
      { id: 5, name: "Java", image: "/images/techstack/java.png" },
      { id: 6, name: "Go", image: "/images/techstack/Go.png" },
      { id: 8, name: "mySql", image: "/images/techstack/mysql.png" },
      { id: 7, name: "dot", image: "/images/techstack/net.png" },
      { id: 9, name: "MongoDB", image: "/images/techstack/mongo.png" },
    ],
    Databases: [
      { id: 1, name: "Node.js", image: "/images/techstack/NodeJS.png" },
      { id: 2, name: "PHP", image: "/images/techstack/php.png" },
      { id: 3, name: "Python", image: "/images/techstack/Python.png" },
      { id: 4, name: "Ruby on Rails", image: "/images/techstack/rr.png" },
      { id: 5, name: "Java", image: "/images/techstack/java.png" },
      { id: 6, name: "Go", image: "/images/techstack/Go.png" },
      { id: 8, name: "mySql", image: "/images/techstack/mysql.png" },
      { id: 7, name: "dot", image: "/images/techstack/net.png" },
      { id: 9, name: "MongoDB", image: "/images/techstack/mongo.png" },
    ],
    CMS: [
      { id: 1, name: "Node.js", image: "/images/techstack/NodeJS.png" },
      { id: 2, name: "PHP", image: "/images/techstack/php.png" },
      { id: 3, name: "Python", image: "/images/techstack/Python.png" },
      { id: 4, name: "Ruby on Rails", image: "/images/techstack/rr.png" },
      { id: 5, name: "Java", image: "/images/techstack/java.png" },
      { id: 6, name: "Go", image: "/images/techstack/Go.png" },
      { id: 8, name: "mySql", image: "/images/techstack/mysql.png" },
      { id: 7, name: "dot", image: "/images/techstack/net.png" },
      { id: 9, name: "MongoDB", image: "/images/techstack/mongo.png" },
    ],
    CloudTesting: [
      { id: 1, name: "Node.js", image: "/images/techstack/NodeJS.png" },
      { id: 2, name: "PHP", image: "/images/techstack/php.png" },
      { id: 3, name: "Python", image: "/images/techstack/Python.png" },
      { id: 4, name: "Ruby on Rails", image: "/images/techstack/rr.png" },
      { id: 5, name: "Java", image: "/images/techstack/java.png" },
      { id: 6, name: "Go", image: "/images/techstack/Go.png" },
      { id: 8, name: "mySql", image: "/images/techstack/mysql.png" },
      { id: 7, name: "dot", image: "/images/techstack/net.png" },
      { id: 9, name: "MongoDB", image: "/images/techstack/mongo.png" },
    ],
    DevOps: [
      { id: 1, name: "Node.js", image: "/images/techstack/NodeJS.png" },
      { id: 2, name: "PHP", image: "/images/techstack/php.png" },
      { id: 3, name: "Python", image: "/images/techstack/Python.png" },
      { id: 4, name: "Ruby on Rails", image: "/images/techstack/rr.png" },
      { id: 5, name: "Java", image: "/images/techstack/java.png" },
      { id: 6, name: "Go", image: "/images/techstack/Go.png" },
      { id: 8, name: "mySql", image: "/images/techstack/mysql.png" },
      { id: 7, name: "dot", image: "/images/techstack/net.png" },
      { id: 9, name: "MongoDB", image: "/images/techstack/mongo.png" },
    ],
  };

  const developmentSteps = [
    {
      id: 1,
      title: "Assemble the right team",
      description: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
    },
    {
      id: 2,
      title: "Sprint planning",
      description: "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
    },
    {
      id: 3,
      title: "Tech architecture",
      description: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently",
    },
    {
      id: 4,
      title: "Standups & weekly demos",
      description: "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
    },
    {
      id: 5,
      title: "Code reviews",
      description: "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells",
    },
    {
      id: 6,
      title: "Iterative delivery",
      description: "We divide the implementation process into several checkpoints rather than a single deadline.",
    },
  ];

  return (
    <>
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-[#0B0B0F] text-white">
        <div className="max-w-7xl mx-auto">
          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.h2 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium mb-2 gradient-text"
            >
              Our
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Tech Stack
            </motion.h3>
          </motion.div>

          {/* Category Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-2 text-sm font-medium transition-all duration-300
                  ${
                    activeCategory === category
                      ? "text-white bg-clip-text gradient-text text-transparent after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-800 after:to-pink-600"
                      : "text-gray-400"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center gap-4 container mx-auto flex-wrap"
          >
            {techStackData[activeCategory].map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <motion.div 
                  whileHover={{ rotate: 5 }}
                  className="w-[170px] rounded-lg p-4 flex items-center justify-center mb-3"
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-sm text-gray-400"
                >
                  {tech.name}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* Development Process Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32"
          >
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
                className="text-2xl md:text-3xl font-medium mb-2"
              >
                How development
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold gradient-text"
              >
                through Alcaline works
              </motion.h3>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-800 to-pink-600"
              />
              
              {/* Timeline cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {developmentSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                    }`}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-[#1A1A1F] p-6 rounded-lg border border-gray-800 hover:border-purple-600 transition-all duration-300"
                    >
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                        className="flex items-center mb-4 justify-start md:justify-end"
                      >
                        <span className="text-purple-600 font-medium mr-2">#{step.id}</span>
                        <h4 className="text-xl font-semibold">{step.title}</h4>
                      </motion.div>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                        className="text-gray-400 text-sm"
                      >
                        {step.description}
                      </motion.p>
                    </motion.div>
                    
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                      className={`hidden md:block absolute top-1/2 ${
                        index % 2 === 0 ? 'right-0 md:-right-4' : 'left-0 md:-left-4'
                      } transform -translate-y-1/2 w-8 h-8 bg-[#1A1A1F] rounded-full border-4 border-purple-600`}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ background: 'linear-gradient(to bottom, #222C42, #243458, #273B6D)' }}
            className=" mt-12 max-w-7xl mx-auto rounded-lg p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between"
          >
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Hire the best developers and<br />designers around!
              </h2>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0F1B39] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#162544] transition-all duration-300"
              onClick={openContactModal}
            >
              Hire Top Developers
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form Modal */}
      <ContactUsForm 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />
    </>
  );
};

export default TechStack;
