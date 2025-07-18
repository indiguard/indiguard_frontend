import React from 'react';
import Icon from '../../../components/AppIcon';

const BenefitsSection = () => {
  const benefits = [
    {
      category: 'Health & Wellness',
      icon: 'Heart',
      items: [
        'Comprehensive medical, dental, and vision insurance',
        'Health savings account (HSA) with company matching',
        'Mental health and wellness programs',
        'On-site fitness facilities at select locations',
        'Annual health screenings and wellness incentives'
      ]
    },
    {
      category: 'Financial Security',
      icon: 'DollarSign',
      items: [
        'Competitive salary with performance-based increases',
        'Overtime pay and shift differentials',
        'Profit-sharing bonuses for eligible employees',
        'Life and disability insurance coverage'
      ]
    },
    {
      category: 'Time Off & Flexibility',
      icon: 'Calendar',
      items: [
        'Paid time off (PTO) starting at 15 days annually',
        'Flexible scheduling options',
        'Paid parental leave',
        'Bereavement and jury duty leave'
      ]
    },
    {
      category: 'Career Development',
      icon: 'TrendingUp',
      items: [
        'Comprehensive paid training programs',
        'Tuition reimbursement for continuing education',
        'Professional certification support',
        'Clear advancement pathways',
        'Leadership development programs'
      ]
    },
    {
      category: 'Work Environment',
      icon: 'Shield',
      items: [
        'State-of-the-art equipment and technology',
        'Safe and supportive work environment',
        'Employee recognition programs',
        'Team building activities and events',
        'Open communication culture'
      ]
    },
    {
      category: 'Additional Perks',
      icon: 'Gift',
      items: [
        'Employee discount programs',
        'Referral bonuses for successful hires',
        'Company uniform and equipment provided',
        'Transportation allowances for certain positions',
        'Access to employee assistance programs'
      ]
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Why Choose IndiGuard Security Ltd?
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We believe in taking care of our team members because they take care of our clients. 
            Discover the comprehensive benefits and opportunities that make us an employer of choice 
            in the security industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.category}
              className="bg-background rounded-lg border border-border p-6 hover:shadow-elevation-2 transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={benefit.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary">
                  {benefit.category}
                </h3>
              </div>

              <ul className="space-y-3">
                {benefit.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-primary rounded-lg p-8 text-primary-foreground">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold mb-2">
              Join a Growing Team
            </h3>
            <p className="text-primary-foreground/80">
              Our numbers speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold mb-2">98.0%</div>
              <div className="text-sm text-primary-foreground/80">Employee Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold mb-2">25+</div>
              <div className="text-sm text-primary-foreground/80">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold mb-2">95%</div>
              <div className="text-sm text-primary-foreground/80">Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold mb-2">2+</div>
              <div className="text-sm text-primary-foreground/80">Years in Business</div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default BenefitsSection;