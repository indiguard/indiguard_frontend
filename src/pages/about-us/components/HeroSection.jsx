import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import SecurityLogo from "../../../assets/security.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-primary/90 text-primary-foreground py-12 md:py-16 lg:py-20 xl:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center space-x-2 text-accent">
                <Icon name="Shield" className="w-5 h-5 md:w-6 md:h-6" />
                <span className="font-caption text-xs sm:text-sm font-medium tracking-wide uppercase">
                  Established 2023
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Protecting What
                <span className="block text-accent">Matters Most</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
                For over 2 years, IndiGuard Security Ltd has been the trusted guardian of businesses, 
                communities, and individuals across the nation.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-accent">2+</div>
                  <div className="text-xs sm:text-sm text-primary-foreground/80">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-accent">100+</div>
                  <div className="text-xs sm:text-sm text-primary-foreground/80">Clients Protected</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-accent">24/7</div>
                  <div className="text-xs sm:text-sm text-primary-foreground/80">Emergency Response</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a 
                  href="/join-us" 
                  className="inline-block"
                >
                  <Button
                    variant="outline"
                    iconName="FileText"
                    iconPosition="left"
                    className="border-primary-foreground text-primary hover:bg-blue hover:text-primary text-sm sm:text-base"
                  >
                    Apply Now
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Leadership Image - Order first on mobile */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-md lg:shadow-elevation-4">
              <Image
                src={SecurityLogo}
                alt="IndiGuard Security Ltd Leadership Team"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="bg-surface/95 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Award" className="w-5 h-5 sm:w-6 sm:h-6" color="#FFFFFF" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-primary text-sm sm:text-base">Industry Leader</div>
                      <div className="text-xs sm:text-sm text-text-secondary">Certified Security Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;