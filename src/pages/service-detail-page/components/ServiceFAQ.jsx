import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceFAQ = ({ service }) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What qualifications do your security personnel have?",
      answer: `All our security personnel undergo comprehensive background checks and hold valid security licenses. Our team includes former law enforcement officers, military veterans, and certified security professionals. Each guard receives ongoing training in emergency response, conflict resolution, and customer service. We maintain strict hiring standards and require annual recertification to ensure the highest level of professional service.`
    },
    {
      id: 2,
      question: "How quickly can you deploy security services?",
      answer: `For standard security services, we can typically deploy within 24-48 hours of contract signing. Emergency situations can be addressed within 2-4 hours depending on location and requirements. Our rapid response capability is supported by our extensive network of trained personnel and strategic positioning of resources across our service areas.`
    },
    {
      id: 3,
      question: "What areas do you provide security services in?",
      answer: `We provide comprehensive security services across major metropolitan areas including downtown business districts, suburban commercial centers, industrial complexes, and residential communities. Our coverage extends to a 50-mile radius from our main operations center, with specialized services available for remote locations upon request.`
    },
    {
      id: 4,
      question: "Do you provide 24/7 monitoring and support?",
      answer: `Yes, we offer round-the-clock monitoring through our state-of-the-art security operations center. Our 24/7 support includes live monitoring of security systems, immediate response to alarms, regular patrol check-ins, and emergency dispatch services. Our monitoring center is staffed by certified security professionals at all times.`
    },
    {
      id: 5,
      question: "What technology and equipment do you use?",
      answer: `We utilize cutting-edge security technology including HD surveillance cameras, motion detection systems, access control systems, two-way communication devices, and mobile patrol vehicles equipped with GPS tracking. Our equipment is regularly updated and maintained to ensure optimal performance and reliability.`
    },
    {
      id: 6,
      question: "How do you handle emergency situations?",
      answer: `Our emergency response protocol includes immediate assessment, notification of appropriate authorities, securing the area, and providing detailed incident reports. All personnel are trained in first aid, CPR, and emergency procedures. We maintain direct communication channels with local law enforcement and emergency services for rapid response coordination.`
    },
    {
      id: 7,
      question: "What insurance and licensing do you carry?",
      answer: `IndiGuard Security Limited is fully licensed, bonded, and insured. We carry comprehensive general liability insurance, professional liability coverage, and workers' compensation insurance. All licenses are current and regularly renewed in accordance with state and local regulations. Insurance certificates are available upon request.`
    },
    {
      id: 8,
      question: "Can you customize security services for specific needs?",
      answer: `Absolutely. We specialize in creating customized security solutions tailored to your specific requirements, industry regulations, and risk profile. Our security consultants conduct thorough site assessments and work with you to develop comprehensive security plans that address your unique challenges and objectives.`
    }
  ];

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3 sm:mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
          Get answers to common questions about our {service.name.toLowerCase()} and 
          security services. Can't find what you're looking for? Contact us directly.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-surface border border-border rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                aria-expanded={openFAQ === faq.id}
                aria-controls={`faq-content-${faq.id}`}
              >
                <h3 className="text-sm sm:text-base font-medium text-primary pr-3 sm:pr-4 text-left">
                  {faq.question}
                </h3>
                <Icon
                  name={openFAQ === faq.id ? "ChevronUp" : "ChevronDown"}
                  size={18}
                  className={`text-text-secondary transition-transform duration-200 flex-shrink-0 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                id={`faq-content-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === faq.id ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                {openFAQ === faq.id && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-4">
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-primary mb-2">
              Still have questions?
            </h3>
            <p className="text-sm sm:text-base text-text-secondary mb-3 sm:mb-4">
              Our security experts are here to help you find the right solution for your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
              <a
                href="/contact-quote-request"
                className="inline-flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm sm:text-base"
              >
                <Icon name="MessageSquare" size={16} className="flex-shrink-0" />
                <span>Contact Us</span>
              </a>
              
              <a
                href="tel:+74048120024"
                className="inline-flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors duration-200 text-sm sm:text-base"
              >
                <Icon name="Phone" size={16} className="flex-shrink-0" />
                <span>Call (074) 4812-0024</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFAQ;