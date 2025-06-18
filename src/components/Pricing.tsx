import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const benefits = [
    'Weekly updates with new questions',
    'Instant access to all content',
    'Detailed solutions and explanations',
    'Company-specific question filters',
    '30-day refund guarantee'
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Pricing Plans</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Affordable plans to help you land your dream job at top tech companies
        </p>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* One-Time Access Plan */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 transition-all hover:shadow-md">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">One-Time Access</h3>
              <div className="flex items-end mb-6">
                <div className="flex items-baseline">
                  <span className="text-gray-500 line-through text-xl mr-2">₹129</span>
                  <span className="text-4xl font-bold text-gray-900">₹79</span>
                </div>
                <span className="text-gray-600 ml-2">for 1 month</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <a href="https://rzp.io/rzp/A8pmWPLN" target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-md transition-colors">
                  <span className="flex justify-center items-center">
                    Buy Now for <span className="line-through text-gray-500 text-sm mx-1.5">₹129</span> <span className="font-semibold">₹79</span>
                  </span>
                </button>
              </a>
            </div>
          </div>
          
          {/* Monthly Plan */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-blue-500 transform hover:scale-105 transition-all relative">
            <div className="absolute top-0 right-0">
              <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                MOST POPULAR
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded-md shadow-sm transform rotate-12 border border-green-200">
              50% OFF
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Best Value</h3>
              <div className="flex items-end mb-6">
                <div className="flex items-baseline">
                  <span className="text-gray-500 line-through text-xl mr-2">₹99</span>
                  <span className="text-4xl font-bold text-blue-600">₹49</span>
                </div>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <a href="https://pages.razorpay.com/placementgurantee49" target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-md transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  <span className="flex justify-center items-center">
                    Buy Now for <span className="line-through text-blue-200 text-sm mx-1.5">₹99</span> <span className="font-bold">₹49</span>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
