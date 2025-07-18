import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TeamMemberModal = ({ member, isOpen, onClose, onContactMember, onRequestQuote }) => {
  if (!isOpen || !member) return null;

  const getSpecializationColor = (specialization) => {
    const colors = {
      'Corporate Security': 'bg-primary/10 text-primary border-primary/20',
      'Residential Security': 'bg-success/10 text-success border-success/20',
      'Event Security': 'bg-accent/10 text-accent-foreground border-accent/20',
      'Executive Protection': 'bg-warning/10 text-warning-foreground border-warning/20',
      'Cybersecurity': 'bg-secondary/10 text-secondary border-secondary/20'
    };
    return colors[specialization] || 'bg-border text-text-secondary border-border';
  };

  return (
    <div className="fixed inset-0 z-300 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-black bg-opacity-50"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-surface shadow-elevation-4 rounded-lg">
          {/* Header */}
          <div className="relative">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-heading text-2xl font-semibold text-text-primary">
                Team Member Profile
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-border rounded-md transition-smooth"
              >
                <Icon name="X" size={24} className="text-text-secondary" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Photo and Basic Info */}
              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  {/* Profile Photo */}
                  <div className="relative mb-6">
                    <Image
                      src={member.photo}
                      alt={`${member.name} - ${member.title}`}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                    {member.isTeamLead && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
                          <Icon name="Star" size={16} />
                          <span>Team Lead</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Basic Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-text-primary">
                        {member.name}
                      </h3>
                      <p className="text-text-secondary font-medium">{member.title}</p>
                    </div>

                    <div className={`px-3 py-2 rounded-lg border ${getSpecializationColor(member.specialization)}`}>
                      <p className="text-sm font-medium">{member.specialization}</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 p-4 bg-background rounded-lg">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">{member.experience}</p>
                        <p className="text-xs text-text-secondary">Years Experience</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-success">{member.clientRating}</p>
                        <p className="text-xs text-text-secondary">Client Rating</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-accent-foreground">{member.projectsCompleted}+</p>
                        <p className="text-xs text-text-secondary">Projects</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-warning-foreground">{member.certifications.length}</p>
                        <p className="text-xs text-text-secondary">Certifications</p>
                      </div>
                    </div>

                    {/* Contact Actions */}
                    <div className="space-y-3">
                      <Button
                        variant="primary"
                        fullWidth
                        iconName="Phone"
                        iconPosition="left"
                        onClick={() => onContactMember(member)}
                      >
                        Contact {member.name.split(' ')[0]}
                      </Button>
                      
                      <Button
                        variant="outline"
                        fullWidth
                        iconName="MessageSquare"
                        iconPosition="left"
                        onClick={() => onRequestQuote(member)}
                      >
                        Request Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Detailed Information */}
              <div className="lg:col-span-2 space-y-8">
                {/* Professional Summary */}
                <div>
                  <h4 className="font-heading text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
                    <Icon name="User" size={20} className="text-primary" />
                    <span>Professional Summary</span>
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {member.summary}
                  </p>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="font-heading text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
                    <Icon name="Award" size={20} className="text-primary" />
                    <span>Certifications & Licenses</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {member.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-background rounded-lg">
                        <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                        <span className="text-sm text-text-primary">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialized Training */}
                <div>
                  <h4 className="font-heading text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
                    <Icon name="GraduationCap" size={20} className="text-primary" />
                    <span>Specialized Training</span>
                  </h4>
                  <div className="space-y-3">
                    {member.training.map((training, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 border border-border rounded-lg">
                        <Icon name="BookOpen" size={16} className="text-accent-foreground mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium text-text-primary">{training.title}</h5>
                          <p className="text-sm text-text-secondary">{training.institution}</p>
                          <p className="text-xs text-text-secondary mt-1">{training.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Areas */}
                <div>
                  <h4 className="font-heading text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <span>Service Coverage Areas</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {member.serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-background rounded-lg">
                        <Icon name="Map" size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-text-primary">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Highlights */}
                <div>
                  <h4 className="font-heading text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
                    <Icon name="Trophy" size={20} className="text-primary" />
                    <span>Career Highlights</span>
                  </h4>
                  <div className="space-y-3">
                    {member.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                        <Icon name="Star" size={16} className="text-accent-foreground mt-1 flex-shrink-0" />
                        <p className="text-sm text-text-primary">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Testimonial */}
                {member.testimonial && (
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
                      <Icon name="MessageCircle" size={20} className="text-primary" />
                      <span>Client Testimonial</span>
                    </h4>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                      <blockquote className="text-text-primary italic mb-4">
                        "{member.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <Icon name="User" size={20} color="#FFFFFF" />
                        </div>
                        <div>
                          <p className="font-medium text-text-primary">{member.testimonial.client}</p>
                          <p className="text-sm text-text-secondary">{member.testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;