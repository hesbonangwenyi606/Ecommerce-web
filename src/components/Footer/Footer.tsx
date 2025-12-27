import React, { useState } from 'react';
import { Contact } from './Contact';
import { Careers } from './Careers';
import { PrivacyPolicy } from './PrivacyPolicy';

const Footer = () => {
  const [showContact, setShowContact] = useState(false);
  const [showCareers, setShowCareers] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">

          <div>
            <h3 className="font-semibold mb-2 cursor-pointer" onClick={() => setShowContact(!showContact)}>Contact</h3>
            {showContact && <Contact />}
          </div>

          <div>
            <h3 className="font-semibold mb-2 cursor-pointer" onClick={() => setShowCareers(!showCareers)}>Careers</h3>
            {showCareers && <Careers />}
          </div>

          <div>
            <h3 className="font-semibold mb-2 cursor-pointer" onClick={() => setShowPrivacy(!showPrivacy)}>Privacy Policy</h3>
            {showPrivacy && <PrivacyPolicy />}
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
