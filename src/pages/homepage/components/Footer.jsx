import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
  { label: 'Home', path: '/homepage' },
  { label: 'Services Overview', path: '/services-overview' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact & Quote', path: '/contact-quote-request' }];


  const services = [
  { label: 'Corporate Security', path: '/services-overview' },
  { label: 'Event Security', path: '/services-overview' },
  { label: 'Vacant Property Inspections', path: '/services-overview' },
  { label: 'Warehouse Security', path: '/services-overview' },
  { label: 'Construction site security', path: '/services-overview' },
  { label: 'Mobile security Patrols', path: '/services-overview' }];


  const legalLinks = [
  { label: 'Privacy Policy', path: '/vacant-property' },
  // { label: 'Terms of Service', path: '#' }
  // { label: 'Licensing Information', path: '#' }
  ];


  const socialLinks = [
  { icon: 'Facebook', url: '#', label: 'Facebook' },
  { icon: 'Twitter', url: '#', label: 'Twitter' },
  { icon: 'Linkedin', url: '#', label: 'LinkedIn' },
  { icon: 'Instagram', url: '#', label: 'Instagram' }];


  const handleNewsletterSignup = () => {
    // Newsletter signup functionality
    alert('Newsletter signup functionality would be implemented here');
  };

  const handleQuoteRequest = () => {
    window.location.href = '/contact-quote-request';
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div>
                <h3 className="text-2xl font-heading font-bold">IndiGuard Security</h3>
                <p className="text-accent font-medium">Ltd</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Providing comprehensive security solutions with professional excellence and unwavering commitment to protecting what matters most to our clients.
            </p>

           
            

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) =>
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label={social.label}>

                  <Icon name={social.icon} size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) =>
              <li key={link.path}>
                  <a
                  href={link.path}
                  className="text-primary-foreground/80 hover:text-accent transition-smooth flex items-center space-x-2 group">

                    <Icon
                    name="ArrowRight"
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-300" />

                    <span>{link.label}</span>
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-accent">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) =>
              <li key={service.label}>
                  <a
                  href={service.path}
                  className="text-primary-foreground/80 hover:text-accent transition-smooth flex items-center space-x-2 group">

                    <Icon
                    name="Shield"
                    size={14}
                    className="group-hover:scale-110 transition-transform duration-300" />

                    <span>{service.label}</span>
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-accent">Stay Connected</h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={18} className="mt-1 text-accent" />
                <div>
                  <p className="text-primary-foreground/80">
                    London , Cardiff ,<br />
                    Midlands
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} className="text-accent" />
                <a
                  href="tel:+44735173221"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth">

                  +44735173221
                </a>   
                 <a
                  href="tel:+4474389236"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth">

                  +4474389236
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} className="text-accent" />
                <a
                  href="mailto:info.indiguard@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth">info.indiguard@gmail.com


                </a>
              </div>
            </div>

           
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-secondary py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-heading font-semibold text-accent mb-2">
                Ready to Secure Your Property?
              </h3>
              <p className="text-primary-foreground/80">
                Get a free consultation and customized security quote today.
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              iconName="MessageSquare"
              iconPosition="left"
              onClick={handleQuoteRequest}
              className="bg-accent text-accent-foreground hover:bg-accent/90">

              Get Free Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-primary/80 py-6 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className=" text-primary-foreground/60 text-sm ">
                © {currentYear} IndiGuard Security Limited. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) =>
              <a
                key={link.label}
                href={link.path}
                className="text-primary-foreground/60 hover:text-accent text-sm transition-smooth">

                  {link.label}
                </a>
              )}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center space-x-8 text-xs text-primary-foreground/60">
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} />
                <span>Licensed Security Agency</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ShieldCheck" size={16} />
                <span>Fully Insured & Bonded</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span>Certified Security Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;
