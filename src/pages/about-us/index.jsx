import React from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import EmergencyContact from '../../components/ui/EmergencyContact';
import QuoteRequestCTA from '../../components/ui/QuoteRequestCTA';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import CertificationsSection from './components/CertificationsSection';
import StatisticsSection from './components/StatisticsSection';
import Icon from '../../components/AppIcon';
import IndiguardLogo from '../../assets/indiguard_logo_2.png';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <Breadcrumb />
        </div>

        {/* Hero Section */}
        <HeroSection />

        {/* Mission & Values Section */}
        <MissionSection />

        {/* Statistics Section */}
        <StatisticsSection />

        {/* Certifications & Credentials */}
        <CertificationsSection />

        {/* Quote Request CTA */}
{/*         <div className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <QuoteRequestCTA variant="inline" context="about" />
          </div>
        </div> */}
      </main>

      {/* Floating Components */}
{/*       <EmergencyContact position="floating" /> */}
{/*       <QuoteRequestCTA variant="floating" context="about" /> */}

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src={IndiguardLogo} 
                    alt="IndiGuard Logo" 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-heading font-bold">IndiGuard Security Ltd</div>
                  <div className="text-xs sm:text-sm text-primary-foreground/80">Professional Security Services</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-primary-foreground/80 mb-4 sm:mb-6 max-w-md">
                Providing comprehensive security solutions with professional excellence and unwavering commitment to protecting what matters most to our clients.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {['Facebook', 'Twitter', 'Linkedin'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  >
                    <Icon name={social} className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                {[
                  { name: 'Home', path: '/homepage' },
                  { name: 'Services', path: '/services-overview' },
                  { name: 'About Us', path: '/about-us' },
                  { name: 'Contact', path: '/contact-quote-request' }
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.path} 
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading font-semibold text-sm sm:text-base mb-3 sm:mb-4">Contact Info</h3>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" className="w-4 h-4" />
                  <span className="text-primary-foreground/80">+44735173221</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" className="w-4 h-4" />
                  <span className="text-primary-foreground/80">info.indiguard@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" className="w-4 h-4" />
                  <span className="text-primary-foreground/80">London, Cardiff, Midlands</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} IndiGuard Security Limited. All rights reserved. | Privacy Policy 
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
