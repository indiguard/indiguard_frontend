import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import IniguardBackground from "../../../assets/indiguard_background.jpeg";


const HeroSection = () => {
  const handleGetQuote = () => {
    window.location.href = '/contact-quote-request';
  };

  const handleLearnMore = () => {
    window.location.href = '/services-overview';
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-secondary to-primary/90 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IniguardBackground}
          alt="Professional security team in action"
          className="w-full h-full object-cover " />

        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60"></div> */}
      </div>

      {/* Floating Security Elements */}
      <div className="absolute top-20 right-10 opacity-10 animate-pulse">
        <Icon name="Shield" size={120} color="#FFFFFF" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 animate-pulse delay-1000">
        <Icon name="Eye" size={80} color="#FFFFFF" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
              <Icon name="Award" size={20} color="#D4A574" />
              <span className="text-sm font-medium text-accent">Licensed & Certified Security Professionals</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold leading-tight">
                IndiGuard Security
                <span className="block text-accent">Protection</span>
              </h1>
              <p className="text-xl lg:text-2xl font-light opacity-90 leading-relaxed">
                Comprehensive security solutions tailored to protect what matters most to your business and family.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={16} color="#1A202C" />
                </div>
                <span className="font-medium">24/7 Response</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Users" size={16} color="#1A202C" />
                </div>
                <span className="font-medium">Expert Team</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="ShieldCheck" size={16} color="#1A202C" />
                </div>
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={16} color="#1A202C" />
                </div>
                <span className="font-medium">Local Coverage</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="secondary"
                size="lg"
                iconName="MessageSquare"
                iconPosition="left"
                onClick={handleGetQuote}
                className="bg-accent text-accent-foreground hover:bg-accent/90">

                Get Free Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={handleLearnMore}
                className="bg-accent text-accent-foreground hover:bg-accent/90">


                Our Services
              </Button>
            </div>

            {/* Emergency Contact */}
            <div className="flex items-center space-x-4 pt-6 border-t border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-error rounded-full flex items-center justify-center animate-pulse">
                  <Icon name="Phone" size={20} color="#FFFFFF" />
                </div>
                <div>
                  <p className="text-sm opacity-80">24/7 Emergency</p>
                  <a
                    href="tel:+74038982366"
                    className="font-data text-lg font-bold text-accent hover:text-white transition-smooth">

                    (074) 3898-2366
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image/Stats */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">2+</div>
                  <div className="text-sm text-white">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100+</div>
                  <div className="text-sm text-white">Clients Protected</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm text-white">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
                  <div className="text-sm text-white">Uptime</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-center space-x-4">
                  <Icon name="Award" size={24} color="#D4A574" />
                  <span className="text-sm text-white font-medium">Certified Security Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>);

};

export default HeroSection;