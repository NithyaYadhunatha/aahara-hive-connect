
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const AnimatedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Donate Food', href: '/donate' },
    { name: 'Request Food', href: '/request' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'NGO', href: '/ngo' },
    { name: 'Admin', href: '/admin' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-bumblebee-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-2">
              <svg 
                className="w-8 h-8 text-bumblebee-yellow animate-float-bee" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M8 16s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01M12 8c0-2.2-1.8-4-4-4H5a8 8 0 0 0 4 15h6a8 8 0 0 0 4-15h-3c-2.2 0-4 1.8-4 4" />
              </svg>
              <span className="text-2xl font-bold text-bumblebee-cream font-playfair">Aahara</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`hover:text-bumblebee-yellow transition-colors duration-200 text-bumblebee-cream relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-bumblebee-yellow after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:after:origin-bottom-left`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                to="/join"
                className="bg-gradient-to-r from-bumblebee-yellow to-bumblebee-orange text-bumblebee-black font-semibold py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-bumblebee-yellow/30 transition-all duration-300 transform hover:scale-105"
              >
                Join the Movement
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-bumblebee-cream hover:text-bumblebee-yellow transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4 space-y-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-bumblebee-cream hover:text-bumblebee-yellow transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/join"
              className="block w-full text-center bg-gradient-to-r from-bumblebee-yellow to-bumblebee-orange text-bumblebee-black font-semibold py-2 px-4 rounded-lg mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Join the Movement
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default AnimatedHeader;
