
import { useEffect } from 'react';
import AnimatedHeader from '@/components/AnimatedHeader';
import AnimatedHero from '@/components/AnimatedHero';
import AnimatedFeatures from '@/components/AnimatedFeatures';
import AnimatedStats from '@/components/AnimatedStats';
import HowItWorks from '@/components/HowItWorks';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import AnimatedFooter from '@/components/AnimatedFooter';

// For cursor trail effect
const createCursorTrail = (e: MouseEvent) => {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  document.body.appendChild(trail);
  
  setTimeout(() => {
    trail.style.opacity = '0';
    setTimeout(() => {
      if (trail.parentNode === document.body) {
        document.body.removeChild(trail);
      }
    }, 300);
  }, 500);
};

const Index = () => {
  useEffect(() => {
    // Add cursor trail effect
    window.addEventListener('mousemove', createCursorTrail);
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', createCursorTrail);
      // Remove any remaining trails
      document.querySelectorAll('.cursor-trail').forEach(el => {
        if (el.parentNode === document.body) {
          document.body.removeChild(el);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <AnimatedHeader />
      <AnimatedHero />
      <AnimatedFeatures />
      <AnimatedStats />
      <HowItWorks />
      <TestimonialsSlider />
      <AnimatedFooter />
    </div>
  );
};

export default Index;
