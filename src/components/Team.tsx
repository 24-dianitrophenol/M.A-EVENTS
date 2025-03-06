import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Nambalirwa Josephine',
    role: 'CEO & Founder',
    image: '/src/images/josephine.jpg',
    bio: '15+ years of Event planning experience'
  },
  {
    name: 'Kato Fransis',
    role: 'Creative Director',
    image: '/src/images/kato.jpg',
    bio: 'Award-winning Event designer'
  },
  {
    name: 'Moris',
    role: 'Head of Catering',
    image: '/src/images/moris.jpg',
    bio: 'Culinary expert with international experience'
  },
  {
    name: 'Ausi Walukaga',
    role: 'Operations Manager',
    image: '/src/images/ausi.jpg',
    bio: 'Logistics and coordination specialist'
  },
  {
    name: 'Dj Bash',
    role: 'Dj',
    image: '/src/images/bash.jpg',
    bio: 'Expert in mixing unforgettable musical experiences'
  },
  {
    name: 'Bongole Alvin',
    role: 'Senior Decorator',
    image: '/src/images/alvin.jpg',
    bio: 'Senior decorator with a keen eye for detail'
  },
  {
    name: 'Yabu',
    role: 'Operations Manager',
    image: '/src/images/yabu.png',
    bio: 'Logistics and coordination specialist'
  },
  {
    name: 'Alex',
    role: 'Operations Manager',
    image: '/src/images/alex.jpg',
    bio: 'Logistics and coordination specialist'
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-8">Meet Our Team</h2>
          <p className="text-xl text-gray-600">
            The talented people behind our success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;