import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white backdrop-blur relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Interview-Ready Today</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of successful candidates who landed their dream jobs at top tech companies
        </p>
        <a href="https://pages.razorpay.com/placementgurantee49" target="_blank" rel="noopener noreferrer">
          <button className="bg-white text-blue-700 hover:bg-blue-50 text-lg font-medium py-3 px-8 rounded-md shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 animate-pulse-light backdrop-blur-sm">
            Buy Now for <span className="inline-flex items-center">
              <span className="line-through text-blue-400/70 text-base mr-1">₹99</span>
              <span className="font-bold text-blue-700">₹49</span>
            </span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
