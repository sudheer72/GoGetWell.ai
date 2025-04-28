import React from 'react';
import { UserCircle, FileText, Stethoscope, Grape as Graph } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <UserCircle className="h-12 w-12 text-teal-600" />,
      title: "Create Your Profile",
      description: "Sign up and build your health profile with your medical history, current medications, and health goals."
    },
    {
      icon: <FileText className="h-12 w-12 text-teal-600" />,
      title: "Add Your Health Data",
      description: "Securely import or manually add your medical records, test results, and health metrics."
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-teal-600" />,
      title: "Get AI-Powered Insights",
      description: "Our AI analyzes your data to provide personalized health insights and recommendations."
    },
    {
      icon: <Graph className="h-12 w-12 text-teal-600" />,
      title: "Track Your Progress",
      description: "Monitor your health improvements over time and adjust your wellness plan accordingly."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How <span className="text-teal-600 relative">
              GoGetWell.ai
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 left-0 h-2 bg-teal-100 -z-10"
              />
            </span> Works
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Our simple four-step process makes managing your health easier than ever
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop: Horizontal Process Line */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-1 bg-teal-100">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-0 right-0 h-full bg-teal-500 origin-left"
            />
          </div>

          {/* Mobile to Desktop: Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-teal-50 rounded-full p-6 z-10 border-4 border-white shadow-md mb-6 transition-colors duration-300 hover:bg-teal-100"
                >
                  {step.icon}
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.2 }}
                  className="absolute top-24 w-6 h-6 rounded-full bg-teal-500 hidden lg:block"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-600 text-white px-8 py-3 rounded-md font-medium text-lg inline-block hover:bg-teal-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Get Started Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;