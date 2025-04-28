import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}
      className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col group"
    >
      <motion.div 
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="bg-teal-50 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors duration-300"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;