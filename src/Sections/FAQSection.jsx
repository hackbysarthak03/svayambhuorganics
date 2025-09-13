import React, { useState } from 'react';

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl border border-gray-200 transition-all duration-300 hover:bg-opacity-10 ${
        isOpen ? 'shadow-2xl bg-opacity-10' : 'shadow-lg'
      }`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 text-left flex items-center justify-between group focus:outline-none"
      >
        <div className="flex items-center space-x-4">
          {/* Question */}
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-[#008236] transition-colors duration-200">
            {faq.question}
          </h3>
        </div>
        
        {/* Expand/Collapse Icon */}
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        </div>
      </button>
      
      {/* Answer Content */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-8 pb-6">
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              {faq.answer}
            </p>
          
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: "What is Ayurveda and how does it work?",
      answer: "Ayurveda is a 5,000-year-old system of natural healing from India. It works by identifying your unique body constitution (Prakriti) and current imbalances (Vikriti), then using personalized treatments including herbs, diet, lifestyle changes, and therapies to restore harmony between mind, body, and spirit. Unlike conventional medicine that treats symptoms, Ayurveda addresses root causes for lasting wellness.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 2,
      question: "Are Ayurvedic medicines safe and effective?",
      answer: "Yes, when prescribed by qualified practitioners, Ayurvedic medicines are safe and effective. Our formulations are prepared using authentic classical texts, high-quality organic ingredients, and modern quality control standards. We follow GMP guidelines and conduct thorough testing for purity and potency. However, it's important to consult with certified Ayurvedic doctors and inform them about any existing medications.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 3,
      question: "How long does it take to see results from Ayurvedic treatment?",
      answer: "Results vary depending on the condition, its chronicity, and individual constitution. Acute conditions may show improvement within days to weeks, while chronic conditions typically require 3-6 months of consistent treatment. Unlike quick-fix approaches, Ayurveda focuses on sustainable healing and long-term wellness. Many patients experience improved energy and well-being within the first few weeks of treatment.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      question: "Can Ayurvedic treatment be combined with modern medicine?",
      answer: "Yes, Ayurvedic treatment can often be safely combined with conventional medicine under proper medical supervision. This integrative approach can enhance healing outcomes and reduce side effects. However, it's crucial to inform both your Ayurvedic practitioner and conventional doctor about all treatments you're receiving to avoid potential interactions and ensure the most effective, safe treatment plan.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-white py-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
            <svg className="w-5 h-5 text-[#008236]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text- text-sm text-[#008236] font-medium">Got Questions?</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-[#008236]">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our Ayurvedic treatments and services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.id} faq={faq} index={index} />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <p className="text-[#008236] mb-6">Still have questions? We're here to help!</p>
          <button className="bg-[#008236] text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 cursor-pointer">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
