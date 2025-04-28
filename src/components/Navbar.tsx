import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-teal-600" />
              <span className="font-bold text-xl text-gray-900">GoGetWell.ai</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-teal-600 transition-colors duration-300">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-teal-600 transition-colors duration-300">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-teal-600 transition-colors duration-300">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-teal-600 transition-colors duration-300">
              Pricing
            </a>
            <a href="#faq" className="text-gray-700 hover:text-teal-600 transition-colors duration-300">
              FAQ
            </a>
            <a 
              href="#contact" 
              className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden ${
          isOpen 
            ? 'fixed inset-0 pt-16 bg-white z-40 flex flex-col items-center space-y-6 py-8 animate-fade-in' 
            : 'hidden'
        }`}
      >
        <a 
          href="#features" 
          className="text-lg text-gray-800 hover:text-teal-600 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Features
        </a>
        <a 
          href="#how-it-works" 
          className="text-lg text-gray-800 hover:text-teal-600 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          How It Works
        </a>
        <a 
          href="#testimonials" 
          className="text-lg text-gray-800 hover:text-teal-600 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Testimonials
        </a>
        <a 
          href="#pricing" 
          className="text-lg text-gray-800 hover:text-teal-600 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Pricing
        </a>
        <a 
          href="#faq" 
          className="text-lg text-gray-800 hover:text-teal-600 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          FAQ
        </a>
        <a 
          href="#contact" 
          className="w-4/5 text-center bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;