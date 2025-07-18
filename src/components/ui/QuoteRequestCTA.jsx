// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import Icon from '../AppIcon';
// import Button from './Button';

// const QuoteRequestCTA = ({
//   variant = 'floating',
//   context = 'general',
//   className = ''
// }) => {
//   const [isVisible, setIsVisible] = useState(true);
//   const location = useLocation();

//   // Don't show on contact page
//   if (location.pathname === '/contact-quote-request') {
//     return null;
//   }

//   const getContextualMessage = () => {
//     switch (context) {
//       case 'service':
//         return {
//           title: 'Interested in this service?',
//           subtitle: 'Get a customized security solution for your needs',
//           cta: 'Get Service Quote'
//         };
//       case 'team':
//         return {
//           title: 'Ready to work with our team?',
//           subtitle: 'Connect with our security professionals today',
//           cta: 'Request Consultation'
//         };
//       case 'about':
//         return {
//           title: 'Learn more about our approach?',
//           subtitle: 'Discover how we can protect what matters most',
//           cta: 'Get Custom Quote'
//         };
//       default:
//         return {
//           title: 'Need security services?',
//           subtitle: 'Get a free quote tailored to your requirements',
//           cta: 'Get Free Quote'
//         };
//     }
//   };

//   const contextMessage = getContextualMessage();

//   const handleQuoteRequest = () => {
//     window.location.href = '/contact-quote-request';
//   };

//   const handleDismiss = () => {
//     setIsVisible(false);
//   };

//   if (!isVisible) return null;

//   if (variant === 'floating') {
//     return (
//       <div className="fixed bottom-6 left-6 z-200 max-w-sm">
//         <div className="bg-surface rounded-lg shadow-elevation-4 border border-border p-4 animate-slide-up">
//           <div className="flex items-start justify-between mb-3">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
//                 <Icon name="MessageSquare" size={16} color="#1A202C" />
//               </div>
//               <span className="font-medium text-primary">{contextMessage.title}</span>
//             </div>
//             <button
//               onClick={handleDismiss}
//               className="p-1 hover:bg-muted rounded transition-smooth">

//               <Icon name="X" size={16} />
//             </button>
//           </div>
          
//           <p className="text-sm text-text-secondary mb-4">
//             {contextMessage.subtitle}
//           </p>
          
//           <div className="space-y-2">
//             <Button
//               variant="primary"
//               size="sm"
//               fullWidth
//               iconName="ArrowRight"
//               iconPosition="right"
//               onClick={handleQuoteRequest}>

//               {contextMessage.cta}
//             </Button>
            
//             <div className="flex items-center justify-center space-x-4 text-xs text-text-secondary">
//               <div className="flex items-center space-x-1">
//                 <Icon name="Clock" size={12} />
//                 <span>24hr response</span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <Icon name="Shield" size={12} />
//                 <span>Free consultation</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>);

//   }

//   if (variant === 'banner') {
//     return (
//       <div className={`bg-primary text-primary-foreground py-4 ${className}`}>
//         <div className="container mx-auto px-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <Icon name="MessageSquare" size={24} />
//               <div>
//                 <h3 className="font-heading font-semibold">{contextMessage.title}</h3>
//                 <p className="text-sm opacity-90">{contextMessage.subtitle}</p>
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-3">
//               <Button
//                 variant="secondary"
//                 iconName="ArrowRight"
//                 iconPosition="right"
//                 onClick={handleQuoteRequest}>

//                 {contextMessage.cta}
//               </Button>
//               <button
//                 onClick={handleDismiss}
//                 className="p-2 hover:bg-white/10 rounded transition-smooth">

//                 <Icon name="X" size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>);

//   }

//   // Inline variant
//   return (
//     <div className={`bg-accent/10 border border-accent/20 rounded-lg p-6 ${className}`}>
//       <div className="flex items-start space-x-4">
//         <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
//           <Icon name="MessageSquare" size={24} color="#1A202C" />
//         </div>
        
//         <div className="flex-1">
//           <h3 className="font-heading font-semibold text-primary mb-2">
//             {contextMessage.title}
//           </h3>
//           <p className="text-text-secondary mb-4">
//             {contextMessage.subtitle}
//           </p>
          
//           <div className="flex items-center space-x-4">
//             <Button
//               variant="primary"
//               iconName="ArrowRight"
//               iconPosition="right"
//               onClick={handleQuoteRequest}>

//               {contextMessage.cta}
//             </Button>
            
//             <div className="flex items-center space-x-4 text-sm text-text-secondary">
//               <div className="flex items-center space-x-1">
//                 <Icon name="Clock" size={16} />
//                 <span>24hr response</span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <Icon name="Shield" size={16} />
//                 <span>Free consultation</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>);

// };

// export default QuoteRequestCTA;


import React, { useState, useEffect } from 'react'; // useEffect is needed for sessionStorage check on mount
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const QuoteRequestCTA = ({
  variant = 'floating',
  context = 'general',
  className = ''
}) => {
  // Use a constant key for sessionStorage to avoid typos
  const SESSION_STORAGE_KEY = 'quoteRequestCTADismissed';

  // Initialize isVisible state based on sessionStorage.
  // If the key exists in sessionStorage, it means the CTA was dismissed in this session.
  const [isVisible, setIsVisible] = useState(() => {
    const dismissed = sessionStorage.getItem(SESSION_STORAGE_KEY);
    return dismissed !== 'true'; // If 'true' is found, it's dismissed, so isVisible should be false. Otherwise, true.
  });

  const location = useLocation();

  // Don't show on contact page, regardless of session storage
  if (location.pathname === '/contact-quote-request') {
    return null;
  }

  // If the CTA is not visible due to dismissal, return null immediately
  if (!isVisible) return null;

  const getContextualMessage = () => {
    switch (context) {
      case 'service':
        return {
          title: 'Interested in this service?',
          subtitle: 'Get a customized security solution for your needs',
          cta: 'Get Service Quote'
        };
      case 'team':
        return {
          title: 'Ready to work with our team?',
          subtitle: 'Connect with our security professionals today',
          cta: 'Request Consultation'
        };
      case 'about':
        return {
          title: 'Learn more about our approach?',
          subtitle: 'Discover how we can protect what matters most',
          cta: 'Get Custom Quote'
        };
      default:
        return {
          title: 'Need security services?',
          subtitle: 'Get a free quote tailored to your requirements',
          cta: 'Get Free Quote'
        };
    }
  };

  const contextMessage = getContextualMessage();

  const handleQuoteRequest = () => {
    // Optionally, you might want to dismiss the CTA when the user clicks to request a quote
    // handleDismiss(); // Uncomment this line if you want it to be dismissed after clicking the CTA button
    window.location.href = '/contact-quote-request';
  };

  const handleDismiss = () => {
    setIsVisible(false); // Hide the component
    sessionStorage.setItem(SESSION_STORAGE_KEY, 'true'); // Store dismissal in session storage
  };

  // The rest of your component's rendering logic remains largely the same,
  // but it will only render if isVisible is true (checked at the top).
  if (variant === 'floating') {
    return (
      <div className="fixed bottom-6 left-6 z-200 max-w-sm">
        <div className="bg-surface rounded-lg shadow-elevation-4 border border-border p-4 animate-slide-up">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Icon name="MessageSquare" size={16} color="#1A202C" />
              </div>
              <span className="font-medium text-primary">{contextMessage.title}</span>
            </div>
            <button
              onClick={handleDismiss}
              className="p-1 hover:bg-muted rounded transition-smooth">
              <Icon name="X" size={16} />
            </button>
          </div>
          
          <p className="text-sm text-text-secondary mb-4">
            {contextMessage.subtitle}
          </p>
          
          <div className="space-y-2">
            <Button
              variant="primary"
              size="sm"
              fullWidth
              iconName="ArrowRight"
              iconPosition="right"
              onClick={handleQuoteRequest}>
              {contextMessage.cta}
            </Button>
            
            <div className="flex items-center justify-center space-x-4 text-xs text-text-secondary">
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={12} />
                <span>24hr response</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Shield" size={12} />
                <span>Free consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className={`bg-primary text-primary-foreground py-4 ${className}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="MessageSquare" size={24} />
              <div>
                <h3 className="font-heading font-semibold">{contextMessage.title}</h3>
                <p className="text-sm opacity-90">{contextMessage.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button
                variant="secondary"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={handleQuoteRequest}>
                {contextMessage.cta}
              </Button>
              <button
                onClick={handleDismiss}
                className="p-2 hover:bg-white/10 rounded transition-smooth">
                <Icon name="X" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Inline variant
  return (
    <div className={`bg-accent/10 border border-accent/20 rounded-lg p-6 ${className}`}>
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon name="MessageSquare" size={24} color="#1A202C" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-heading font-semibold text-primary mb-2">
            {contextMessage.title}
          </h3>
          <p className="text-text-secondary mb-4">
            {contextMessage.subtitle}
          </p>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="primary"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={handleQuoteRequest}>
              {contextMessage.cta}
            </Button>
            
            <div className="flex items-center space-x-4 text-sm text-text-secondary">
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={16} />
                <span>24hr response</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Shield" size={16} />
                <span>Free consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequestCTA;
