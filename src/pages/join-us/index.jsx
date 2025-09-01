import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import EmergencyContact from '../../components/ui/EmergencyContact';
import QuoteRequestCTA from '../../components/ui/QuoteRequestCTA';
import CareerHero from './components/CareerHero';
import JobListings from './components/JobListings';
import ApplicationForm from './components/ApplicationForm';
import BenefitsSection from './components/BenefitsSection';
import Icon from '../../components/AppIcon';
import IndiguardLogo from '../../assets/indiguard_logo_2.png';

const JoinUsPage = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-6 py-6">
          <Breadcrumb />
        </div>

        {/* Hero Section */}
        <CareerHero />

        {/* Main Content Area */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column (2/3 width) */}
            <div className="lg:col-span-2 space-y-12">
              {/* Job Listings */}
              <div id="job-listings">
                <JobListings onPositionSelect={handlePositionSelect} />
              </div>

              {/* Your Security Career Awaits Section */}
              <div className="bg-surface rounded-2xl shadow-elevation-1 p-8 border border-border">
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  Your Security Career Awaits
                </h2>
                <p className="text-lg text-text-secondary mb-6">
                  At IndiGuard Security, we don't just offer jobs - we build careers. Join a team that values your skills, invests in your growth, and rewards your dedication.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="ShieldCheck" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                        Industry-Leading Reputation
                      </h3>
                      <p className="text-text-secondary">
                        With over 15 years of experience, we've built a reputation for excellence in security services.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                        Team-First Culture
                      </h3>
                      <p className="text-text-secondary">
                        We prioritize our employees' wellbeing with competitive benefits and support.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="TrendingUp" size={24} className="text-success" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                        Career Growth
                      </h3>
                      <p className="text-text-secondary">
                        Clear pathways for advancement into leadership and specialized roles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                        Award-Winning Training
                      </h3>
                      <p className="text-text-secondary">
                        Recognized programs developing highly skilled security professionals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training & Development Section */}
              <section className="py-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                    Training & Career Development
                  </h2>
                  <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                    We invest in our people through comprehensive training programs and clear advancement pathways.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Training Programs */}
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="GraduationCap" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                          Comprehensive Training
                        </h3>
                        <p className="text-text-secondary mb-3">
                          Our hands-on training prepares you with practical skills for real-world security scenarios.
                        </p>
                        <ul className="space-y-1 text-sm text-text-secondary">
                          <li className="flex items-center space-x-2">
                            <Icon name="Check" size={14} className="text-success" />
                            <span>On-site practical training sessions</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Icon name="Check" size={14} className="text-success" />
                            <span>Ongoing skill development workshops</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Icon name="Check" size={14} className="text-success" />
                            <span>Scenario-based learning exercises</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="TrendingUp" size={24} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                          Career Growth Pathways
                        </h3>
                        <p className="text-text-secondary mb-3">
                          We invest in our team's professional development with clear progression opportunities.
                        </p>
                        <ul className="space-y-1 text-sm text-text-secondary">
                          <li className="flex items-center space-x-2">
                            <Icon name="Check" size={14} className="text-success" />
                            <span>Regular performance feedback and coaching</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Icon name="Check" size={14} className="text-success" />
                            <span>Leadership training for advancement</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Icon name="Check" size={14} className="text-success" />
                            <span>Cross-training in multiple security specialties</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                          Your Career Journey
                        </h3>
                        <p className="text-text-secondary">
                          From day one to leadership roles
                        </p>
                      </div>

                      <div className="space-y-6">
                        {[
                          { step: '1', title: 'Join Our Team', desc: 'Complete training & onboarding' },
                          { step: '2', title: 'Gain Experience', desc: 'Apply skills in real-world scenarios' },
                          { step: '3', title: 'Advance Your Career', desc: 'Move into specialized or leadership roles' },
                          { step: '4', title: 'Lead & Mentor', desc: 'Guide the next generation of security professionals' }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-heading font-bold">
                              {item.step}
                            </div>
                            <div>
                              <div className="font-heading font-semibold text-primary">{item.title}</div>
                              <div className="text-sm text-text-secondary">{item.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Application Form - Right Sidebar (1/3 width) */}
            <div className="lg:col-span-1" id="application-form">
              <ApplicationForm selectedPosition={selectedPosition} />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Final CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Ready to Start Your Security Career?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Join IndiGuard Security today and become part of a team that's committed to 
                excellence, growth, and making a difference in our community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-accent text-primary rounded-lg font-heading font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <Icon name="FileText" size={20} />
                  <span>Apply Now</span>
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                <p className="text-primary-foreground/80">
                  <Icon name="Clock" size={16} className="inline mr-2" />
                  We review applications within 24-48 hours and conduct interviews within one week.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Components */}
{/*       <EmergencyContact position="floating" /> */}
        {/*     <QuoteRequestCTA variant="floating" context="careers" /> */}

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                  <img src={IndiguardLogo} alt="IndiGuard Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-xl font-heading font-bold">IndiGuard Security Ltd</div>
                  <div className="text-sm text-primary-foreground/80">Professional Security Services</div>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Providing comprehensive security solutions with professional excellence and unwavering commitment to protecting what matters most to our clients.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/homepage" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
                <li><a href="/services-overview" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Services</a></li>
                <li><a href="/about-us" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
                <li><a href="/join-us" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Careers</a></li>
                <li><a href="/contact-quote-request" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span className="text-primary-foreground/80">(073) 5173-2210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span className="text-primary-foreground/80">info.indiguard@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span className="text-primary-foreground/80">London, Cardiff, Midlands, Newport</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © {new Date().getFullYear()} IndiGuard Security Limited. All rights reserved. | Privacy Policy 
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JoinUsPage;
