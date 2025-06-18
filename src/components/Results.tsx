import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Award, Briefcase, CircleCheck } from 'lucide-react';

interface CounterProps {
  end: number;
  label: string;
  icon: React.ReactNode;
  accentColor: string;
  inView: boolean;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, label, icon, accentColor, inView, duration = 2 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
    
    let startTime: number;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, inView, duration]);
  
  const formattedCount = count.toLocaleString();
  
  return (
    <motion.div 
      className="flex flex-col items-center p-6 transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className={`text-${accentColor}-500 mb-3`}>
        {icon}
      </div>
      <div className={`text-4xl md:text-5xl font-bold mb-2 text-${accentColor}-600`}>
        {formattedCount}
      </div>
      <div className="text-gray-600 text-center font-medium">
        {label}
      </div>
    </motion.div>
  );
};

const Results = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });
  
  const counters = [
    { 
      end: 779, 
      label: "Students Successfully Placed", 
      icon: <CircleCheck className="h-10 w-10" />, 
      accentColor: "green" 
    },
    { 
      end: 2675, 
      label: "Internships Secured by Our Users", 
      icon: <Briefcase className="h-10 w-10" />, 
      accentColor: "blue" 
    },
    { 
      end: 546, 
      label: "Students with 8+ LPA Packages", 
      icon: <Award className="h-10 w-10" />, 
      accentColor: "amber" 
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ duration: 0.5 }}
        >
          Our Results Speak for Themselves
        </motion.h2>
        
        <motion.p 
          className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join thousands of students preparing smarter with our curated, verified interview bank — updated weekly.
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {counters.map((counter, index) => (
            <Counter 
              key={index}
              end={counter.end}
              label={counter.label}
              icon={counter.icon}
              accentColor={counter.accentColor}
              inView={inView}
              duration={2 + index * 0.2} // Stagger the animation durations
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
