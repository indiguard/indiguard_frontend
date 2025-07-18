import React from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import EmergencyContact from '../../components/ui/EmergencyContact';
import QuoteRequestCTA from '../../components/ui/QuoteRequestCTA';
import QuoteRequestForm from './components/QuoteRequestForm';
import ContactInformation from './components/ContactInformation';
import TrustIndicators from './components/TrustIndicators';
import Icon from '../../components/AppIcon';

const ContactQuoteRequestPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Get Your Security Quote Today
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Professional security solutions tailored to your specific needs. 
              Free consultation and 24-hour quote response guaranteed.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={20} />
                <span>24hr Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={20} />
                <span>No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-6">
          <Breadcrumb />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Quote Request Form - Main Content */}
            <div className="lg:col-span-8">
              <QuoteRequestForm />
            </div>

            {/* Contact Information Sidebar */}
            <div className="lg:col-span-4">
              <ContactInformation />
            </div>
          </div>

          {/* Trust Indicators Section */}
          <div className="mt-16">
            <TrustIndicators />
          </div>

          {/* Additional Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Process Steps */}
            <div className="bg-surface rounded-lg shadow-elevation-2 p-6">
              <h3 className="text-lg font-heading font-semibold text-primary mb-4">
                Our Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">Submit Request</h4>
                    <p className="text-sm text-text-secondary">Fill out our detailed quote form</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">Site Assessment</h4>
                    <p className="text-sm text-text-secondary">Free on-site security evaluation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">Custom Proposal</h4>
                    <p className="text-sm text-text-secondary">Tailored security solution & pricing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">Implementation</h4>
                    <p className="text-sm text-text-secondary">Seamless service deployment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-surface rounded-lg shadow-elevation-2 p-6">
              <h3 className="text-lg font-heading font-semibold text-primary mb-4">
                Service Areas
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  <span className="text-sm text-text-primary">London</span>
                </div>
                 <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  <span className="text-sm text-text-primary">Newport</span>
                </div>
                 <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  <span className="text-sm text-text-primary">Swansea</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  <span className="text-sm text-text-primary">Cardiff</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  <span className="text-sm text-text-primary">Midlands</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-text-secondary">
                    Don't see your area? We're expanding! Contact us to discuss coverage.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-surface rounded-lg shadow-elevation-2 p-6">
              <h3 className="text-lg font-heading font-semibold text-primary mb-4">
                Why Choose IndiGuard Security?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success mt-1" />
                  <span className="text-sm text-text-primary">Licensed & fully insured</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success mt-1" />
                  <span className="text-sm text-text-primary">Background-checked personnel</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success mt-1" />
                  <span className="text-sm text-text-primary">24/7 monitoring & support</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success mt-1" />
                  <span className="text-sm text-text-primary">Advanced security technology</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success mt-1" />
                  <span className="text-sm text-text-primary">Customized security plans</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success mt-1" />
                  <span className="text-sm text-text-primary">Competitive pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Emergency Contact Widget */}
{/*       <EmergencyContact position="floating" /> */}

      {/* Quote Request CTA - Hidden on this page */}
{/*       <QuoteRequestCTA variant="floating" context="general" /> */}
    </div>
  );
};

export default ContactQuoteRequestPage;
