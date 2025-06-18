import React, { useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import SuccessTicker from './components/SuccessTicker';
import Features from './components/Features';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PromotionBanner from './components/PromotionBanner';

const App = () => {
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="font-[Inter] text-gray-800 antialiased pt-[60px] sm:pt-10">
      <PromotionBanner />
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <SuccessTicker />
        <Features />
        <Results />
        <Testimonials />
        <Pricing />
        <CallToAction />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
