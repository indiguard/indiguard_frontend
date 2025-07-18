import React from 'react';
import Icon from '@/components/AppIcon';

const RetailCorporateSecurity = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Icon name="Building" size={28} color="#1B365D" />
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">
            Retail & Corporate Security
          </h1>
        </div>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mt-4">
          Ensure safety, prevent losses, and elevate customer confidence with professional on-site security personnel.
        </p>
      </div>

      <div className="max-w-4xl mx-auto text-text-secondary text-lg leading-relaxed space-y-6 mb-12">
        <p>
          Whether you operate a retail store, office building, or commercial property, visible and reliable security plays a vital role in protecting your assets and people.
        </p>
        <p>
          Our trained officers provide deterrence against theft, assist with emergencies, and monitor daily operations. Their presence ensures your environment remains safe and orderly for customers, employees, and guests.
        </p>
        <p>
          We customize each deployment to your brand, culture, and safety priorities—so your business feels secure and supported.
        </p>
      </div>

      <div className="bg-surface rounded-xl shadow-elevation-1 p-8 max-w-4xl mx-auto border border-border">
        <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center space-x-2">
          <Icon name="Users" size={22} className="text-primary" />
          <span>What’s Included</span>
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <Icon name="Check" size={20} color="#38A169" />
            <span><strong>Uniformed Officers:</strong> Professional guards who represent your brand while keeping premises secure.</span>
          </li>
          <li className="flex items-start space-x-3">
            <Icon name="Check" size={20} color="#38A169" />
            <span><strong>Theft Prevention:</strong> Active deterrence and intervention to reduce shrinkage and shoplifting.</span>
          </li>
          <li className="flex items-start space-x-3">
            <Icon name="Check" size={20} color="#38A169" />
            <span><strong>Customer & Staff Safety:</strong> Our team helps maintain a welcoming, risk-free environment for everyone on site.</span>
          </li>
          <li className="flex items-start space-x-3">
            <Icon name="Check" size={20} color="#38A169" />
            <span><strong>Emergency Response:</strong> Immediate assistance during incidents like medical events, disturbances, or evacuations.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RetailCorporateSecurity;
