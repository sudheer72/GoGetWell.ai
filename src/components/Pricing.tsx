import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Switch } from '@headlessui/react';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  buttonText: string;
  highlighted: boolean;
}

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans: PricingPlan[] = [
    {
      name: "Basic",
      price: isAnnual ? "$9.99" : "$14.99",
      description: "Essential health tracking for individuals",
      features: [
        { name: "AI Health Assistant", included: true },
        { name: "Basic Health Tracking", included: true },
        { name: "Secure Health Records", included: true },
        { name: "Email Support", included: true },
        { name: "Personalized Insights", included: false },
        { name: "Provider Connectivity", included: false },
        { name: "Family Accounts", included: false },
      ],
      buttonText: "Start Free Trial",
      highlighted: false
    },
    {
      name: "Professional",
      price: isAnnual ? "$19.99" : "$29.99",
      description: "Comprehensive health management for individuals and families",
      features: [
        { name: "AI Health Assistant", included: true },
        { name: "Advanced Health Tracking", included: true },
        { name: "Secure Health Records", included: true },
        { name: "24/7 Priority Support", included: true },
        { name: "Personalized Insights", included: true },
        { name: "Provider Connectivity", included: true },
        { name: "Family Accounts (up to 5)", included: true },
      ],
      buttonText: "Get Started",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Complete solution for healthcare providers and organizations",
      features: [
        { name: "AI Health Assistant", included: true },
        { name: "Advanced Health Tracking", included: true },
        { name: "Secure Health Records", included: true },
        { name: "24/7 Dedicated Support", included: true },
        { name: "Personalized Insights", included: true },
        { name: "Provider Dashboard", included: true },
        { name: "Unlimited Accounts", included: true },
      ],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent <span className="text-teal-600 relative">
              Pricing
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 left-0 h-2 bg-teal-100 -z-10"
              />
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
            Choose the plan that fits your health management needs
          </p>
          
          {/* New Toggle with Headless UI */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            <Switch
              checked={!isAnnual}
              onChange={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              <span className="sr-only">Toggle billing period</span>
              <motion.span
                initial={false}
                animate={{
                  x: !isAnnual ? 24 : 4
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className="inline-block h-6 w-6 transform rounded-full bg-white shadow-lg"
              />
            </Switch>
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full ml-2">
              Save 20%
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted 
                  ? 'border-2 border-teal-500 shadow-xl' 
                  : 'border border-gray-200 shadow-sm hover:shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-teal-500 text-white text-sm font-semibold text-center py-1">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={plan.price}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-gray-600 ml-2">{isAnnual ? '/year' : '/month'}</span>
                    )}
                  </motion.div>
                </AnimatePresence>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start"
                    >
                      {feature.included ? (
                        <Check className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-500'}>
                        {feature.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg text-center font-medium ${
                    plan.highlighted 
                      ? 'bg-teal-600 text-white hover:bg-teal-700' 
                      : 'bg-white text-teal-600 border border-teal-600 hover:bg-teal-50'
                  } transition-colors duration-300`}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;