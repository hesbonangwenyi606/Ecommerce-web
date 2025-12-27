import React from "react";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">About LuxeStore</h1>

      <div className="bg-white rounded-lg shadow p-6 max-w-4xl text-gray-700 space-y-4">
        <p>
          LuxeStore is committed to delivering premium products with exceptional quality and service. Since our founding, we have specialized in luxury watches, designer bags, exquisite jewelry, and signature fragrances, catering to discerning customers who appreciate elegance and sophistication.
        </p>
        <p>
          Our mission is to combine timeless craftsmanship with modern design, providing a curated selection of products that reflect both style and substance. At LuxeStore, we believe that luxury is not just about price—it’s about the experience, attention to detail, and the story behind every item.
        </p>
        <p>
          We partner with world-class artisans and reputable brands to ensure that every product meets our exacting standards of quality. Beyond our products, we strive to create a seamless shopping experience through personalized customer service, secure online transactions, and prompt delivery.
        </p>
        <p>
          At LuxeStore, we are passionate about helping our customers express their individuality through carefully selected luxury items, while maintaining an unwavering commitment to authenticity, integrity, and excellence in every interaction.
        </p>
      </div>

      <Link
        to="/"
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};
