import React from 'react';
import { ArrowRight, Bot, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 lg:pr-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              AI-Powered <span className="text-teal-600 relative">
                Healthcare
                <span className="absolute bottom-0 left-0 w-full h-2 bg-teal-100 -z-10"></span>
              </span> Assistant for Better Wellness
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Transform your healthcare experience with our AI-powered platform. Get personalized health insights, 24/7 support, and secure management of your medical data in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-600 text-white px-8 py-3 rounded-md font-medium text-lg flex items-center justify-center hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#how-it-works"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-teal-600 border border-teal-600 px-8 py-3 rounded-md font-medium text-lg flex items-center justify-center hover:bg-teal-50 transition-all duration-300"
              >
                How It Works
              </motion.a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: <Bot className="h-5 w-5 text-teal-600 mr-2" />, text: "AI-Powered" },
                { icon: <Shield className="h-5 w-5 text-teal-600 mr-2" />, text: "HIPAA Compliant" },
                { icon: <Clock className="h-5 w-5 text-teal-600 mr-2" />, text: "24/7 Support" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {item.icon}
                  <span className="text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 mt-10 lg:mt-0"
          >
            <div className="relative">
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-teal-100 rounded-full opacity-70"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, -2, 2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-70"
              />
              
              <img 
                src="https://images.pexels.com/photos/7088541/pexels-photo-7088541.jpeg" 
                alt="Digital healthcare platform with AI assistant" 
                className="relative z-10 rounded-2xl shadow-2xl w-full h-auto"
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg z-20 hidden md:block"
              >
                <div className="flex items-center space-x-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="h-5 w-5 text-green-600 flex items-center justify-center"
                    >
                      ✓
                    </motion.div>
                  </div>
                  <span className="font-medium text-sm">99.9% Accuracy</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;