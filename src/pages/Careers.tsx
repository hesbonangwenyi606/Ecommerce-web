import React from "react";
import { Link } from "react-router-dom";

export const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-4">Careers</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Join the LuxeStore team! We’re always looking for talented individuals passionate about luxury products and excellent customer experience.
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
