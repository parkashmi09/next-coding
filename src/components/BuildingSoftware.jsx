import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BuildingSoftware = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real application, this would be an API call
        const response = await fetch('/src/data/buildingSoftwareData.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-[#0B0B0F] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold mb-2"
          >
            {data.sections[0].title}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold"
          >
            {data.sections[0].subtitle}
          </motion.h3>
        </div>

        {/* Features */}
        <div className="space-y-24">
          {data.sections[0].features.map((feature) => (
            <div key={feature.id} className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className={feature.imagePosition === 'right' ? 'order-1 md:order-1' : 'order-1 md:order-2'}>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl md:text-3xl font-bold mb-4"
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-300 mb-6"
                >
                  {feature.description}
                </motion.p>
                {feature.highlightText && (
                  <p className="mb-6">
                    <a href={feature.highlightLink} className="text-[#E31B6D] hover:underline">
                      {feature.highlightText}
                    </a>
                    {' '}{feature.additionalText}
                  </p>
                )}
                {/* Testimonial */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="border-l-2 border-[#E31B6D] pl-4"
                >
                  <p className="text-[#E31B6D] italic mb-4">"{feature.testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={feature.testimonial.image} 
                      alt={feature.testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{feature.testimonial.author}</p>
                      <p className="text-sm text-gray-400">
                        {feature.testimonial.role}
                        {feature.testimonial.organization && `, ${feature.testimonial.organization}`}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Image */}
              <div className={feature.imagePosition === 'right' ? 'order-2 md:order-2' : 'order-2 md:order-1'}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#E31B6D]/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="relative rounded-2xl w-full h-[300px] md:h-[400px] object-cover"
                  />
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-[#E31B6D] rounded-full"></div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-purple-500 rounded-full"></div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildingSoftware;
