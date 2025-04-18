
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Users, 
  Download, 
  Clipboard, 
  Lock 
} from 'lucide-react';

const AnimatedHero = () => {
  const ctaButtons = [
    { name: 'Donate Food', href: '/donate', icon: DollarSign, delay: 0.1 },
    { name: 'Request Food', href: '/request', icon: Download, delay: 0.2 },
    { name: 'Join as Volunteer', href: '/volunteer', icon: Users, delay: 0.3 },
    { name: 'NGO Registration', href: '/ngo', icon: Clipboard, delay: 0.4 },
    { name: 'Admin Login', href: '/admin', icon: Lock, delay: 0.5 },
  ];

  const beePath = [
    { x: 100, y: 50, rotate: 10 },
    { x: 200, y: 100, rotate: -5 },
    { x: 300, y: 150, rotate: 15 },
    { x: 400, y: 100, rotate: -10 },
    { x: 500, y: 50, rotate: 5 },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-bumblebee-black via-bumblebee-black to-bumblebee-brown/90">
      <motion.div
        className="absolute text-3xl opacity-50 z-0"
        initial={{ x: 0, y: 0, rotate: 0 }}
        animate={{ 
          x: beePath.map(p => p.x), 
          y: beePath.map(p => p.y),
          rotate: beePath.map(p => p.rotate)
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          repeatType: "reverse", 
          ease: "easeInOut" 
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-bumblebee-yellow"
        >
          <path d="M8 16s1.5-2 4-2 4 2 4 2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
          <path d="M12 8c0-2.2-1.8-4-4-4H5a8 8 0 0 0 4 15h6a8 8 0 0 0 4-15h-3c-2.2 0-4 1.8-4 4"/>
        </svg>
      </motion.div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-bumblebee-cream mb-4 font-playfair leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Aahara – Bridging Hunger and Hope
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-3xl font-medium text-bumblebee-yellow mb-6 font-playfair"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where every surplus meal becomes someone's lifeline.
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-bumblebee-cream/90 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Join a real-time food rescue network powered by AI, volunteers, and you.
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {ctaButtons.map((button, index) => (
              <motion.div
                key={button.name}
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: button.delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={button.href}
                  className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-bumblebee-yellow to-bumblebee-orange text-bumblebee-black font-semibold py-3 px-4 rounded-lg shadow-lg shadow-bumblebee-orange/20 hover:shadow-bumblebee-orange/40 transition-all duration-300"
                >
                  <button.icon className="text-2xl mb-1 w-6 h-6" />
                  <span>{button.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-bumblebee-brown/40 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-honeycomb-pattern opacity-10 z-0" />
      </div>
    </section>
  );
};

export default AnimatedHero;
