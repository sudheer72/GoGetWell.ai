import React from 'react';
import { Brain, Database, Users, Shield, Headphones, LineChart as ChartLine } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-teal-600" />,
      title: 'AI-Powered Diagnostics',
      description: 'Our advanced AI algorithms analyze symptoms and medical history to provide accurate preliminary health assessments.'
    },
    {
      icon: <Database className="h-8 w-8 text-teal-600" />,
      title: 'Secure Health Records',
      description: 'Safely store and access your medical records, prescriptions, and health data in one centralized, secure platform.'
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: 'Connect with Specialists',
      description: 'Seamlessly connect with qualified healthcare professionals for virtual consultations and follow-ups.'
    },
    {
      icon: <Shield className="h-8 w-8 text-teal-600" />,
      title: 'Privacy First',
      description: 'Your health data is protected with enterprise-grade security and full HIPAA compliance at every step.'
    },
    {
      icon: <Headphones className="h-8 w-8 text-teal-600" />,
      title: '24/7 Health Support',
      description: 'Get immediate responses to health queries and concerns with our always-available virtual health assistant.'
    },
    {
      icon: <ChartLine className="h-8 w-8 text-teal-600" />,
      title: 'Health Analytics',
      description: 'Track your health metrics over time with detailed analytics and personalized wellness recommendations.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Health Management{' '}
            <span className="text-teal-600 relative">
              Features
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 left-0 h-2 bg-teal-100 -z-10"
              />
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Our platform integrates cutting-edge AI technology with healthcare expertise to deliver a complete wellness solution.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;