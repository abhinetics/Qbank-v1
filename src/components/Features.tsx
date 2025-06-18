import React from 'react';
import { BookOpen, Code, Database, Filter } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: '500+ Real Interview Questions',
      description: 'Comprehensive collection of verified questions from actual interviews, updated weekly with new content.'
    },
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: 'Complete with Solutions',
      description: 'Detailed explanations and optimal solutions for every question to help you master the concepts.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'Diverse Topics Covered',
      description: 'From Data Structures and Algorithms to System Design and Logic Puzzles - everything you need to prepare.'
    },
    {
      icon: <Filter className="h-8 w-8 text-blue-600" />,
      title: 'Company-Specific Filters',
      description: 'Focus your preparation by filtering questions specific to companies like Amazon, Google, Microsoft, and more.'
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">What You Get</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Everything you need to ace your technical interviews at top tech companies
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover-glow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
