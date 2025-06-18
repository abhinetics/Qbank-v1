import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-[80px] sm:top-[40px] z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-xl text-gray-800">InterviewPrep</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
        </nav>
        
        <a href="https://pages.razorpay.com/placementgurantee49" target="_blank" rel="noopener noreferrer">
          <button className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2 px-6 rounded-md transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Get Started
          </button>
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a href="#features" className="py-2 text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#pricing" className="py-2 text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#faq" className="py-2 text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <a href="https://pages.razorpay.com/placementgurantee49" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors w-full">
                Get Started
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
