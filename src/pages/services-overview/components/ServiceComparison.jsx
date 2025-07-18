import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = ({ selectedServices, onRemoveService, onClearAll, onRequestQuote }) => {
  if (selectedServices.length === 0) {
    return null;
  }

  const comparisonFeatures = [
    'Response Time',
    'Coverage Hours',
    'Personnel Training',
    'Technology Integration',
    'Reporting Frequency',
    'Emergency Protocols',
    'Customization Level',
    'Compliance Standards'
  ];

  const getFeatureValue = (service, feature) => {
    const featureMap = {
      'Response Time': service.responseTime || '< 15 minutes',
      'Coverage Hours': service.coverageHours || '24/7',
      'Personnel Training': service.personnelTraining || 'Advanced',
      'Technology Integration': service.technologyIntegration || 'Full Suite',
      'Reporting Frequency': service.reportingFrequency || 'Real-time',
      'Emergency Protocols': service.emergencyProtocols || 'Comprehensive',
      'Customization Level': service.customizationLevel || 'High',
      'Compliance Standards': service.complianceStandards || 'All Major'
    };
    return featureMap[feature];
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-300 bg-surface border-t border-border shadow-elevation-4 animate-slide-up">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Icon name="GitCompare" size={24} className="text-primary" />
            <h3 className="font-heading font-semibold text-primary">
              Compare Services ({selectedServices.length})
            </h3>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              iconName="X"
              iconPosition="left"
              onClick={onClearAll}
            >
              Clear All
            </Button>
            <Button
              variant="primary"
              size="sm"
              iconName="MessageSquare"
              iconPosition="left"
              onClick={() => onRequestQuote(selectedServices)}
            >
              Request Quote for Selected
            </Button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Service Headers */}
            <div className="flex space-x-4 mb-4">
              <div className="w-40 flex-shrink-0"></div>
              {selectedServices.map((service) => (
                <div key={service.id} className="w-64 flex-shrink-0">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-primary">{service.name}</h4>
                      <button
                        onClick={() => onRemoveService(service.id)}
                        className="p-1 hover:bg-error/10 rounded transition-smooth"
                      >
                        <Icon name="X" size={14} className="text-error" />
                      </button>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      service.pricingTier === 'Premium' ? 'bg-accent/10 text-accent' :
                      service.pricingTier === 'Standard'? 'bg-primary/10 text-primary' : 'bg-success/10 text-success'
                    }`}>
                      {service.pricingTier}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Comparison */}
            <div className="space-y-2">
              {comparisonFeatures.map((feature) => (
                <div key={feature} className="flex space-x-4">
                  <div className="w-40 flex-shrink-0 py-3 px-2">
                    <span className="text-sm font-medium text-text-primary">{feature}</span>
                  </div>
                  {selectedServices.map((service) => (
                    <div key={service.id} className="w-64 flex-shrink-0 py-3 px-4 bg-surface border border-border rounded">
                      <span className="text-sm text-text-secondary">
                        {getFeatureValue(service, feature)}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComparison;