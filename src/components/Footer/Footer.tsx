import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
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
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold mb-2">Shop</h3>
            <Link to="#" className="hover:text-white">Watches</Link>
            <Link to="#" className="hover:text-white">Bags</Link>
            <Link to="#" className="hover:text-white">Jewelry</Link>
            <Link to="#" className="hover:text-white">Fragrance</Link>
          </div>

          {/* Company Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold mb-2">Company</h3>
            <Link to="/about" className="hover:text-white">About Us</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <Link to="/careers" className="hover:text-white">Careers</Link>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold mb-2">Get in Touch</h3>
            <p>📍 Nairobi, Kenya</p>
            <p>📧 info@luxury.com</p>
            <p>📞 +254 743 573 380</p>
          </div>

        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} LuxeStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
