import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const certifications = [
    {
      name: 'ISO 9001 Certified',
      icon: 'Shield',
      description: 'Quality Management',
      // year: '2024'
    },
    {
      name: 'SIA',
      icon: 'Award',
      description: 'Approved Contractor',
      // year: '2024'
    },
    {
      name: 'Alcumus',
      icon: 'CheckCircle',
      description: 'Safe Contractor',
      // year: '2024'
    },
    
  ];

 

  const stats = [
    {
      number: '100+',
      label: 'Clients Protected',
      icon: 'Users'
    },
    {
      number: '2+',
      label: 'Years Experience',
      icon: 'Calendar'
    },
    {
      number: '99.9%',
      label: 'Uptime Guarantee',
      icon: 'Shield'
    },
    {
      number: '24/7',
      label: 'Emergency Response',
      icon: 'Clock'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-warning fill-current' : 'text-border'}
      />
    ));
  };

  return (
    <div className="space-y-8">
      {/* Trust Statistics */}
      <div className="bg-surface rounded-lg shadow-elevation-2 p-6">
        <h3 className="text-lg font-heading font-semibold text-primary mb-6 text-center">
          Trusted by Businesses Nationwide
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Icon name={stat.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-heading font-bold text-primary">
                {stat.number}
              </div>
              <p className="text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-surface rounded-lg shadow-elevation-2 p-6">
        <h3 className="text-lg font-heading font-semibold text-primary mb-4">
          Certifications & Accreditations
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:border-primary/20 transition-smooth"
            >
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <Icon name={cert.icon} size={20} className="text-success" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-text-primary">{cert.name}</h4>
                <p className="text-sm text-text-secondary">{cert.description}</p>
              </div>
              <span className="text-xs font-data text-success bg-success/10 px-2 py-1 rounded">
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>

     

      {/* Security Guarantee */}
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg p-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="ShieldCheck" size={32} />
          </div>
          <h3 className="text-xl font-heading font-semibold mb-2">
            100% Satisfaction Guarantee
          </h3>
          <p className="opacity-90 mb-4">
            We stand behind our security services with a complete satisfaction guarantee. 
            If you're not completely satisfied within the first 30 days, we'll make it right.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={16} />
              <span>Licensed & Bonded</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={16} />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={16} />
              <span>Background Checked</span>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default TrustIndicators;