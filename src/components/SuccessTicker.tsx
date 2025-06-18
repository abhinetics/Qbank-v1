import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const SuccessTicker = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const successStories = [
    { 
      name: "Raghav Sharma", 
      company: "LinkedIn", 
      role: "Software Engineer", 
      highlight: "12 LPA" 
    },
    { 
      name: "Mohini Patel", 
      company: "Amazon", 
      role: "SDE-1", 
      highlight: "18 LPA" 
    },
    { 
      name: "Amit Kumar", 
      company: "Microsoft", 
      role: "Software Developer", 
      highlight: "21 LPA" 
    },
    { 
      name: "Tanisha Singh", 
      company: "Adobe", 
      role: "Intern", 
      highlight: "6 LPA" 
    },
    { 
      name: "Karan Mehta", 
      company: "Flipkart", 
      role: "Software Engineer", 
      highlight: "15 LPA" 
    },
    { 
      name: "Simran Kaur", 
      company: "Google", 
      role: "Software Intern", 
      highlight: "8 LPA" 
    },
    { 
      name: "Ankit Verma", 
      company: "LinkedIn", 
      role: "SDE Program", 
      highlight: "16 LPA" 
    },
    { 
      name: "Nisha Gupta", 
      company: "Apple", 
      role: "iOS Developer", 
      highlight: "25 LPA" 
    },
    { 
      name: "Ishaan Malhotra", 
      company: "Atlassian", 
      role: "Backend Engineer", 
      highlight: "17 LPA" 
    },
    { 
      name: "Sneha Kapoor", 
      company: "Paytm", 
      role: "Backend Engineer", 
      highlight: "14 LPA" 
    }
  ];
  
  // Company brand colors - professionally adjusted to match their brand
  const companyColors: { [key: string]: string } = {
    LinkedIn: 'text-blue-600',
    Amazon: 'text-amber-500',
    Microsoft: 'text-blue-500',
    Adobe: 'text-red-600',
    Flipkart: 'text-yellow-500',
    Google: 'text-green-500',
    Apple: 'text-gray-500',
    Atlassian: 'text-blue-400',
    Paytm: 'text-indigo-500'
  };
  
  // Triple the items for seamless looping
  const duplicatedStories = [...successStories, ...successStories, ...successStories];
  
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden py-3.5 relative shadow-lg border-y border-blue-700">
      <div className="relative">
        <div className="flex items-center">
          <div className="hidden md:flex items-center mr-6 flex-shrink-0 z-10 ml-4">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse flex items-center shadow-md">
              <TrendingUp className="h-3.5 w-3.5 mr-1" /> 
              <span>Recent Placements</span>
            </div>
          </div>
          
          <div className="overflow-hidden w-full">
            <motion.div 
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-33.333%"] }}
              transition={{ 
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15, // Faster animation (15 seconds instead of 30)
                  ease: "linear",
                  repeatDelay: 0
                }
              }}
            >
              {duplicatedStories.map((story, index) => (
                <div key={index} className="inline-flex items-center mx-5 text-white">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-medium text-blue-50">{story.name}</span>
                    <span className="text-blue-200 text-opacity-80">placed at</span>
                    <span className={`font-bold ${companyColors[story.company] || 'text-blue-300'}`}>
                      {story.company}
                    </span>
                    <span className="text-blue-200 text-opacity-80">as</span>
                    <span className="font-medium text-blue-50">{story.role}</span>
                    {story.highlight && (
                      <span className="ml-1 bg-gradient-to-r from-yellow-400 to-amber-400 text-blue-900 text-xs px-2.5 py-0.5 rounded-full font-bold shadow-sm">
                        {story.highlight}
                      </span>
                    )}
                    <span className="text-blue-300 mx-2">•</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Add a subtle gradient fade effect on the edges */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-blue-900 to-transparent z-[1]"></div>
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-blue-900 to-transparent z-[1]"></div>
        </div>
      </div>
    </div>
  );
};

export default SuccessTicker;
