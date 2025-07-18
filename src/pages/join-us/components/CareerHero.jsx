import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CareerHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Briefcase" size={24} className="text-accent" />
              <span className="text-accent font-medium">Career Opportunities</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Protect. Serve.{' '}
              <span className="text-accent">Advance.</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-lg">
              Join IndiGuard Security and build a rewarding career in security. 
              We offer competitive compensation, comprehensive benefits, and clear 
              paths for advancement in a supportive environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              
              <Button
                variant="outline"
                size="lg"
                iconName="FileText"
                iconPosition="left"
                className="border-primary-foreground/20 text-primary hover:bg-primary-foreground/10"
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply Now
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
              <div>
                <div className="text-2xl font-heading font-bold text-accent">25+</div>
                <div className="text-sm text-primary-foreground/80">Security Professionals</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-accent">2+</div>
                <div className="text-sm text-primary-foreground/80">Years of Excellence</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-accent">24/7</div>
                <div className="text-sm text-primary-foreground/80">Career Support</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="bg-primary-foreground/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-primary-foreground/20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Column 1 */}
        <div className="space-y-4">
          <div className="w-full h-40 bg-accent rounded-lg flex flex-col items-center justify-center">
            <Icon name="Shield" size={80} className="text-primary" />
            <p className="text-xs text-white mt-2 text-center">Security Professionals</p>
          </div>

          <div className="w-full h-40 bg-primary-foreground/20 rounded-lg flex flex-col items-center justify-center">
            <Icon name="UserCheck" size={80} className="text-primary-foreground" />
            <p className="text-xs text-white mt-2 text-center">Leadership Opportunities</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <div className="w-full h-40 bg-primary-foreground/20 rounded-lg flex flex-col items-center justify-center">
            <Icon name="Target" size={80} className="text-primary-foreground" />
            <p className="text-xs text-white mt-2 text-center">Specialized Security</p>
          </div>

          <div className="w-full h-40 bg-accent/80 rounded-lg flex flex-col items-center justify-center">
            <Icon name="TrendingUp" size={80} className="text-primary" />
            <p className="text-xs text-white mt-2 text-center">Growing Careers, Building Futures</p>
          </div>
        </div>
    
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Icon name="Star" size={20} className="text-primary" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                <Icon name="Check" size={16} className="text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Banner */}
        <div className="mt-16 bg-accent/10 rounded-lg border border-accent/20 p-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-primary-foreground">
                  Now Hiring: Immediate Openings Available
                </h3>
                <p className="text-primary-foreground/80">
                  Multiple positions across all departments. Competitive pay and benefits.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;