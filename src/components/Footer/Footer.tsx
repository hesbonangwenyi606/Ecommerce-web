import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

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
            <a href="#" className="hover:text-white transition-colors">About Us</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>

          {/* Contact Info (last column) */}
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <h3 className="font-semibold mb-2">Contact Info</h3>
            <p className="text-gray-400 text-sm">📍 Nairobi, Kenya</p>
            <p className="text-gray-400 text-sm">📧 hesbonmanyinsa96@gmail.com</p>
            <p className="text-gray-400 text-sm">📞 +254 743 573 380</p>

            {/* Social Media */}
            <div className="flex space-x-3 mt-2 justify-center md:justify-start">
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
