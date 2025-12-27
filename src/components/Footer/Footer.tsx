import React, { useState } from 'react';
import { Contact } from './Contact';
import { Careers } from './Careers';
import { PrivacyPolicy } from './PrivacyPolicy';
import { ChevronDown } from 'lucide-react';

const Footer = () => {
  // State for toggling each section
  const [showContact, setShowContact] = useState(false);
  const [showCareers, setShowCareers] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-8 space-y-6 md:space-y-0">

          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-yellow-500 mb-2">LuxeStore</h1>
            <p className="text-gray-400 max-w-xs">
              Discover luxury products crafted with excellence. Shop exclusive items and enjoy premium experiences.
            </p>
          </div>

          {/* Shop Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold mb-2">Shop</h3>
            <a href="#" className="hover:text-white transition-colors">Watches</a>
            <a href="#" className="hover:text-white transition-colors">Bags</a>
            <a href="#" className="hover:text-white transition-colors">Jewelry</a>
            <a href="#" className="hover:text-white transition-colors">Fragrance</a>
          </div>

          {/* Company Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold mb-2">Company</h3>
            <button
              onClick={() => setShowContact(!showContact)}
              className="flex items-center justify-between w-full text-left hover:text-white transition-colors"
            >
              Contact <ChevronDown className={`ml-2 transition-transform ${showContact ? 'rotate-180' : ''}`} />
            </button>
            {showContact && <Contact />}

            <button
              onClick={() => setShowCareers(!showCareers)}
              className="flex items-center justify-between w-full text-left hover:text-white transition-colors"
            >
              Careers <ChevronDown className={`ml-2 transition-transform ${showCareers ? 'rotate-180' : ''}`} />
            </button>
            {showCareers && <Careers />}

            <button
              onClick={() => setShowPrivacy(!showPrivacy)}
              className="flex items-center justify-between w-full text-left hover:text-white transition-colors"
            >
              Privacy Policy <ChevronDown className={`ml-2 transition-transform ${showPrivacy ? 'rotate-180' : ''}`} />
            </button>
            {showPrivacy && <PrivacyPolicy />}
          </div>

          {/* Social Media */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-3">
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
