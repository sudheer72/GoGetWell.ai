import React from 'react';
import { Activity, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Activity className="h-8 w-8 text-teal-400" />
              <span className="font-bold text-xl">GoGetWell.ai</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming healthcare with AI-powered solutions that make wellness accessible and personalized for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                ["Home", "#"],
                ["Features", "#features"],
                ["How It Works", "#how-it-works"],
                ["Pricing", "#pricing"],
                ["FAQ", "#faq"],
                ["Contact", "#contact"]
              ].map(([name, url], index) => (
                <li key={index}>
                  <a 
                    href={url} 
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Health Avenue<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@gogetwell.ai" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                  info@gogetwell.ai
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and health tips.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500" 
              />
              <button 
                type="submit" 
                className="bg-teal-600 px-4 py-2 rounded-r-md hover:bg-teal-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} GoGetWell.ai. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">
                HIPAA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;