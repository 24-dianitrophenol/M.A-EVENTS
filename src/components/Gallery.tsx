import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    url: '/src/gallery/20.jpg',
    category: 'Wedding',
    title: 'Elegant Garden Wedding'
  },
  {
    url: '/src/gallery/19.jpg',
    category: 'Corporate',
    title: 'Annual Business Summit'
  },
  {
    url: '/src/gallery/18.jpg',
    category: 'Birthday',
    title: 'Sweet Sixteen Celebration'
  },
  {
    url: '/src/gallery/17.jpg',
    category: 'Decoration',
    title: 'Luxury Event Setup'
  },
  {
    url: '/src/gallery/16.jpg',
    category: 'Catering',
    title: 'Premium Buffet Service'
  },
  {
    url: '/src/gallery/15.jpg',
    category: 'Lighting',
    title: 'Modern Lighting Design'
  },
  {
    url: '/src/gallery/14.jpg',
    category: 'Tents',
    title: 'Spacious Event Tent'
  },
  {
    url: '/src/gallery/13.jpg',
    category: 'Furniture',
    title: 'Premium Seating Arrangement'
  },
  {
    url: '/src/gallery/12.jpg',
    category: 'Wedding',
    title: 'Elegant Garden Wedding'
  },
  {
    url: '/src/gallery/11.jpg',
    category: 'Corporate',
    title: 'Annual Business Summit'
  },
  {
    url: '/src/gallery/10.jpg',
    category: 'Birthday',
    title: 'Sweet Sixteen Celebration'
  },
  {
    url: '/src/gallery/1.jpg',
    category: 'Decoration',
    title: 'Luxury Event Setup'
  },
  {
    url: '/src/gallery/2.jpg',
    category: 'Catering',
    title: 'Premium Buffet Service'
  },
  {
    url: '/src/gallery/3.jpg',
    category: 'Lighting',
    title: 'Modern Lighting Design'
  },
  {
    url: '/src/gallery/4.jpg',
    category: 'Tents',
    title: 'Spacious Event Tent'
  },
  {
    url: '/src/gallery/5.jpg',
    category: 'Furniture',
    title: 'Premium Seating Arrangement'
  },
  {
    url: '/src/gallery/6.jpg',
    category: 'Furniture',
    title: 'Premium Seating Arrangement'
  },
  {
    url: '/src/gallery/7.jpg',
    category: 'Furniture',
    title: 'Premium Seating Arrangement'
  },
  {
    url: '/src/gallery/8.jpg',
    category: 'Furniture',
    title: 'Premium Seating Arrangement'
  },
  {
    url: '/src/gallery/9.jpg',
    category: 'Furniture',
    title: 'Premium Seating Arrangement'
  }
];

const Gallery = () => {
  return (
    <section className="py-20 bg-gray-50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-xl text-gray-600">
            Showcasing our finest Event setups and designs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-sm font-medium text-purple-300">{image.category}</span>
                <h3 className="text-lg font-semibold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;