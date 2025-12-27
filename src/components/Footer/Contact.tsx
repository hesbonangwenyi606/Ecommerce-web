import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="flex flex-col space-y-1 text-gray-300 text-sm">
      <p><MapPin className="inline mr-1" /> Nairobi, Kenya</p>
      <p><Mail className="inline mr-1" /> info@luxury.com</p>
      <p><Phone className="inline mr-1" /> +254 743 573 380</p>
    </div>
  );
};
