import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FAQ = () => {
  const faqs = [
    {
      question: 'How often is the content updated?',
      answer: 'We add new verified interview questions every week. Our team is constantly collecting feedback from recent interviewees to keep our question bank current and relevant.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. If you cancel, you\'ll still have access until the end of your current billing period.'
    },
    {
      question: 'Is this based on real questions?',
      answer: 'Absolutely! Every question in our bank is verified from real interviews at top tech companies. We collect these questions from successful candidates who have gone through the interview process.'
    },
    {
      question: 'Do I get a refund if I\'m not satisfied?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not completely satisfied with our interview question bank, simply reach out to our support team for a full refund.'
    },
    {
      question: 'How do company-specific filters work?',
      answer: 'Our platform allows you to filter questions by company (e.g., Google, Amazon, Microsoft). This helps you focus your preparation on the specific types of questions asked by your target companies.'
    },
    {
      question: 'Can I access the question bank on mobile devices?',
      answer: 'Yes, our platform is fully responsive and works seamlessly on desktop, tablet, and mobile devices, allowing you to prepare for interviews anywhere, anytime.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="faq" className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p 
          className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Everything you need to know about our interview question bank
        </motion.p>
        
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="py-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: inView ? 1 : 0, 
                y: inView ? 0 : 20 
              }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 + (index * 0.1) 
              }}
            >
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-3 text-gray-600 pr-12 transition-all">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
