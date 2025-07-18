import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Sia from "../../../assets/sia.jpg";
import Safe from "../../../assets/safe.jpg";
import Iso from "../../../assets/iso.jpg";

const CertificationsSection = () => {
  const certifications = [
    {
      name: "ISO 9001",
      description: "Quality Management Certification",
      logo: Iso,
      verified: true
    },
    {
      name: "SIA Approved Contractor",
      description: "Security Industry Authority Certified",
      logo: Sia,
      verified: true
    },
    {
      name: "Safe Contractor Approved",
      description: "Health & Safety Compliance Certified",
      logo: Safe,
      verified: true
    },
  ];

  const benefits = [
  {
    icon: "ShieldCheck",
    title: "SIA-Licensed Personnel",
    description: "Fully certified security guards with active licenses and compliance"
  },
  {
    icon: "Clock",
    title: "Emergency Response",
    description: "Round-the-clock support and swift dispatch for urgent security needs"
  },
  {
    icon: "Settings",
    title: "Customised Plans",
    description: "Tailor-made security strategies designed around each client's requirements"
  },
  {
    icon: "Truck",
    title: "Mobile Patrols",
    description: "Fast and reliable mobile units for on-site checks and deterrence"
  },
  {
    icon: "MapPin",
    title: "Real-Time Reporting",
    description: "GPS tracking and live incident reports for transparency and control"
  },
  {
    icon: "Building",
    title: "Multi-Sector Experience",
    description: "Trusted across residential, retail, and industrial environments"
  },
  {
    icon: "Tag",
    title: "Transparent Pricing",
    description: "Competitive rates with no hidden charges or fine-print surprises"
  },
  {
    icon: "Star",
    title: "Community Trust",
    description: "Proven partnerships with businesses and neighbourhoods across the UK"
  }
];

  return (
    <div className="bg-background">
      {/* Certifications Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header - Responsive */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary mb-4 sm:mb-6">
              Certifications & Credentials
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
              Our commitment to excellence is validated through industry certifications, comprehensive insurance coverage, 
              and recognition from leading security organizations.
            </p>
          </div>

          {/* Certifications Grid - Responsive */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-primary mb-6 sm:mb-8 text-center">
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-surface rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-sm sm:shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-300 flex flex-col items-center"
                >
                  {/* Responsive Image Container */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mb-4 sm:mb-6 bg-white rounded-lg sm:rounded-xl flex items-center justify-center p-2 sm:p-3 lg:p-4 shadow-xs sm:shadow-sm border border-border/10">
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  
                  {/* Verification Badge - Responsive */}
                  {cert.verified && (
                    <div className="flex items-center space-x-1 sm:space-x-2 text-success mb-3 sm:mb-4">
                      <Icon name="CheckCircle" size={16} sm:size={18} lg:size={20} />
                      <span className="text-xs sm:text-sm font-medium">CERTIFIED</span>
                    </div>
                  )}
                  
                  {/* Content - Responsive */}
                  <div className="text-center">
                    <h4 className="font-heading font-semibold text-primary mb-2 sm:mb-3 text-lg sm:text-xl">
                      {cert.name}
                    </h4>
                    <p className="text-sm sm:text-base text-text-secondary">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary mb-4 sm:mb-6">
              Why Choose IndiGuard Security?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
              We go beyond basic security services to deliver comprehensive protection solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-background rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-sm sm:shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon 
                      name={benefit.icon} 
                      size={24} 
                      className="text-primary" 
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary mb-2 sm:mb-3 text-lg sm:text-xl">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default CertificationsSection;