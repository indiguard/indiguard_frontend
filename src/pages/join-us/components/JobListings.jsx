import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const JobListings = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">
          Build Your Security Career With Us
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Join our team of dedicated professionals and take your security career to new heights.
          We offer rewarding opportunities for growth, development, and personal fulfillment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Career Path 1 */}
        <div className="border border-border rounded-lg p-6 bg-surface hover:bg-primary/5 transition-colors">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Icon name="Shield" size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-primary">
              Security Professionals
            </h3>
          </div>
          <p className="text-text-secondary mb-4">
            Start or advance your career in physical security with comprehensive training
            and clear paths for promotion.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
              <span>Hands-on training from industry experts</span>
            </li>
            <li className="flex items-start space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
              <span>Competitive compensation packages</span>
            </li>
            <li className="flex items-start space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
              <span>Flexible scheduling options</span>
            </li>
          </ul>
        </div>

        {/* Career Path 2 */}
        <div className="border border-border rounded-lg p-6 bg-surface hover:bg-primary/5 transition-colors">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Icon name="UserCheck" size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-primary">
              Leadership Opportunities
            </h3>
          </div>
          <p className="text-text-secondary mb-4">
            Grow into management roles with our leadership development programs
            and mentorship initiatives.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
              <span>Management training programs</span>
            </li>
            <li className="flex items-start space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
              <span>Performance-based promotions</span>
            </li>
            <li className="flex items-start space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
              <span>Team leadership experience</span>
            </li>
          </ul>
          
        </div>

        {/* Career Path 3 */}
        <div className="border border-border rounded-lg p-6 bg-surface hover:bg-primary/5 transition-colors">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Icon name="Target" size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-primary">
              Specialized Security
            </h3>
          </div>
          <p className="text-text-secondary mb-4">
            Develop specialized skills in areas like executive protection, K-9 handling,
            or cybersecurity.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
              <span>Advanced certification programs</span>
            </li>
            <li className="flex items-start space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
              <span>Specialized equipment training</span>
            </li>
            <li className="flex items-start space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
              <span>Premium compensation for specialized roles</span>
            </li>
          </ul>
          
        </div>

        {/* Career Path 4 */}
        <div className="border border-border rounded-lg p-6 bg-surface hover:bg-primary/5 transition-colors">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Icon name="FileText" size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-primary">
              Support & Administration
            </h3>
          </div>
          <p className="text-text-secondary mb-4">
            Contribute to our operations through HR, training, logistics and other
            essential support functions.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
              <span>Professional office environment</span>
            </li>
            <li className="flex items-start space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
              <span>Career development programs</span>
            </li>
            <li className="flex items-start space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
              <span>Team-oriented culture</span>
            </li>
          </ul>
          
        </div>
      </div>

      <div className="text-center mt-12 bg-primary/5 rounded-lg p-8 border border-primary/20">
  <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
    Your Security Career Awaits
  </h3>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
    {/* Slogan 1 */}
    <div className="p-4 bg-white/80 rounded-lg shadow-sm border border-border">
      <Icon name="Shield" size={24} className="text-primary mx-auto mb-3" />
      <p className="font-heading font-medium text-primary">
        "Protecting Today, Securing Tomorrow"
      </p>
    </div>
    
    {/* Slogan 2 */}
    <div className="p-4 bg-white/80 rounded-lg shadow-sm border border-border">
      <Icon name="Users" size={24} className="text-primary mx-auto mb-3" />
      <p className="font-heading font-medium text-primary">
        "Excellence in Every Assignment"
      </p>
    </div>
    
    {/* Slogan 3 */}
    <div className="p-4 bg-white/80 rounded-lg shadow-sm border border-border">
      <Icon name="TrendingUp" size={24} className="text-primary mx-auto mb-3" />
      <p className="font-heading font-medium text-primary">
        "Growing Careers, Building Futures"
      </p>
    </div>
  </div>

  <p className="text-text-secondary mt-8 mb-2 text-sm italic max-w-2xl mx-auto">
    We believe in the power of dedicated security professionals to make a difference.
  </p>
  <p className="text-text-secondary text-xs max-w-2xl mx-auto">
    Follow us to stay updated on career opportunities and industry insights.
  </p>
</div>
    </div>
  );
};

export default JobListings;