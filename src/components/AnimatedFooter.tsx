
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone,
  HelpCircle,
  FileText
} from 'lucide-react';

const AnimatedFooter = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];
  
  const quickLinks = [
    { icon: Mail, href: "/contact", label: "Contact Us" },
    { icon: HelpCircle, href: "/faq", label: "FAQs" },
    { icon: FileText, href: "/terms", label: "Terms & Privacy Policy" },
  ];
  
  // Staggered animation for links
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-bumblebee-yellow text-bumblebee-black relative overflow-hidden">
      {/* Honeycomb SVG separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ 
            fill: '#1A1A1A', 
            width: '100%', 
            height: '50px',
            transform: 'rotate(180deg)',
            display: 'block',
          }}
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <svg 
                  className="w-10 h-10 text-bumblebee-brown animate-float-bee" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M8 16s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01M12 8c0-2.2-1.8-4-4-4H5a8 8 0 0 0 4 15h6a8 8 0 0 0 4-15h-3c-2.2 0-4 1.8-4 4" />
                </svg>
                <h3 className="text-2xl font-bold text-bumblebee-black font-playfair">Aahara</h3>
              </div>
              <p className="text-bumblebee-brown mb-6">
                Bridging Hunger and Hope through a unified platform for rescuing surplus food and distributing it to those in need.
              </p>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex space-x-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-bumblebee-brown text-bumblebee-cream flex items-center justify-center transition-colors duration-300 hover:bg-bumblebee-black"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <div>
            <motion.h3 
              className="text-xl font-bold mb-6 font-playfair"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Quick Links
            </motion.h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3"
            >
              {quickLinks.map((link, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Link 
                    to={link.href} 
                    className="flex items-center gap-2 text-bumblebee-brown hover:text-bumblebee-black transition-colors duration-200"
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div>
            <motion.h3 
              className="text-xl font-bold mb-6 font-playfair"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Contact
            </motion.h3>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 text-bumblebee-brown" />
                <div>
                  <p className="text-bumblebee-brown">Email</p>
                  <p className="text-bumblebee-black font-medium">info@aahara.org</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 text-bumblebee-brown" />
                <div>
                  <p className="text-bumblebee-brown">Phone</p>
                  <p className="text-bumblebee-black font-medium">+1 (555) 123-4567</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <div>
            <motion.h3 
              className="text-xl font-bold mb-6 font-playfair"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Newsletter
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-bumblebee-brown mb-4">
                Stay updated with our latest news and initiatives.
              </p>
              
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-lg flex-grow bg-white/80 border-none focus:outline-none focus:ring-2 focus:ring-bumblebee-orange"
                />
                <button className="bg-bumblebee-orange text-white px-4 py-2 rounded-r-lg hover:bg-bumblebee-black transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="mt-12 pt-6 border-t border-bumblebee-brown/20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>&copy; {currentYear} Aahara. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default AnimatedFooter;
