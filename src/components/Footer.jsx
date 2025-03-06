import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const links = [
    {
      title: "Links",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "How it works", href: "/how-it-works" },
        { name: "Areas We Serve", href: "/areas" },
      ],
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaLinkedin, href: "#" },
  ];

  return (
    <footer className="bg-[#0B0B0F] text-white py-8">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="flex items-center mb-4">
              <img src="/images/logo.png" alt="NextCod.ing" className="h-6 md:h-8" />
            </div>
            <p className="text-gray-400 text-sm md:text-base mb-6">
              NextCod.ing provides exceptional tech support and development solutions.
            </p>
            <img src="/images/google.png" alt="Google Rating" className="h-10 md:h-12" />
          </motion.div>

          {/* Links */}
          {links.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-base md:text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm md:text-base">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-base md:text-lg font-semibold mb-4">Contact us</h3>
            <div className="space-y-2 text-gray-400 text-sm md:text-base">
              <p>18/786, Bhone Mal,</p>
              <p>Ichalkaranji- 416115</p>
              <p>Kolhapur MH.</p>
              <p className="mt-4">+917448241009</p>
              <p>+91000000000</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800 ">
          <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-col items-center md:flex-row md:justify-between">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0 text-center"
            >
              2024 Copyright by NextCod.ing (Skyvent.TOP). All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;