import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import SecurityLogo from "../../../assets/security.jpg";


const ServiceHero = ({ service, onGetQuote }) => {
  return (
    <section className="relative bg-primary text-primary-foreground py-12 sm:py-16 lg:py-20 xl:py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/90"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            {/* Service Badge */}
            <div className="flex items-center space-x-2 text-accent">
              <Icon name="Shield" className="w-5 h-5" />
              <span className="text-xs sm:text-sm font-medium uppercase tracking-wide">
                Professional Security Service
              </span>
            </div>
            
            {/* Service Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              {service.name}
            </h1>
            
            {/* Service Description */}
            <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed">
              {service.description}
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {service.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 px-3 py-1 sm:py-2 rounded-full"
                >
                  <Icon name="Check" className="w-4 h-4" />
                  <span className="text-xs sm:text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button
                variant="secondary"
                size="lg"
                iconName="MessageSquare"
                iconPosition="left"
                onClick={onGetQuote}
                className="w-full sm:w-auto"
              >
                Get Free Quote
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.location.href = 'tel:+74048120024'}
                className="w-full sm:w-auto text-white border-white hover:bg-white/10"
              >
                Call (074) 4812-0024
              </Button>
            </div>
            
            {/* Service Highlights */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 sm:pt-4 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" className="w-4 h-4" />
                <span>24/7 Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" className="w-4 h-4" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" className="w-4 h-4" />
                <span>Expert Team</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-elevation-4">
              <Image
                src={SecurityLogo}
                alt="IndiGuard Security Ltd Leadership Team"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-4 right-4 sm:left-6 sm:right-6 bg-surface rounded-lg shadow-sm sm:shadow-elevation-3 p-4 sm:p-6">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-primary">{service.stats.experience}</div>
                  <div className="text-xs sm:text-sm text-text-secondary">Years Experience</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-primary">{service.stats.clients}</div>
                  <div className="text-xs sm:text-sm text-text-secondary">Satisfied Clients</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-primary">{service.stats.coverage}</div>
                  <div className="text-xs sm:text-sm text-text-secondary">Coverage Areas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;