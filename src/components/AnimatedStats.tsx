import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Utensils, 
  Users, 
  Building, 
  MapPin 
} from 'lucide-react';

type CounterProps = {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  title: string;
  icon: string;
  inView: boolean;
};

const Counter = ({ 
  end, 
  duration = 2, 
  delay = 0,
  prefix = '',
  suffix = '',
  title,
  icon,
  inView
}: CounterProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / (duration * 1000), 1);
      
      setCount(Math.floor(progressPercentage * end));
      
      if (progressPercentage < 1) {
        animationFrame = requestAnimationFrame(startAnimation);
      }
    };
    
    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(startAnimation);
    }, delay * 1000);
    
    return () => {
      clearTimeout(timer);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, delay, inView]);
  
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-5xl mb-2 text-bumblebee-yellow font-bold">{icon}</div>
      <div className="text-4xl font-bold text-bumblebee-orange mb-2 font-playfair">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-bumblebee-cream/80">{title}</p>
    </motion.div>
  );
};

const AnimatedStats = () => {
  const stats = [
    { icon: Utensils, value: 150000, title: 'Meals Delivered' },
    { icon: Users, value: 500, title: 'Active Volunteers' },
    { icon: Building, value: 50, title: 'Partner NGOs' },
    { icon: MapPin, value: 25, title: 'Cities Covered' },
  ];
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  return (
    <section 
      ref={sectionRef} 
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #DFAF2B 0%, #F0A202 100%)`,
      }}
    >
      <div className="absolute inset-0 bg-honeycomb-pattern opacity-10 z-0" />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bumblebee-black mb-4 font-playfair">Our Impact</h2>
          <div className="w-24 h-1 bg-bumblebee-cream mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Counter
              key={index}
              end={stat.value}
              delay={index * 0.2}
              title={stat.title}
              icon={<stat.icon className="text-5xl text-bumblebee-yellow" />}
              inView={isInView}
            />
          ))}
        </div>
      </div>
      
      <motion.div
        className="absolute -bottom-4 left-0 w-full h-8"
        style={{
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%231A1A1A'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
};

export default AnimatedStats;
