// import React from 'react';
import { Check } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Placement Guarantee Interview Question Bank
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Handpicked and Verified Questions from Real Interviews at Google, Microsoft, Amazon, and More.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-10">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-gray-700">Updated Weekly with New Questions</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-gray-700">100% Verified by Candidates</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-gray-700">Refund If Not Satisfied</span>
            </div>
          </div>
          
          <a href="https://pages.razorpay.com/placementgurantee49" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-medium py-3 px-8 rounded-md shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 animate-pulse-light">
              Start Learning Now – <span className="inline-flex items-center">
                <span className="line-through text-blue-200 text-base mr-1">₹99</span>
                <span className="font-bold">₹49</span>
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Add smooth scroll behavior when clicking "Start Learning Now" button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector((e.currentTarget as HTMLAnchorElement).getAttribute('href') || '');
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
