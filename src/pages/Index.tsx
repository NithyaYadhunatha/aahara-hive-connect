
import AnimatedHeader from '@/components/AnimatedHeader';
import AnimatedHero from '@/components/AnimatedHero';
import AnimatedFeatures from '@/components/AnimatedFeatures';
import AnimatedStats from '@/components/AnimatedStats';
import HowItWorks from '@/components/HowItWorks';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import AnimatedFooter from '@/components/AnimatedFooter';
import { motion } from 'framer-motion';

const Index = () => {
  const beePositions = [
    { x: [0, 300, 0], y: [0, 50, 0], duration: 15 },
    { x: [300, 0, 300], y: [50, 100, 50], duration: 18 },
    { x: [0, 200, 0], y: [150, 200, 150], duration: 20 }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        {beePositions.map((position, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl opacity-30"
            animate={{
              x: position.x,
              y: position.y
            }}
            transition={{
              duration: position.duration,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${index * 20}%`,
              top: `${index * 15}%`
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
        ))}
      </div>
      <AnimatedHero />
      <AnimatedFeatures />
      <AnimatedStats />
      <HowItWorks />
      <TestimonialsSlider />
    </div>
  );
};

export default Index;
