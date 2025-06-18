import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  image: string;
  emailPreview: string;
  quote: string;
}

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "Google",
      companyLogo: "https://cdn.cdnlogo.com/logos/g/35/google-icon.svg",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      emailPreview: "Congratulations! We are pleased to offer you the position of Software Engineer at Google...",
      quote: "The question bank had the exact problems I was asked in my Google interview. The detailed solutions helped me understand the approach and thought process needed to solve them efficiently."
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Frontend Developer",
      company: "Microsoft",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/150px-Microsoft_logo.svg.png",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      emailPreview: "We are excited to welcome you to Microsoft! Your candidacy was impressive and we're thrilled to offer you...",
      quote: "After 3 failed attempts at Microsoft, this question bank was a game-changer. The company-specific filters helped me focus on exactly what I needed to practice. Worth every penny!"
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "Product Manager",
      company: "Amazon",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      emailPreview: "Congratulations on your offer! We're pleased to welcome you to the Amazon team as a Product Manager...",
      quote: "The breadth of questions in this bank is impressive. It covered both technical and behavioral aspects which was crucial for my Amazon PM interview. I received my offer just 2 weeks after starting my prep!"
    }
  ];

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ duration: 0.5 }}
        >
          Success Stories
        </motion.h2>
        <motion.p 
          className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our question bank has helped thousands of candidates land their dream jobs at top tech companies
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all h-full flex flex-col hover-lift self-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: inView ? 1 : 0, 
                y: inView ? 0 : 30 
              }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 + (index * 0.1) 
              }}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Email Preview */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
                  <div className="flex items-center mb-2">
                    <img 
                      src={testimonial.companyLogo} 
                      alt={`${testimonial.company} logo`} 
                      className="h-5 mr-2" 
                    />
                    <div className="text-sm font-medium text-gray-900">Offer from {testimonial.company}</div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold">Subject:</span> {testimonial.emailPreview}
                  </p>
                </div>
                
                {/* Testimonial Content */}
                <div className="flex items-start mb-4">
                  <Quote className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 italic">{testimonial.quote}</p>
                </div>
                
                {/* Author Info */}
                <div className="flex items-center mt-auto pt-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover mr-4 border-2 border-blue-500" 
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
