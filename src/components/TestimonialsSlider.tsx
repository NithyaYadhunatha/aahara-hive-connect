
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
};

const Testimonial = ({ quote, name, role }: TestimonialProps) => (
  <Card className="bg-white/5 backdrop-blur-sm border-bumblebee-cream/10">
    <CardContent className="p-6">
      <Quote className="w-8 h-8 text-bumblebee-yellow mb-4 opacity-50" />
      <p className="text-lg mb-6 text-bumblebee-cream/90">{quote}</p>
      <div>
        <p className="font-semibold text-bumblebee-yellow">{name}</p>
        <p className="text-sm text-bumblebee-cream/60">{role}</p>
      </div>
    </CardContent>
  </Card>
);

const TestimonialsSlider = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const testimonials = [
    {
      quote: "As a restaurant owner, I've been able to reduce our food waste by over 70% while helping those in need. The Aahara platform makes the entire process seamless.",
      name: "Priya Sharma",
      role: "Restaurant Owner & Food Donor"
    },
    {
      quote: "I'm proud to be part of Aahara's volunteer network. Being the bridge between food surplus and hungry people gives me purpose every day.",
      name: "Raj Malhotra",
      role: "Volunteer Driver"
    },
    {
      quote: "Our shelter now receives regular, quality meals thanks to Aahara. Their system ensures we get the food we need when we need it most.",
      name: "Deepak Patel",
      role: "NGO Coordinator"
    },
    {
      quote: "The AI matching system is revolutionary! It optimizes based on location, quantity, and timing - ensuring food is fresh when it reaches those in need.",
      name: "Anita Desai",
      role: "Tech Volunteer"
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20 px-6 bg-gradient-to-b from-bumblebee-black to-bumblebee-brown/90 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-honeycomb-pattern opacity-5 z-0" />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bumblebee-cream mb-4 font-playfair">What People Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bumblebee-yellow to-bumblebee-orange mx-auto rounded-full" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <Testimonial
                      quote={testimonial.quote}
                      name={testimonial.name}
                      role={testimonial.role}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static mr-2 bg-bumblebee-black/50 text-bumblebee-yellow border-bumblebee-yellow/30 hover:bg-bumblebee-yellow hover:text-bumblebee-black" />
              <CarouselNext className="relative static ml-2 bg-bumblebee-black/50 text-bumblebee-yellow border-bumblebee-yellow/30 hover:bg-bumblebee-yellow hover:text-bumblebee-black" />
            </div>
          </Carousel>
        </motion.div>
      </div>
      
      {/* Subtle bee trail */}
      <motion.div
        className="absolute bottom-0 left-0 w-full"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg viewBox="0 0 1200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,15 Q300,0 600,15 T1200,15"
            stroke="#F4C542"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
          <circle cx="1160" cy="15" r="5" fill="#F4C542" />
          <circle cx="1175" cy="10" r="3" fill="#F4C542" />
          <circle cx="1185" cy="15" r="2" fill="#F4C542" />
        </svg>
      </motion.div>
    </section>
  );
};

export default TestimonialsSlider;
