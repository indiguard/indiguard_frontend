import React from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import EmergencyContact from '../../components/ui/EmergencyContact';
import QuoteRequestCTA from '../../components/ui/QuoteRequestCTA';
import ServiceHero from './components/ServiceHero';
import ServiceTabs from './components/ServiceTabs';
import ServiceFAQ from './components/ServiceFAQ';

const ServiceDetailPage = () => {
  // Mock service data
  const service = {
    name: "Security Services",
    description: "Comprehensive security solutions designed to protect your business assets, employees, and facilities with professional-grade security services tailored to corporate environments.",
    heroImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200",
    features: ["24/7 Monitoring", "Trained Personnel", "Advanced Technology", "Emergency Response"],
    stats: {
      experience: "2+",
      clients: "100+",
      coverage: "4+"
    },
    overview: `Our Corporate Security Services provide comprehensive protection for businesses of all sizes. We understand that every organization has unique security challenges, which is why we develop customized security solutions that address your specific needs, industry requirements, and risk profile.\n\nOur team of experienced security professionals combines traditional security methods with cutting-edge technology to deliver superior protection for your corporate facilities, assets, and personnel. From access control and surveillance to emergency response and threat assessment, we provide end-to-end security solutions that give you peace of mind.`,
    benefits: [
      "Reduced security incidents and theft",
      "Enhanced employee safety and confidence",
      "Professional security presence and deterrent",
      "24/7 monitoring and rapid response",
      "Customized security protocols",
      "Detailed reporting and documentation",
      "Cost-effective security solutions",
      "Compliance with industry regulations"
    ],
    serviceAreas: [
      "Downtown Business District",
      "Corporate Office Parks",
      "Industrial Complexes",
      "Retail Centers",
      "Healthcare Facilities",
      "Educational Institutions",
      "Government Buildings",
      "Mixed-Use Developments"
    ],
    process: [
      {
        title: "Security Assessment",
        description: "Comprehensive evaluation of your facility, identifying vulnerabilities and security needs through detailed site analysis.",
        duration: "1-2 days"
      },
      {
        title: "Custom Plan Development",
        description: "Creation of tailored security protocols and procedures based on assessment findings and your specific requirements.",
        duration: "3-5 days"
      },
      {
        title: "Personnel Deployment",
        description: "Strategic placement of trained security personnel with proper briefing on site-specific protocols and procedures.",
        duration: "24-48 hours"
      },
      {
        title: "Technology Integration",
        description: "Installation and configuration of security systems including cameras, access control, and monitoring equipment.",
        duration: "2-3 days"
      },
      {
        title: "Ongoing Monitoring",
        description: "Continuous security oversight with regular patrols, system monitoring, and incident response coordination.",
        duration: "Ongoing"
      }
    ],
    equipment: [
      {
        name: "HD Surveillance Cameras",
        description: "High-definition cameras with night vision and motion detection capabilities",
        icon: "Camera",
        features: ["4K Resolution", "Night Vision", "Motion Detection", "Remote Access"]
      },
      {
        name: "Access Control Systems",
        description: "Advanced card readers and biometric systems for secure facility access",
        icon: "Lock",
        features: ["Card Readers", "Biometric Scanners", "Time Tracking", "Visitor Management"]
      },
      {
        name: "Communication Equipment",
        description: "Professional two-way radios and communication systems for coordination",
        icon: "Radio",
        features: ["Two-Way Radios", "Emergency Channels", "GPS Tracking", "Hands-Free Options"]
      },
      {
        name: "Mobile Patrol Vehicles",
        description: "Marked security vehicles equipped with emergency equipment and communication",
        icon: "Truck",
        features: ["GPS Tracking", "Emergency Equipment", "Communication Systems", "Visible Deterrent"]
      }
    ],
  };

  const handleGetQuote = () => {
    window.location.href = '/contact-quote-request';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <ServiceHero service={service} onGetQuote={handleGetQuote} />
        
        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="mb-6 px-2">
            <Breadcrumb />
          </div>
          
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-12">
              <ServiceTabs service={service} />
              
              {/* FAQ Section */}
              <div className="mt-8 md:mt-12 px-2">
                <ServiceFAQ service={service} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Quote Request CTA */}
        <div className="px-4 sm:px-6">
          <QuoteRequestCTA variant="banner" context="service" />
        </div>
      </main>
      
      {/* Floating Components */}
{/*       <EmergencyContact position="floating" /> */}
        {/* <QuoteRequestCTA variant="floating" context="service" /> */}
    </div>
  );
};

export default ServiceDetailPage;
