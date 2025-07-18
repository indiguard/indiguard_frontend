import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustIndicators = () => {
  

  const certifications = [
    {
      id: 1,
      icon: "Award",
      title: "State Licensed",
      description: "Fully licensed security agency"
    },
    {
      id: 3,
      icon: "Users",
      title: "Certified Team",
      description: "All guards professionally trained"
    },
    {
      id: 4,
      icon: "Clock",
      title: "24/7 Operations",
      description: "Round-the-clock monitoring"
    }
  ];

  const statistics = [
    {
      id: 1,
      number: "100+",
      label: "Clients Protected",
      icon: "Building"
    },
    {
      id: 2,
      number: "2+",
      label: "Years Experience",
      icon: "Calendar"
    },
    {
      id: 3,
      number: "99.9%",
      label: "Uptime Record",
      icon: "TrendingUp"
    },
    {
      id: 4,
      number: "25+",
      label: "Security Professionals",
      icon: "Users"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Award" size={24} color="#1B365D" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Trust & Excellence</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our commitment to excellence has earned the trust of businesses, institutions, and individuals across the region.
          </p>
        </div>

       

        {/* Statistics */}
        <div className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat) => (
              <div
                key={stat.id}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon 
                    name={stat.icon} 
                    size={32} 
                    className="text-primary group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-text-secondary font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-background rounded-lg p-6 text-center hover:shadow-elevation-2 transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={cert.icon} size={24} color="#D4A574" />
              </div>
              <h4 className="font-heading font-semibold text-primary mb-2">
                {cert.title}
              </h4>
              <p className="text-sm text-text-secondary">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Icon name="ShieldCheck" size={32} color="#1B365D" />
              <h3 className="text-2xl font-heading font-bold text-primary">
                Your Security is Our Priority
              </h3>
            </div>
            <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
              With comprehensive insurance coverage, state licensing, and a proven track record of excellence, 
              IndiGuard Security Limited provides the reliability and professionalism you can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;