import React from 'react';
import Icon from '@/components/AppIcon';

const WarehouseSecurity = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Icon name="Package" size={28} color="#1B365D" />
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">
            Warehouse Security
          </h1>
        </div>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mt-4">
          Protect your stock, control access, and monitor every corner of your facility with reliable warehouse security solutions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto text-text-secondary text-lg leading-relaxed space-y-6 mb-12">
        <p>
          Warehouses are high-value targets for theft and often experience long idle hours. Our tailored security services are designed to protect both inventory and personnel around the clock.
        </p>
        <p>
          We deploy static guards, mobile patrols, CCTV monitoring, and access control systems that ensure only authorized personnel enter sensitive areas. Our presence alone is a strong deterrent for potential threats.
        </p>
        <p>
          Whether it’s a logistics hub, distribution center, or cold storage — we secure your operations without disruption.
        </p>
      </div>

      <div className="bg-surface rounded-xl shadow-elevation-1 p-8 max-w-4xl mx-auto border border-border">
        <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center space-x-2">
          <Icon name="Shield" size={22} className="text-primary" />
          <span>Warehouse Security Solutions</span>
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <Icon name="Check" size={20} color="#38A169" />
            <span><strong>On-Site Guards:</strong> 24/7 manned guarding for entrances, exits, and inventory zones.</span>
          </li>
          <li className="flex items-start space-x-3">
            <Icon name="Check" size={20} color="#38A169" />
            <span><strong>CCTV Monitoring:</strong> Surveillance support to cover all angles and blind spots.</span>
          </li>
          <li className="flex items-start space-x-3">
            <Icon name="Check" size={20} color="#38A169" />
            <span><strong>Asset Protection:</strong> Minimize shrinkage, sabotage, and unauthorized movement of goods.</span>
          </li>
          <li className="flex items-start space-x-3">
            <Icon name="Check" size={20} color="#38A169" />
            <span><strong>Entry Logging:</strong> Every visit is tracked and logged for audit and accountability.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WarehouseSecurity;
