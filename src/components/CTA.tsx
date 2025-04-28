import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Healthcare Experience?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Join thousands of users who are taking control of their health with GoGetWell.ai's powerful AI-driven platform.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Get started with a 14-day free trial",
                "No credit card required",
                "Cancel anytime, no obligations"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-teal-300 mr-3" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-xl text-gray-900">
            <h3 className="text-2xl font-bold mb-6">Get Early Access</h3>
            
            {submitted ? (
              <div className="text-center py-6">
                <div className="bg-green-100 text-green-800 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Check className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
                <p className="text-gray-600">
                  We've received your request. Our team will contact you shortly with your exclusive access details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="personal">Personal Health Management</option>
                    <option value="family">Family Health Management</option>
                    <option value="professional">Professional Use (Healthcare Provider)</option>
                    <option value="business">Business Use (Enterprise)</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors duration-300 flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Request Early Access <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;