import React from "react";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl">
        At LuxeStore, we value your privacy. All personal information collected is used solely to enhance your shopping experience and will never be shared with third parties without your consent.
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
