import React from "react";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-8">
        LuxeStore is committed to delivering premium products with exceptional quality and service. We specialize in luxury watches, bags, jewelry, and fragrances for discerning customers.
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};
