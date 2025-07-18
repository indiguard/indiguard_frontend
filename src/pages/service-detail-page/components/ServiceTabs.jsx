import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceTabs = ({ service }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    { id: 'process', label: 'Process', icon: 'GitBranch' },
    { id: 'equipment', label: 'Equipment', icon: 'Shield' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-primary mb-3 sm:mb-4">
                Service Overview
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-4 sm:mb-6">
                {service.overview}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="font-medium sm:font-semibold text-primary mb-2 sm:mb-3">Key Benefits</h4>
                <ul className="space-y-1 sm:space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={14} className="text-success mt-0.5 sm:mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-text-secondary">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium sm:font-semibold text-primary mb-2 sm:mb-3">Service Areas</h4>
                <ul className="space-y-1 sm:space-y-2">
                  {service.serviceAreas.map((area, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="MapPin" size={14} className="text-accent mt-0.5 sm:mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-text-secondary">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
        
      case 'process':
        return (
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-primary mb-3 sm:mb-4">
              Our Process
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {service.process.map((step, index) => (
                <div key={index} className="flex space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium sm:font-semibold text-primary mb-1 sm:mb-2">{step.title}</h4>
                    <p className="text-sm sm:text-base text-text-secondary">{step.description}</p>
                    {step.duration && (
                      <div className="flex items-center space-x-1 sm:space-x-2 mt-1 sm:mt-2 text-xs sm:text-sm text-accent">
                        <Icon name="Clock" size={12} />
                        <span>{step.duration}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'equipment':
        return (
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-primary mb-3 sm:mb-4">
              Equipment & Technology
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {service.equipment.map((item, index) => (
                <div key={index} className="bg-surface border border-border rounded-lg p-3 sm:p-4">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={item.icon} size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium sm:font-semibold text-primary mb-1 sm:mb-2">{item.name}</h4>
                      <p className="text-xs sm:text-sm text-text-secondary mb-1 sm:mb-2">{item.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {item.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-accent/10 text-accent px-2 py-0.5 sm:py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'pricing':
        return (
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-primary mb-3 sm:mb-4">
              Pricing Structure
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {service.pricing?.map((plan, index) => (
                <div 
                  key={index}
                  className={`border rounded-lg p-4 sm:p-6 ${
                    plan.popular 
                      ? 'border-primary bg-primary/5' :'border-border bg-surface'
                  }`}
                >
                  {plan.popular && (
                    <div className="text-center mb-3 sm:mb-4">
                      <span className="bg-primary text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4 sm:mb-6">
                    <h4 className="font-medium sm:font-semibold text-primary mb-1 sm:mb-2">{plan.name}</h4>
                    <div className="text-2xl sm:text-3xl font-bold text-primary">{plan.price}</div>
                    <div className="text-xs sm:text-sm text-text-secondary">{plan.period}</div>
                  </div>
                  
                  <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    {plan.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-1 sm:space-x-2">
                        <Icon name="Check" size={14} className="text-success mt-0.5 sm:mt-1 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-xs text-text-secondary text-center">{plan.note}</p>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'cases':
        return (
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-primary mb-3 sm:mb-4">
              Case Studies
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {service.caseStudies?.map((study, index) => (
                <div key={index} className="border border-border rounded-lg p-4 sm:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    <div className="md:col-span-1">
                      <div className="relative overflow-hidden rounded-lg h-40 sm:h-48">
                        <Image
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h4 className="font-medium sm:font-semibold text-primary mb-1 sm:mb-2">{study.title}</h4>
                      <p className="text-sm sm:text-base text-text-secondary mb-3 sm:mb-4">{study.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div>
                          <span className="text-xs sm:text-sm font-medium text-primary">Challenge:</span>
                          <p className="text-xs sm:text-sm text-text-secondary">{study.challenge}</p>
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-medium text-primary">Solution:</span>
                          <p className="text-xs sm:text-sm text-text-secondary">{study.solution}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-xs sm:text-sm">
                        <div className="flex items-center space-x-1">
                          <Icon name="Calendar" size={12} className="text-accent" />
                          <span className="text-text-secondary">{study.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="MapPin" size={12} className="text-accent" />
                          <span className="text-text-secondary">{study.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="bg-surface rounded-lg shadow-sm overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-border">
        <div className="flex space-x-2 sm:space-x-4 md:space-x-8 overflow-x-auto px-2 sm:px-4 hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 py-3 sm:py-4 border-b-2 transition-smooth whitespace-nowrap text-sm sm:text-base ${
                activeTab === tab.id
                  ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-primary'
              }`}
            >
              <Icon name={tab.icon} size={16} className="flex-shrink-0" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="p-4 sm:p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ServiceTabs;