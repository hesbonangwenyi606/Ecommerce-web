import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        📍 Nairobi, Kenya<br />
        📧 info@luxurystore.com<br />
        📞 +254 743 573 380
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
