import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-white">LuxeStore</h2>
          <p className="text-gray-400">Premium products for modern lifestyle</p>
        </div>

        {/* Center - Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Shop</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white"><Facebook size={20} /></a>
          <a href="#" className="hover:text-white"><Twitter size={20} /></a>
          <a href="#" className="hover:text-white"><Instagram size={20} /></a>
          <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} LuxeStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
