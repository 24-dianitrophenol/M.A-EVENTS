import React from 'react';
import { motion } from 'framer-motion';
import { Tent, Utensils, Camera, Music } from 'lucide-react';

const services = [
  {
    icon: <Tent className="h-12 w-12" />,
    title: 'Tents, Chairs, Lightings & Other Party Rentals',
    description: 'High-quality tents, chairs, tables, and gazebos for any event size.'
  },
  {
    icon: <Utensils className="h-12 w-12" />,
    title: 'Catering Services',
    description: 'Delicious menu options with professional service and presentation.'
  },
  {
    icon: <Camera className="h-12 w-12" />,
    title: 'Event Photography',
    description: 'Capture your special moments with our professional photographers.'
  },
  {
    icon: <Music className="h-12 w-12" />,
    title: 'Entertainment',
    description: 'Live music, DJs, and entertainment options for your event.'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900 mb-4"
        >
        Our Services
        </motion.h2>
        <p className="text-xl text-gray-600">
        Everything you need for a perfect event
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-purple-600 mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-12"
      >
        <a
        href="https://wa.me/256751256167"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
        >
        Book Now on WhatsApp
        </a>
      </motion.div>
      </div>
    </section>
  );
};

export default Services;