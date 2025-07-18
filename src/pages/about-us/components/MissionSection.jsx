import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  const values = [
    {
      icon: "Shield",
      title: "Integrity",
      description: "We operate with unwavering honesty and transparency in all our security operations and client relationships."
    },
    {
      icon: "Eye",
      title: "Vigilance",
      description: "Our constant watchfulness and attention to detail ensure comprehensive protection around the clock."
    },
    {
      icon: "Users",
      title: "Excellence",
      description: "We maintain the highest standards in training, equipment, and service delivery for superior security solutions."
    },
    {
      icon: "Heart",
      title: "Dedication",
      description: "Our commitment to client safety drives every decision and action we take in protecting what matters most."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Mission Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary mb-4 sm:mb-6">
            Our Mission & Values
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed">
           IndiGuard Security Ltd is a professional and reliable security services company founded in 2024, providing tailored protection across London, Cardiff, and the Midlands. We are fully SIA-licensed, committed to upholding the highest industry standards and delivering exceptional safety solutions to both residential and commercial clients.
           With a strong team of vetted, trained, and experienced security officers, we offer 24/7 response, mobile patrols, keyholding, and vacant property inspections. Our commitment to transparency, punctuality, and professionalism ensures our clients receive peace of mind and maximum value at all times.
           We operate with a client-first approach and pride ourselves on rapid deployment, local knowledge, and long-term trust.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group px-4 sm:px-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Icon 
                  name={value.icon} 
                  className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" 
                />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-primary mb-3 sm:mb-4">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Founding Story Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-primary/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-primary mb-4 sm:mb-6">
                Our Founding Story
              </h3>
              <div className="space-y-3 sm:space-y-4 text-text-secondary text-sm sm:text-base">
                <p>IndiGuard Security Ltd was founded by Samuel Da Costa, a driven entrepreneur with a strong background in frontline security operations and a vision to raise the standards of private security in the UK.</p>
                <p>Having personally experienced the gaps in traditional security services, Samuel was inspired to create a company built on reliability, integrity, and community trust.</p>
                <p>What began as a small local operation quickly gained traction due to Samuel’s hands-on leadership, attention to detail, and deep understanding of client needs.</p>
                <p>His commitment to delivering proactive, tailored protection led to the rapid expansion of the company’s services across Cardiff, London, and surrounding regions.</p>
                <p>Today, IndiGuard Security Ltd is recognised as a trusted subcontracted security provider for residential, retail, and industrial clients. Despite the growth, we continue to uphold our original values—personal service, rapid response, and unwavering professionalism.</p>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-accent/20 rounded-lg p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <Icon name="Quote" className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  <div className="text-xs sm:text-sm font-caption text-text-secondary">Company Motto</div>
                </div>
                <blockquote className="text-lg sm:text-xl font-heading font-medium text-primary italic">
                  "Security isn't just our business—it's our promise to protect what you value most."
                </blockquote>
                <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-text-secondary">
                  — Samuel Da Costa, Founder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;