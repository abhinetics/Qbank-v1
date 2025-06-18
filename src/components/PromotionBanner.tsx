import React, { useState, useEffect } from 'react';
import { Clock, X } from 'lucide-react';
import { motion } from 'framer-motion';

const PromotionBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 2,
    minutes: 42,
    seconds: 0
  });
  
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                clearInterval(timer);
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  if (dismissed) return null;

  return (
    <motion.div 
      className="fixed top-0 w-full bg-gradient-to-r from-rose-600 to-orange-500 text-white py-2 sm:py-2.5 px-4 shadow-md z-40 min-h-[60px] sm:min-h-0 flex items-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-8">
          {/* Empty space to balance the close button */}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-x-2 gap-y-1 text-center px-4 py-1.5 sm:py-0 leading-tight">
          <span className="inline-flex items-center">
            <span className="text-yellow-100">🔥</span>
            <span className="font-semibold ml-1.5">Sale Live!</span>
          </span>
          
          <span className="hidden sm:inline mx-1">|</span>
          
          <span className="text-sm sm:text-base">
            Get Access at <span className="text-gray-200 line-through text-xs sm:text-sm mr-1">₹99</span>
            <span className="font-bold text-yellow-100">₹49</span>/month 
          </span>
          
          
          <span className="hidden sm:inline mx-1">|</span>
          
          <div className="flex items-center text-sm">
            <Clock className="h-3.5 w-3.5 mr-1.5 text-yellow-100" />
            <span>
              Offer ends in: <span className="font-semibold">{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
            </span>
          </div>
        </div>
        
        <button 
          onClick={() => setDismissed(true)}
          className="text-white opacity-70 hover:opacity-100 transition-opacity focus:outline-none"
          aria-label="Close promotion banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default PromotionBanner;
