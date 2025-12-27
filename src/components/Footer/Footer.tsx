import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">LuxeStore</h3>
          <p className="text-gray-400 text-sm">
            LuxeStore offers premium products crafted with excellence. 
            Discover luxury watches, jewelry, handbags, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-md font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="text-white text-md font-semibold mb-4">Connect</h4>
          <p className="text-gray-400 text-sm mb-2">Email: support@luxestore.com</p>
          <p className="text-gray-400 text-sm mb-4">Phone: +254 743 573 380</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} LuxeStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
