import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Logo & Description */}
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-yellow-500 mb-3">LuxeStore</h1>
            <p className="text-gray-400">
              Discover luxury products crafted with excellence. Shop exclusive items and enjoy premium experiences.
            </p>
          </div>

          {/* Shop Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-3">Shop</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-white transition-colors">Watches</a>
              <a href="#" className="hover:text-white transition-colors">Bags</a>
              <a href="#" className="hover:text-white transition-colors">Jewelry</a>
              <a href="#" className="hover:text-white transition-colors">Fragrance</a>
            </div>
          </div>

          {/* Company Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-3">Company</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>

          {/* Contact Info + Social */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-3">Contact Info</h3>
            <div className="flex flex-col space-y-2 text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                <MapPin size={16} /> Nairobi, Kenya
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} /> info@luxestore.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} /> +254 743 573 380
              </p>
            </div>
            <div className="flex space-x-4 mt-4 justify-center sm:justify-start">
              <a href="#" className="hover:text-white transition-transform transform hover:scale-110">
                <Facebook size={22} />
              </a>
              <a href="#" className="hover:text-white transition-transform transform hover:scale-110">
                <Instagram size={22} />
              </a>
              <a href="#" className="hover:text-white transition-transform transform hover:scale-110">
                <Twitter size={22} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} LuxeStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
