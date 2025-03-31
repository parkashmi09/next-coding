import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { HiCode, HiDatabase, HiDesktopComputer, HiServer, HiCloud, HiCog } from 'react-icons/hi';
import ContactUsForm from '../components/common/ContactUsForm';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const services = [
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <HiServer className="w-8 h-8 text-purple-500" />,
      description: 'Build robust, scalable server-side applications with our expert backend development services.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      technologies: [
        { id: 1, name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { id: 2, name: "PHP", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { id: 3, name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { id: 4, name: "Ruby on Rails", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" },
        { id: 5, name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { id: 6, name: "Go", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" }
      ],
      benefits: [
        "High-performance API development",
        "Microservices architecture",
        "Real-time data processing",
        "Secure authentication systems",
        "Scalable infrastructure design"
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <HiCode className="w-8 h-8 text-blue-500" />,
      description: 'Create stunning, responsive user interfaces that deliver exceptional user experiences.',
      image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      technologies: [
        { id: 1, name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { id: 2, name: "Vue.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { id: 3, name: "Angular", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { id: 4, name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { id: 5, name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { id: 6, name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
      ],
      benefits: [
        "Responsive web design",
        "Interactive UI/UX",
        "Progressive Web Apps (PWA)",
        "Cross-browser compatibility",
        "Performance optimization"
      ]
    },
    {
      id: 'databases',
      title: 'Database Solutions',
      icon: <HiDatabase className="w-8 h-8 text-green-500" />,
      description: 'Design and implement efficient database architectures for your data storage needs.',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      technologies: [
        { id: 1, name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { id: 2, name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { id: 3, name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { id: 4, name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { id: 5, name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { id: 6, name: "Elasticsearch", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" }
      ],
      benefits: [
        "Data modeling and optimization",
        "Database migration services",
        "High-availability setups",
        "Data backup and recovery",
        "Query performance tuning"
      ]
    },
    {
      id: 'cms',
      title: 'CMS Development',
      icon: <HiDesktopComputer className="w-8 h-8 text-yellow-500" />,
      description: 'Custom content management solutions that empower your team to manage digital content efficiently.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      technologies: [
        { id: 1, name: "WordPress", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
        { id: 2, name: "Drupal", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg" },
        { id: 3, name: "Strapi", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { id: 4, name: "Contentful", image: "https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea2a/PoweredByContentful_LightBackground.svg" },
        { id: 5, name: "Sanity", image: "https://cdn.sanity.io/images/3do82whm/next/4b1f008289da5bc4f8f82d891b4baae184bff14c-1200x600.png?w=720&h=360&fit=clip&auto=format" },
        { id: 6, name: "Shopify", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" }
      ],
      benefits: [
        "Custom CMS development",
        "Headless CMS integration",
        "Content modeling and architecture",
        "User role management",
        "Multi-language support"
      ]
    },
    {
      id: 'cloudtesting',
      title: 'Cloud & Testing',
      icon: <HiCloud className="w-8 h-8 text-indigo-500" />,
      description: 'Leverage cloud technologies and comprehensive testing strategies for reliable applications.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      technologies: [
        { id: 1, name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { id: 2, name: "Google Cloud", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { id: 3, name: "Azure", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { id: 4, name: "Jest", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
        { id: 5, name: "Cypress", image: "https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg" },
        { id: 6, name: "Selenium", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" }
      ],
      benefits: [
        "Cloud infrastructure setup",
        "Automated testing pipelines",
        "Load and performance testing",
        "Security testing",
        "Continuous integration"
      ]
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: <HiCog className="w-8 h-8 text-red-500" />,
      description: 'Streamline your development and operations with our comprehensive DevOps services.',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      technologies: [
        { id: 1, name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { id: 2, name: "Kubernetes", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { id: 3, name: "Jenkins", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { id: 4, name: "Terraform", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
        { id: 5, name: "Ansible", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
        { id: 6, name: "GitHub Actions", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
      ],
      benefits: [
        "CI/CD pipeline implementation",
        "Infrastructure as Code (IaC)",
        "Containerization strategies",
        "Monitoring and logging",
        "Automated deployment"
      ]
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Slider settings
  const sliderServices = [
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
                Our <span className="bg-gradient-to-r from-purple-400 to-pink-600 inline-block text-transparent bg-clip-text">Services</span>
              </motion.h1>
              <motion.p 
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-300 mb-8"
              >
                We offer comprehensive technology solutions to help businesses transform their digital presence and achieve their goals.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Slider Section */}
        <section className="w-full py-4 md:py-8 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-3xl font-bold text-center mb-8 md:mb-12"
            >
              Services we offer
            </motion.h2>
            
            <div className="relative py-4">
              <div className="max-w-6xl mx-auto">
                <Slider {...settings} className="services-slider">
                  {sliderServices.map((service, index) => (
                    <div key={service.id} className="px-1 md:px-3">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div 
                          className={`p-3 md:p-4 rounded-xl bg-[#1A1F2E] transition-all duration-300 h-[220px] md:h-[280px] ${
                            index === activeSlide 
                              ? 'border-2 border-purple-600 shadow-lg scale-[1.02] md:scale-105 z-10' 
                              : 'border border-gray-800 shadow-sm scale-100'
                          }`}
                        >
                          <motion.div 
                            className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                              index === activeSlide
                                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white'
                                : 'bg-gray-800 text-gray-400'
                            }`}>
                              <span className="text-lg md:text-xl">{service.icon}</span>
                            </div>
                            <h3 className={`text-sm md:text-lg font-semibold transition-colors duration-300 line-clamp-1 ${
                              index === activeSlide ? 'text-purple-400' : 'text-gray-300'
                            }`}>
                              {service.title}
                            </h3>
                          </motion.div>
                          <p className="text-xs md:text-sm text-gray-400 leading-relaxed line-clamp-5 md:line-clamp-4">
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
                  {sliderServices.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setActiveSlide(index)}
                      className={`transition-all duration-300 h-1 md:h-1.5 rounded-full bg-gray-700 ${
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
                  <span className="text-purple-400 font-medium">0{activeSlide + 1}</span>
                  <div className="w-4 md:w-6 h-[1px] bg-gray-700"></div>
                  <span className="text-gray-500">0{sliderServices.length}</span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-b from-[#1E2A4A]/80 to-[#0B0B0F]/90 rounded-xl overflow-hidden border border-purple-900/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
                  onClick={() => setActiveService(service.id === activeService ? null : service.id)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-[#2D3958]/30 mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <button className="flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                      <span>Learn more</span>
                      <FaArrowRight className="ml-2 w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Details */}
        {services.map((service) => (
          <motion.section
            key={service.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: activeService === service.id ? 1 : 0,
              height: activeService === service.id ? 'auto' : 0
            }}
            transition={{ duration: 0.5 }}
            className={`py-8 overflow-hidden ${activeService === service.id ? 'block' : 'hidden'}`}
          >
            <div className="container mx-auto px-4">
              <div className="bg-[#1A1F2E] rounded-xl p-8 border border-purple-900/20">
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                      {service.icon}
                      <span className="ml-3">{service.title}</span>
                    </h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <h4 className="text-lg font-semibold mb-4">Key Benefits</h4>
                    <ul className="space-y-2 mb-8">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={openContactModal}
                      className="px-6 py-3 bg-gradient-to-t from-indigo-950 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                    >
                      Get Started
                    </motion.button>
                  </div>
                  
                  <div className="md:w-1/2">
                    <h4 className="text-lg font-semibold mb-6">Technologies We Use</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {service.technologies.map((tech) => (
                        <div key={tech.id} className="bg-[#0B0F19] p-4 rounded-lg flex flex-col items-center">
                          <img 
                            src={tech.image} 
                            alt={tech.name} 
                            className="w-12 h-12 object-contain mb-3"
                          />
                          <p className="text-sm text-center text-gray-400">{tech.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        ))}

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-[#0F1525]">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
              <p className="text-gray-300">
                We follow a structured approach to deliver exceptional results for every project.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: "Discovery", description: "We start by understanding your business goals, target audience, and project requirements." },
                { step: 2, title: "Planning", description: "Our team creates a detailed roadmap with timelines, milestones, and resource allocation." },
                { step: 3, title: "Development", description: "We build your solution using the latest technologies and best practices." },
                { step: 4, title: "Delivery", description: "After thorough testing, we deploy your solution and provide ongoing support." }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#1A1A1F] p-6 rounded-lg border border-gray-800 hover:border-purple-600 transition-all duration-300 h-full"
                  >
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                  
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-0.5 bg-purple-600"></div>
                  )}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your digital presence?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your business goals. Our team is ready to bring your vision to life.
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

export default Services;