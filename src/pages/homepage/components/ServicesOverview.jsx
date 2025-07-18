import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { link } from 'd3';

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      icon: "Shield",
      title: "Mobile Security Patrols",
      description: "Scheduled patrols to deter crime, check premises, and ensure safety with visible security presence.",
      features: ["Regular patrols", "Crime deterrence", "Premises checks", "Safety verification"],
      link:"/services-overview"
    },
    {
      id: 2,
      icon: "Key",
      title: "Keyholding & Alarm Response",
      description: "24/7 response to alarm activations with secure keyholding and rapid emergency response.",
      features: ["Immediate response", "Secure key storage", "Alarm verification", "Emergency services liaison"],
      link:"/services-overview"
    },
    {
      id: 3,
      icon: "Home",
      title: "Vacant Property Inspections",
      description: "Prevent vandalism, theft and damage with regular checks and detailed condition reports.",
      features: ["Regular inspections", "Damage prevention", "Detailed reports", "Incident response"],
      link:"/services-overview"
    },
    {
      id: 4,
      icon: "Construction",
      title: "Construction Site Security",
      description: "Manned guards and patrols to protect high-value equipment, materials and prevent unauthorized access.",
      features: ["Equipment protection", "Material security", "Access control", "Night patrols"],
      link:"/services-overview"
    },
    {
      id: 5,
      icon: "Building",
      title: "Retail & Corporate Security",
      description: "Uniformed officers to monitor premises, deter theft and maintain a safe environment.",
      features: ["Visible deterrence", "Theft prevention", "Safety monitoring", "Incident management"],
      link:"/services-overview"
    }
  ];

  const handleServiceClick = (link) => {
    window.location.href = link;
  };

  const handleViewAllServices = () => {
    window.location.href = '/services-overview';
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Shield" size={24} color="#1B365D" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Specialized Security Services
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Professional security solutions tailored to protect your assets, property and business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-surface rounded-xl p-8 shadow-elevation-1 hover:shadow-elevation-3 transition-all duration-300 border border-border hover:border-primary/20 cursor-pointer"
              onClick={() => handleServiceClick(service.link)}
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Icon 
                  name={service.icon} 
                  size={32} 
                  className="text-primary group-hover:text-white transition-colors duration-300" 
                />
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-semibold text-primary group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} color="#38A169" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="pt-4">
                  <div className="flex items-center space-x-2 text-primary group-hover:text-secondary transition-colors">
                    {/* <span className="font-medium">Learn More</span> */}
                    <Icon 
                      name="ArrowRight" 
                      size={16} 
                      className="group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            iconName="Grid3x3"
            iconPosition="left"
            onClick={handleViewAllServices}
          >
            View All Services
          </Button>
          
          <div className="mt-6 flex items-center justify-center space-x-8 text-sm text-text-secondary">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span>24/7 Availability</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="ShieldCheck" size={16} />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} />
              <span>Certified Professionals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;