import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInformation = () => {


  const contactMethods = [
    {
      icon: 'Phone',
      title: '24/7 Emergency Hotline',
      value: '(074) 3898-2366',
      description: 'Immediate response for security emergencies',
      action: 'tel:+447438982366',
      urgent: true
    },
    {
      icon: 'Mail',
      title: 'General Inquiries',
      value: 'info.indiguard@gmail.com',
      description: 'For quotes, questions, and general information',
      action: 'mailto:info.indiguard@gmail.com',
      urgent: false
    },
    {
      icon: 'Clock',
      title: 'Schedule Consultation',
      value: 'Book Online',
      description: 'Free security assessment and consultation',
      action: '#',
      urgent: false
    }
  ];

  const socialLinks = [
    { icon: 'Facebook', url: '#', label: 'Facebook' },
    { icon: 'Twitter', url: '#', label: 'Twitter' },
    { icon: 'Linkedin', url: '#', label: 'LinkedIn' },
    { icon: 'Instagram', url: '#', label: 'Instagram' }
  ];


  return (
    <div className="space-y-6">
      {/* Emergency Contact Banner */}
      <div className="bg-error text-error-foreground rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Icon name="Phone" size={20} color="#E53E3E" />
          </div>
          <div>
            <h3 className="font-heading font-semibold">24/7 Emergency Response</h3>
            <p className="text-sm opacity-90">Immediate security assistance available</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <a
            href="tel:+447351732210"
            className="text-2xl font-data font-bold hover:opacity-80 transition-smooth"
          >
            (073) 5173-2210
          </a>
          <Button
            variant="secondary"
            size="sm"
            iconName="Phone"
            iconPosition="left"
            onClick={() => window.location.href = 'tel:+447351732210'}
          >
            Call Now
          </Button>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="bg-surface rounded-lg shadow-elevation-2 p-6">
        <h3 className="text-lg font-heading font-semibold text-primary mb-4">
          Contact Methods
        </h3>
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`flex items-start space-x-4 p-4 rounded-lg border transition-smooth hover:shadow-elevation-1 ${
                method.urgent ? 'border-error/20 bg-error/5' : 'border-border hover:border-primary/20'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                method.urgent ? 'bg-error text-white' : 'bg-primary/10 text-primary'
              }`}>
                <Icon name={method.icon} size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-text-primary">{method.title}</h4>
                <p className={`font-data font-semibold ${
                  method.urgent ? 'text-error' : 'text-primary'
                }`}>
                  {method.value}
                </p>
                <p className="text-sm text-text-secondary">{method.description}</p>
              </div>
              <a
                href={method.action}
                className={`p-2 rounded-md transition-smooth ${
                  method.urgent 
                    ? 'text-error hover:bg-error/10' :'text-primary hover:bg-primary/10'
                }`}
              >
                <Icon name="ExternalLink" size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>

      

      {/* Response Time Guarantee */}
      <div className="bg-success/5 border border-success/20 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-3">
          <Icon name="Clock" size={24} color="#38A169" />
          <h3 className="text-lg font-heading font-semibold text-success">
            Response Time Guarantee
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-heading font-bold text-success">24hrs</div>
            <p className="text-sm text-text-secondary">Quote Response</p>
          </div>
          <div>
            <div className="text-2xl font-heading font-bold text-success">4hrs</div>
            <p className="text-sm text-text-secondary">Urgent Requests</p>
          </div>
          <div>
            <div className="text-2xl font-heading font-bold text-success">15min</div>
            <p className="text-sm text-text-secondary">Emergency Response</p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-surface rounded-lg shadow-elevation-2 p-6">
        <h3 className="text-lg font-heading font-semibold text-primary mb-4">
          Follow Us
        </h3>
        <div className="flex space-x-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-smooth"
              aria-label={social.label}
            >
              <Icon name={social.icon} size={20} />
            </a>
          ))}
        </div>
        <p className="text-sm text-text-secondary mt-3">
          Stay updated with security tips, company news, and industry insights.
        </p>
      </div>
    </div>
  );
};

export default ContactInformation;
