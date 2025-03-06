import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 0.4356974527488101, // Replace with your actual coordinates
    lng: 33.16669425370359, // Replace with your actual coordinates
  };

  const locationDetails = [
    {
      icon: <MapPin className="h-6 w-6 text-purple-600" />,
      title: 'Our Location',
      description: 'Mbiko, town'
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: 'Opening Hours',
      description: 'Monday - Saturday: 9:00 AM - 6:00 PM'
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-600" />,
      title: 'Contact',
      description: '+256 763 721 005'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-xl text-gray-600">
            Visit our office or get in touch
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {locationDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {detail.icon}
                <h3 className="text-xl font-semibold ml-3">{detail.title}</h3>
              </div>
              <p className="text-gray-600">{detail.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;