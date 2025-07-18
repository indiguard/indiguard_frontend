import React from 'react';
import Icon from '@/components/AppIcon';

const ConstructionSecurity = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Icon name="Building2" size={28} color="#1B365D" />
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">
            Construction Site Security
          </h1>
        </div>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mt-4">
          Guard your valuable tools, machinery, and project progress with professional construction site security.
        </p>
      </div>

      <div className="max-w-4xl mx-auto text-text-secondary text-lg leading-relaxed space-y-6 mb-12">
        <p>
          Construction sites are vulnerable to theft, trespassing, and vandalism—especially during off-hours. Our security service is tailored to the unique risks of active building sites.
        </p>
        <p>
          We provide licensed guards to monitor access, conduct patrols, and maintain logs of all activity. From preventing unauthorized entry to ensuring contractor safety, our team is trained to secure high-value projects.
        </p>
        <p>
          Reduce downtime, protect your equipment, and stay on schedule with site-specific security solutions.
        </p>
      </div>

      <div className="bg-surface rounded-xl shadow-elevation-1 p-8 max-w-4xl mx-auto border border-border">
        <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center space-x-2">
          <Icon name="Hammer" size={22} className="text-primary" />
          <span>Key Features</span>
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
<Icon name="CheckCircle" size={20} color="#38A169" />
            <span><strong>Manned Security:</strong> On-site guards deter intruders and manage access points efficiently.</span>
          </li>
          <li className="flex items-start space-x-3">
            <Icon name="CheckCircle" size={20} color="#38A169" />
            <span><strong>Night Patrols:</strong> Routine patrols during evenings and weekends to ensure safety when no one is around.</span>
          </li>
          <li className="flex items-start space-x-3">
            <Icon name="CheckCircle" size={20} color="#38A169" />
            <span><strong>Access Control:</strong> We ensure only authorized personnel enter the premises, improving site integrity.</span>
          </li>
          <li className="flex items-start space-x-3">
            <Icon name="CheckCircle" size={20} color="#38A169" />
            <span><strong>Asset Protection:</strong> Safeguard expensive equipment, tools, and materials from theft or misuse.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ConstructionSecurity;
