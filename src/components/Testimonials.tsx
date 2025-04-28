import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "GoGetWell.ai has completely transformed how I manage my health. The AI insights are incredibly accurate and have helped me make meaningful lifestyle changes.",
    author: "Sarah Johnson",
    position: "Chronic Care Patient",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    quote: "As a busy physician, I recommend GoGetWell.ai to my patients. It helps them stay engaged with their health between appointments and provides me with valuable data.",
    author: "Dr. Michael Chen",
    position: "Cardiologist",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    quote: "The 24/7 health assistant is a game-changer. I got helpful guidance during a late-night health scare that helped me determine it wasn't an emergency.",
    author: "James Wilson",
    position: "Fitness Enthusiast",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 4
  },
  {
    quote: "Managing my diabetes has become so much easier with GoGetWell.ai. The trend analysis and personalized recommendations have helped me maintain better control.",
    author: "Elena Rodriguez",
    position: "Diabetes Patient",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-teal-600">Users</span> Say
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Thousands of individuals and healthcare professionals trust GoGetWell.ai for their health management needs
          </p>
        </div>

        <div className="relative">
          {/* Desktop Testimonials */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center mt-auto">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Testimonial Carousel */}
          <div className="md:hidden">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonials[current].rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonials[current].quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonials[current].avatar} 
                  alt={testimonials[current].author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[current].author}</h4>
                  <p className="text-sm text-gray-600">{testimonials[current].position}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-4">
              <button 
                onClick={prev}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
              >
                <ChevronLeft className="h-6 w-6 text-teal-600" />
              </button>
              <button 
                onClick={next}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
              >
                <ChevronRight className="h-6 w-6 text-teal-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;