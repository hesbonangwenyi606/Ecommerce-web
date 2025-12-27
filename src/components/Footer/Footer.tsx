import React, { useState } from 'react';
import { Contact } from './Contact';
import { Careers } from './Careers';
import { PrivacyPolicy } from './PrivacyPolicy';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const [showContact, setShowContact] = useState(false);
  const [showCareers, setShowCareers] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">

          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-yellow-500 mb-2">LuxeStore</h1>
            <p className="text-gray-400 max-w-xs">
              Discover luxury products crafted with excellence. Shop exclusive items and enjoy premium experiences.
            </p>
          </div>

          {/* Shop Links */}
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <h3 className="font-semibold mb-2">Shop</h3>
            <a href="#" className="hover:text-white transition-colors">Watches</a>
            <a href="#" className="hover:text-white transition-colors">Bags</a>
            <a href="#" className="hover:text-white transition-colors">Jewelry</a>
            <a href="#" className="hover:text-white transition-colors">Fragrance</a>
          </div>

          {/* Company Links */}
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <h3 className="font-semibold mb-2">Company</h3>

            <button
              className="hover:text-white transition-colors text-left"
              onClick={() => setShowContact(prev => !prev)}
            >
              Contact
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${showContact ? 'max-h-40 mt-2' : 'max-h-0'}`}>
              <Contact />
            </div>

            <button
              className="hover:text-white transition-colors text-left"
              onClick={() => setShowCareers(prev => !prev)}
            >
              Careers
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${showCareers ? 'max-h-40 mt-2' : 'max-h-0'}`}>
              <Careers />
            </div>

            <button
              className="hover:text-white transition-colors text-left"
              onClick={() => setShowPrivacy(prev => !prev)}
            >
              Privacy Policy
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${showPrivacy ? 'max-h-40 mt-2' : 'max-h-0'}`}>
              <PrivacyPolicy />
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-3 justify-center md:justify-start">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} LuxeStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
