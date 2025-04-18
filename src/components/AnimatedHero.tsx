import { useState, useEffect, useRef } from 'react';
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
  const beeTrailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!beeTrailRef.current) return;
      
      const trail = document.createElement('div');
      trail.className = 'cursor-trail animate-bee-trail';
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      
      beeTrailRef.current.appendChild(trail);
      
      setTimeout(() => {
        if (trail && beeTrailRef.current?.contains(trail)) {
          beeTrailRef.current.removeChild(trail);
        }
      }, 1500);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
      <div ref={beeTrailRef} className="absolute inset-0 pointer-events-none" />
      
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
        🐝
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
