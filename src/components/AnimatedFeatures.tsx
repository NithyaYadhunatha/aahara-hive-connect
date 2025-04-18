
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Clock, Truck, Shield } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
};

const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-lg border border-bumblebee-cream/10 p-6 shadow-xl hover:shadow-2xl hover:shadow-bumblebee-yellow/10 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="bg-gradient-to-br from-bumblebee-yellow to-bumblebee-orange p-3 rounded-full mb-4 shadow-lg">
          <Icon className="w-8 h-8 text-bumblebee-black" />
        </div>
        <h3 className="text-xl font-semibold text-bumblebee-yellow mb-3 font-playfair">{title}</h3>
        <p className="text-bumblebee-cream/80">{description}</p>
      </div>
    </motion.div>
  );
};

const AnimatedFeatures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const features = [
    {
      icon: Phone,
      title: "AI-Powered Request System",
      description: "Easily request or donate food through our smart AI system that works with calls and SMS messages.",
    },
    {
      icon: Clock,
      title: "Real-Time Matching",
      description: "Our system instantly matches surplus food with those in need, reducing waste and maximizing impact.",
    },
    {
      icon: Truck,
      title: "Volunteer Network",
      description: "A committed community of volunteers ensures timely delivery from donors to recipients.",
    },
    {
      icon: Shield,
      title: "Transparent Coordination",
      description: "Clear tracking and management between NGOs, volunteers, donors, and administrators.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-bumblebee-brown/90 to-bumblebee-black relative overflow-hidden">
      <div className="absolute inset-0 bg-honeycomb-pattern opacity-5 z-0" />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bumblebee-cream mb-4 font-playfair">Key Features</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bumblebee-yellow to-bumblebee-orange mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedFeatures;
