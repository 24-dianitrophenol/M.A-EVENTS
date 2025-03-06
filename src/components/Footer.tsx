import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>

            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src="/src/images/logo.png"
                    alt="M.A Events Logo"
                    className="h-10 w-auto"
                />
              </Link>
            </div>

            <p className="text-gray-400">
              Your premier choice for Event decoration and catering services.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-400">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-purple-400">Services</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-purple-400">Our Team</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+256751256167" className="hover:text-purple-400">
                  +256 751 256 167
                </a>
                </li>
                <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:maevents975@gmail.com" className="hover:text-purple-400">
                  maevents975@gmail.com
                </a>
                </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Mbiko, Kyabaggu-Zone
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} M.A Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;