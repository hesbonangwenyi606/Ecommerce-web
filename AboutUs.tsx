import React from 'react';

export const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1581091215363-6f0d2d0c36b1?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Store"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              At <span className="font-semibold text-yellow-500">LuxeStore</span>, we are passionate about luxury and excellence. 
              Our mission is to provide premium products that combine elegance, quality, and timeless style. 
            </p>
            <p className="text-gray-600 mb-4">
              From watches and jewelry to handbags and fragrances, every item in our collection is carefully curated to ensure it meets the highest standards. 
              We believe that shopping for luxury should be an experience – seamless, inspiring, and unforgettable.
            </p>
            <p className="text-gray-600">
              Join us on our journey to celebrate craftsmanship and sophistication. Your luxury experience begins here.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
