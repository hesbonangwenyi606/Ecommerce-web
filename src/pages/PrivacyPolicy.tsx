import React from "react";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

      <div className="bg-white rounded-lg shadow p-6 max-w-4xl text-gray-700 space-y-4">
        <p>
          At LuxeStore, we value your privacy. All personal information collected is used solely to enhance your shopping experience and to provide personalized services.  
        </p>
        <p>
          We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as required by law.  
        </p>
        <p>
          We implement appropriate security measures to protect your data and ensure it is handled responsibly. You have the right to access, update, or delete your personal information at any time by contacting our customer support.  
        </p>
        <p>
          By using LuxeStore, you agree to the collection and use of information in accordance with this policy. We are committed to safeguarding your information and providing a safe and secure shopping environment.
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
