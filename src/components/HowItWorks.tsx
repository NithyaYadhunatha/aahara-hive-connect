
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Utensils, 
  Brain, 
  Bike, 
  ShoppingBag
} from 'lucide-react';

type StepProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  totalSteps: number;
};

const Step = ({ icon: Icon, title, description, index, totalSteps }: StepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stepRef, { once: true, amount: 0.5 });
  
  const isLastStep = index === totalSteps - 1;
  
  return (
    <div ref={stepRef} className="flex items-start relative">
      <motion.div
        className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-bumblebee-yellow to-bumblebee-orange flex items-center justify-center z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <Icon className="w-6 h-6 text-bumblebee-black" />
      </motion.div>
      
      {!isLastStep && (
        <motion.div 
          className="absolute top-12 left-6 h-full w-0.5 bg-bumblebee-yellow/30 -z-0"
          initial={{ height: 0, opacity: 0 }}
          animate={isInView ? { height: '80%', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
        />
      )}
      
      <motion.div 
        className="ml-6 pb-12"
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
      >
        <h3 className="text-xl font-semibold text-bumblebee-yellow mb-2 font-playfair">{title}</h3>
        <p className="text-bumblebee-cream/80">{description}</p>
      </motion.div>
    </div>
  );
};

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const steps = [
    {
      icon: Utensils,
      title: "Donors Register Surplus",
      description: "Restaurants, caterers, and individuals register their surplus food through our platform or by calling our helpline.",
    },
    {
      icon: Brain,
      title: "AI Matches with Requests",
      description: "Our intelligent system quickly matches surplus food with the closest requests, optimizing for freshness and need.",
    },
    {
      icon: Bike,
      title: "Volunteers Deliver Meals",
      description: "Our network of volunteers pick up the food and deliver it to individuals or organizations in need.",
    },
    {
      icon: ShoppingBag,
      title: "Receivers Get Food",
      description: "Those in need receive fresh, quality food that would otherwise go to waste, closing the food security loop.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-bumblebee-black relative overflow-hidden">
      <div className="absolute inset-0 bg-honeycomb-pattern opacity-5 z-0" />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bumblebee-cream mb-4 font-playfair">How It Works</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bumblebee-yellow to-bumblebee-orange mx-auto rounded-full" />
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              index={index}
              totalSteps={steps.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
