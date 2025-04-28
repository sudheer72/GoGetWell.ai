import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems: FAQItem[] = [
    {
      question: "How does the AI health assistant work?",
      answer: "Our AI health assistant uses natural language processing and machine learning algorithms trained on medical data to understand your health questions and provide personalized responses. It can help identify potential issues based on symptoms, provide general health information, and remind you about medications and appointments."
    },
    {
      question: "Is my health data secure on GoGetWell.ai?",
      answer: "Yes, we take data security very seriously. GoGetWell.ai is fully HIPAA-compliant and employs end-to-end encryption for all your health data. We use bank-level security protocols, regular security audits, and strict access controls to ensure your information remains private and protected."
    },
    {
      question: "Can GoGetWell.ai connect with my healthcare providers?",
      answer: "Yes, GoGetWell.ai can securely connect with healthcare providers who are part of our network. This allows for seamless sharing of health data, test results, and appointment scheduling with your permission. The Professional and Enterprise plans include full provider connectivity features."
    },
    {
      question: "How accurate are the AI health assessments?",
      answer: "Our AI health assessments are designed to be highly accurate and are continuously improved based on the latest medical research. However, they are meant to supplement, not replace, professional medical advice. Always consult with healthcare professionals for diagnosis and treatment decisions."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll continue to have access to your plan's features until the end of your current billing period. We don't offer refunds for partial subscription periods."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all new users. During this period, you can access all features of the Professional plan to determine if GoGetWell.ai is right for you. No credit card is required to start your free trial."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-teal-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about GoGetWell.ai
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'ring-2 ring-teal-500' : ''
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-medium text-gray-900">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-teal-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`px-6 pb-5 transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Still have questions? We're here to help.
          </p>
          <a 
            href="#contact" 
            className="text-teal-600 font-medium hover:text-teal-700 transition-colors duration-300"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;