import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onRequestQuote, onViewCaseStudy, onCompareToggle, isSelected }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getPricingColor = (tier) => {
    switch (tier) {
      case 'Premium': return 'text-accent bg-accent/10 border-accent/20';
      case 'Standard': return 'text-primary bg-primary/10 border-primary/20';
      case 'Basic': return 'text-success bg-success/10 border-success/20';
      default: return 'text-text-secondary bg-border/10 border-border/20';
    }
  };

  return (
    <div className={`bg-surface rounded-lg shadow-elevation-2 border transition-smooth hover:shadow-elevation-3 ${
      isSelected ? 'border-primary ring-2 ring-primary/20' : 'border-border'
    }`}>
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <Image
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPricingColor(service.pricingTier)}`}>
            {service.pricingTier}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          
        </div>
      </div>

      {/* Service Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-heading font-semibold text-primary">{service.name}</h3>
          <div className="flex items-center space-x-1 text-accent">
            
          </div>
        </div>

        <p className="text-text-secondary mb-4 line-clamp-2">{service.description}</p>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-text-primary mb-2">Key Features</h4>
          <div className="space-y-1">
            {service.features.slice(0, isExpanded ? service.features.length : 3).map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                <span className="text-sm text-text-secondary">{feature}</span>
              </div>
            ))}
          </div>
          {service.features.length > 3 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm text-primary hover:text-secondary transition-smooth mt-2"
            >
              {isExpanded ? 'Show Less' : `+${service.features.length - 3} More Features`}
            </button>
          )}
        </div>

        {/* Use Cases */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-text-primary mb-2">Typical Use Cases</h4>
          <div className="flex flex-wrap gap-2">
            {service.useCases.map((useCase, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-md"
              >
                {useCase}
              </span>
            ))}
          </div>
        </div>

        {/* Coverage Areas */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="MapPin" size={14} />
            <span>Coverage: {service.coverageAreas.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;