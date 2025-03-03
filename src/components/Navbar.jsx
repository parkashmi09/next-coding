import logo from '../assets/images/logo.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About us" },
    // { href: "/contact-us", label: "Contact US" },
    // { href: "/blog", label: "Blog" },
    { href: "/how-it-works", label: "How it Works" },
    // { href: "/hire", label: "Hire" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-4 bg-white fixed top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <Link to="/">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src={logo} 
                alt="NextCod.ing" 
                className="h-8" 
              />
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              >
                <Link 
                  to={link.href}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact Button */}
          <motion.button 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="hidden md:block px-6 py-2 bg-gradient-to-t from-indigo-950 to-indigo-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Contact us
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="md:hidden text-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 