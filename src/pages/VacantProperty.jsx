import React from "react";
import { Link } from "react-router-dom";
import Icon from '@/components/AppIcon';
import Header from '@/components/ui/Header';

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services Overview', path: '/services-overview' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact & Quote', path: '/contact-quote-request' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', path: '#' },
  ];

  const socialLinks = [
    { icon: 'Facebook', url: '#', label: 'Facebook' },
    { icon: 'Twitter', url: '#', label: 'Twitter' },
    { icon: 'Linkedin', url: '#', label: 'LinkedIn' },
    { icon: 'Instagram', url: '#', label: 'Instagram' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-heading font-bold text-primary mb-4">Privacy Policy</h1>
          <p className="mb-8 text-text-secondary">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-heading font-semibold text-primary mb-4">1. Introduction</h2>
              <p className="text-text-secondary leading-relaxed">
                Welcome to IndiGuard Security Ltd. We respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-primary mb-4">2. Information We Collect</h2>
              <p className="text-text-secondary mb-4">We may collect the following types of information:</p>
              <ul className="space-y-3 list-disc pl-6 text-text-secondary">
                <li><strong>Personal Data:</strong> Name, email, phone number, etc.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, pages visited.</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-primary mb-4">3. How We Use Your Information</h2>
              <p className="text-text-secondary mb-4">We use your data to:</p>
              <ul className="space-y-3 list-disc pl-6 text-text-secondary">
                <li>Provide and maintain our services.</li>
                <li>Improve user experience.</li>
                <li>Send updates and marketing communications (if consented).</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-primary mb-4">4. Data Sharing & Disclosure</h2>
              <p className="text-text-secondary mb-4">We do not sell your data. However, we may share it with:</p>
              <ul className="space-y-3 list-disc pl-6 text-text-secondary">
                <li>Service providers (e.g., hosting, analytics).</li>
                <li>Legal authorities if required by law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-primary mb-4">5. Your Rights</h2>
              <p className="text-text-secondary mb-4">Depending on your location, you may have the right to:</p>
              <ul className="space-y-3 list-disc pl-6 text-text-secondary">
                <li>Access, correct, or delete your data.</li>
                <li>Opt out of marketing emails.</li>
                <li>Request data portability.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-primary mb-4">6. Security Measures</h2>
              <p className="text-text-secondary">
                We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-primary mb-4">7. Changes to This Policy</h2>
              <p className="text-text-secondary">
                We may update this policy periodically. We will notify you of significant changes via email or a notice on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-primary mb-4">8. Contact Us</h2>
              <p className="text-text-secondary">
                If you have questions, contact us at:
                <br />
                <strong>Email:</strong> info.indiguard@gmail.com
                <br />
                <strong>Phone Number:</strong> (074) 3898-2366
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
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
                {socialLinks.map((social) => (
                  <a
                    key={social.icon}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon name={social.icon} size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6 text-accent">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/80 hover:text-accent transition-smooth flex items-center space-x-2 group"
                    >
                      <Icon
                        name="ArrowRight"
                        size={14}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6 text-accent">Stay Connected</h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={18} className="mt-1 text-accent" />
                  <div>
                    <p className="text-primary-foreground/80">
                      London, Cardiff,<br />
                      Midlands
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} className="text-accent" />
                  <a
                    href="tel:+74038982366"
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    (074) 3898-2366
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} className="text-accent" />
                  <a
                    href="mailto:info.indiguard@gmail.com"
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    info.indiguard@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-primary/80 py-6 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center text-center ">
  <p className="text-primary-foreground/60 text-sm">
    © {currentYear} IndiGuard Security Limited. All rights reserved.
  </p>
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
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
