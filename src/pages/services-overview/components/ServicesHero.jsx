import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import SecurityLogo from "../../../assets/security.jpg";

const ServicesHero = ({ onFilterChange }) => {
  return (
    <div className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
          alt="Professional security team"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Text Content - Left Side */}
          <div className="lg:w-2/3">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Shield" size={24} className="text-accent" />
              <span className="text-accent font-medium">Comprehensive Security Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-6">
              Professional Security Services
              <span className="block text-accent">Tailored for You</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              From corporate protection to residential security, discover our comprehensive range of professional security services designed to protect what matters most to you.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                variant="secondary"
                iconName="MessageSquare"
                iconPosition="left"
                onClick={() => window.location.href = '/contact-quote-request'}
              >
                Get Free Quote
              </Button>
              <Button
                variant="ghost"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.location.href = 'tel:+74038982366'}
                className="w-full sm:w-auto text-white border-white hover:bg-white/10"
              >
                Emergency: (074) 3898-2366
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent mb-1">100+</div>
                <div className="text-sm text-primary-foreground/80">Active Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent mb-1">24/7</div>
                <div className="text-sm text-primary-foreground/80">Emergency Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent mb-1">2+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent mb-1">99.8%</div>
                <div className="text-sm text-primary-foreground/80">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Security Image - Fixed Right Side */}
          <div className="order-1 lg:order-2 w-full lg:w-1/3 flex justify-end">
  <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-elevation-4">
    <Image
      src={SecurityLogo}
      alt="IndiGuard Security"
      className="w-full h-full object-cover"
    />
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;