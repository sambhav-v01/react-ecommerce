import React, { useEffect } from 'react';
import { Truck, Lock, RotateCcw, Clock } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  { icon: Truck, text: 'Free Shipping', subtext: 'On orders over $100' },
  { icon: Lock, text: 'Secure Payment', subtext: '100% protected payments' },
  { icon: RotateCcw, text: 'Easy Returns', subtext: '30-day return policy' },
  { icon: Clock, text: '24/7 Support', subtext: 'Dedicated customer service' },
];

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  return (
    <div className=' py-15 px-4 sm:px-6 lg:px-8 mt-15'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-center text-4xl font-bold text-gray-800'>Our Services</h1>
        <br />
        <div className='grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8'>
          {features.map((feature, index) => {
            const animation =
              index % 2 === 0 ? 'fade-right' : 'fade-left';
            return (
              <div
                key={index}
                className=' bg-gray-100 border-4 border-gray-100 p-6 rounded-xl  flex items-center justify-center text-center sm:text-left hover:scale-105 transition-all  ease-in-out duration-900 hover:shadow-2xl gap-5'
                data-aos={animation}
                data-aos-delay={index * 100}
              >
                <feature.icon className='flex-shrink-0 h-15 w-15 text-gray-700' aria-hidden='true' />
                <div className='ml-4'>
                  <p className='text-base font-medium text-gray-1000'>{feature.text}</p>
                  <p className='mt-1 text-sm text-gray-700'>{feature.subtext}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
