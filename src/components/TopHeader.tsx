import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const TopHeader = () => {
  return (
    <div className="bg-gray-100 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+256763721005" className="flex items-center text-sm text-gray-600 hover:text-purple-600">
              <Phone className="h-4 w-4 text-purple-600 mr-1" />
              +256 763 721 005
            </a>
            <a href="mailto:maevents975@gmail.com" className="hidden sm:flex items-center text-sm text-gray-600 hover:text-purple-600">
              <Mail className="h-4 w-4 text-purple-600 mr-1" />
              maevents975@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <span className="hidden md:flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 text-purple-600 mr-1" />
              Mon - Sat: 9:00AM - 6:00PM
            </span>
            <span className="hidden lg:flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-purple-600 mr-1" />
              Mbiko, Kyabaggu-Zone
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;