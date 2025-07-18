import React, { useState } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const EmergencyContact = ({ position = 'floating' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (position === 'floating') {
    return (
      <div className="fixed bottom-6 right-6 z-200">
        <div className={`transition-all duration-300 ${isExpanded ? 'w-80' : 'w-auto'}`}>
          {isExpanded ? (
            <div className="bg-surface rounded-lg shadow-elevation-4 border border-border p-4 animate-slide-up">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-error rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={16} color="#FFFFFF" />
                  </div>
                  <span className="font-medium text-error">24/7 Emergency</span>
                </div>
                <button
                  onClick={toggleExpanded}
                  className="p-1 hover:bg-muted rounded transition-smooth"
                >
                  <Icon name="X" size={16} className="text-text-secondary" />
                </button>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-text-secondary mb-1">Emergency Hotline</p>
                  <a
                    href="tel:+74048120024"
                    className="flex items-center space-x-2 p-2 bg-error/5 rounded-md hover:bg-error/10 transition-smooth"
                  >
                    <Icon name="Phone" size={16} color="#E53E3E" />
                    <span className="font-data font-semibold text-error">(074) 4812-0024</span>
                  </a>
                </div>
                
                <div>
                  <p className="text-xs text-text-secondary mb-1">Emergency Email</p>
                  <a
                    href="mailto:info.indiguard@gmail.com"
                    className="flex items-center space-x-2 p-2 bg-primary/5 rounded-md hover:bg-primary/10 transition-smooth"
                  >
                    <Icon name="Mail" size={16} color="#1B365D" />
                    <span className="text-sm text-primary">info.indiguard@gmail.com</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-border">
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    iconName="MessageSquare"
                    iconPosition="left"
                    onClick={() => window.location.href = '/contact-quote-request'}
                  >
                    Request Immediate Response
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={toggleExpanded}
              className="bg-error text-white p-4 rounded-full shadow-elevation-3 hover:shadow-elevation-4 hover:scale-105 transition-all duration-200"
              aria-label="Emergency Contact"
            >
              <Icon name="Phone" size={24} />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Inline version for header or other components
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-error rounded-full flex items-center justify-center">
          <Icon name="Phone" size={12} color="#FFFFFF" />
        </div>
        <span className="text-xs font-medium text-error">24/7 Emergency</span>
      </div>
      
      <div className="flex items-center space-x-3">
        <a
          href="tel:+74048120024"
          className="font-data text-sm font-semibold text-primary hover:text-secondary transition-smooth"
        >
          (074) 4812-0024
        </a>
        
        <a
          href="info.indiguard@gmail.com"
          className="p-2 text-primary hover:bg-primary/10 rounded-md transition-smooth"
          aria-label="Emergency Email"
        >
          <Icon name="Mail" size={16} />
        </a>
      </div>
    </div>
  );
};

export default EmergencyContact;
