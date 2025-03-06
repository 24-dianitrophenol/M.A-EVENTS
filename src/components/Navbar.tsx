import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Tent, Phone, Users, Home, Mail, Clock, MapPin, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      {/* Top Header Section */}
      <div className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 py-2 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-6">
          <a href="tel:+256763721005" className="flex items-center text-sm text-gray-100 hover:text-white">
            <Phone className="h-4 w-4 text-white mr-1" />
            +256 763 721 005
          </a>
          <a href="mailto:info@maevents.com" className="hidden sm:flex items-center text-sm text-gray-100 hover:text-white">
            <Mail className="h-4 w-4 text-white mr-1" />
            maevents975@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-6">
          <span className="hidden md:flex items-center text-sm text-gray-100">
            <Clock className="h-4 w-4 text-white mr-1" />
            Mon - Sat: 9:00 - 18:00
          </span>
          <span className="hidden lg:flex items-center text-sm text-gray-100">
            <MapPin className="h-4 w-4 text-white mr-1" />
            Mbiko, Kyabaggu-Zone
          </span>
        </div>

        </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/src/images/logo.png"
                alt="M.A Events Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600 flex items-center relative font-bold">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="relative">Home</span>
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-purple-600 flex items-center font-bold">
              Services
            </Link>
            <Link to="/gallery" className="text-gray-600 hover:text-purple-600 flex items-center font-bold">
              Gallery
            </Link>
            <Link to="/team" className="text-gray-600 hover:text-purple-600 flex items-center font-bold">
              Our Team
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-purple-600 flex items-center font-bold">
              Contact
            </Link>
            <Link
              to="/booking"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-bold"
            >
              Book Now
            </Link>
            </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-purple-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-600 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium font-bold"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-600 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium font-bold"
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className="text-gray-600 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium font-bold"
            >
              Gallery
            </Link>
            <Link
              to="/team"
              className="text-gray-600 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium font-bold"
            >
              Our Team
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium font-bold"
            >
              Contact
            </Link>
            <Link
              to="/booking"
              className="bg-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium font-bold"
            >
              Book Now
            </Link>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;