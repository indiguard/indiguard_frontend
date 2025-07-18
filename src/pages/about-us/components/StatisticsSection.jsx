import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});

  const statistics = [
    {
      id: 'years',
      icon: 'Calendar',
      value: 2,
      suffix: '+',
      label: 'Years of Experience',
      description: 'Serving since 2023'
    },
    {
      id: 'clients',
      icon: 'Users',
      value: 100,
      suffix: '+',
      label: 'Clients Protected',
      description: 'Across multiple states'
    },
    {
      id: 'incidents',
      icon: 'Shield',
      value: 99.8,
      suffix: '%',
      label: 'Prevention Rate',
      description: 'Proactive security'
    },
    {
      id: 'response',
      icon: 'Clock',
      value: 3,
      suffix: ' min',
      label: 'Response Time',
      description: '24/7 emergency'
    },
    {
      id: 'employees',
      icon: 'UserCheck',
      value: 25,
      suffix: '+',
      label: 'Professionals',
      description: 'Trained staff'
    },
    {
      id: 'coverage',
      icon: 'MapPin',
      value: 4,
      suffix: ' Regions',
      label: 'Coverage',
      description: 'Regional presence'
    },
    {
      id: 'satisfaction',
      icon: 'Star',
      value: 98,
      suffix: '%',
      label: 'Satisfaction',
      description: 'Annual surveys'
    },
    {
      id: 'uptime',
      icon: 'Activity',
      value: 99.9,
      suffix: '%',
      label: 'System Uptime',
      description: 'Monitoring'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('statistics-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    statistics.forEach((stat) => {
      let current = 0;
      const increment = stat.value / 30; // Faster animation on mobile
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setAnimatedStats(prev => ({
          ...prev,
          [stat.id]: current
        }));
      }, 20);
    });
  };

  const formatValue = (stat) => {
    const value = animatedStats[stat.id] || 0;
    if (stat.id === 'incidents' || stat.id === 'satisfaction' || stat.id === 'uptime') {
      return value.toFixed(1);
    }
    return Math.floor(value);
  };

  return (
    <section id="statistics-section" className="py-12 sm:py-16 lg:py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-4 sm:mb-6">
            Security by the Numbers
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Our track record speaks for itself. These statistics reflect our commitment to excellence.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {statistics.map((stat) => (
            <div key={stat.id} className="text-center group px-2 sm:px-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon 
                  name={stat.icon} 
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" 
                />
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-accent">
                  {isVisible ? formatValue(stat) : 0}{stat.suffix}
                </div>
                <div className="font-heading font-semibold text-sm sm:text-base text-primary-foreground">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/80">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Context - Responsive */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
            <Icon name="TrendingUp" className="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto mb-2 sm:mb-3" />
            <h3 className="font-heading font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Growing Excellence</h3>
            <p className="text-xs sm:text-sm text-primary-foreground/80">
              Continuous improvement in service quality
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
            <Icon name="Award" className="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto mb-2 sm:mb-3" />
            <h3 className="font-heading font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Industry Recognition</h3>
            <p className="text-xs sm:text-sm text-primary-foreground/80">
              Awards validating our excellence
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
            <Icon name="Target" className="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto mb-2 sm:mb-3" />
            <h3 className="font-heading font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Proven Results</h3>
            <p className="text-xs sm:text-sm text-primary-foreground/80">
              Effective security solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;