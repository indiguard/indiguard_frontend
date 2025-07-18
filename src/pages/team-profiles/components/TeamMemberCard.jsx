import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TeamMemberCard = ({ member, onViewProfile, onContactMember }) => {
  const getSpecializationColor = (specialization) => {
    const colors = {
      'Corporate Security': 'bg-primary/10 text-primary',
      'Residential Security': 'bg-success/10 text-success',
      'Event Security': 'bg-accent/10 text-accent-foreground',
      'Executive Protection': 'bg-warning/10 text-warning-foreground',
      'Cybersecurity': 'bg-secondary/10 text-secondary'
    };
    return colors[specialization] || 'bg-border text-text-secondary';
  };

  const getExperienceLevel = (years) => {
    if (years >= 15) return { label: 'Senior Expert', color: 'text-primary' };
    if (years >= 10) return { label: 'Expert', color: 'text-success' };
    if (years >= 5) return { label: 'Experienced', color: 'text-accent-foreground' };
    return { label: 'Professional', color: 'text-text-primary' };
  };

  const experienceLevel = getExperienceLevel(member.experience);

  return (
    <div className="bg-surface rounded-lg shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-300 overflow-hidden group">
      {/* Profile Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={member.photo}
          alt={`${member.name} - ${member.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSpecializationColor(member.specialization)}`}>
            {member.specialization}
          </span>
        </div>
        {member.isTeamLead && (
          <div className="absolute top-4 left-4">
            <div className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
              <Icon name="Star" size={12} />
              <span>Team Lead</span>
            </div>
          </div>
        )}
      </div>

      {/* Profile Content */}
      <div className="p-6">
        {/* Name and Title */}
        <div className="mb-4">
          <h3 className="font-heading text-lg font-semibold text-text-primary mb-1">
            {member.name}
          </h3>
          <p className="text-text-secondary font-medium">{member.title}</p>
        </div>

        {/* Experience and Level */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-text-secondary" />
            <span className="text-sm text-text-secondary">
              {member.experience} years experience
            </span>
          </div>
          <span className={`text-sm font-medium ${experienceLevel.color}`}>
            {experienceLevel.label}
          </span>
        </div>

        {/* Certifications */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Award" size={16} className="text-accent-foreground" />
            <span className="text-sm font-medium text-text-primary">Key Certifications</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {member.certifications.slice(0, 3).map((cert, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-border text-text-secondary text-xs rounded"
              >
                {cert}
              </span>
            ))}
            {member.certifications.length > 3 && (
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                +{member.certifications.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="MapPin" size={16} className="text-text-secondary" />
            <span className="text-sm font-medium text-text-primary">Service Areas</span>
          </div>
          <p className="text-sm text-text-secondary">
            {member.serviceAreas.join(', ')}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            variant="primary"
            fullWidth
            iconName="User"
            iconPosition="left"
            onClick={() => onViewProfile(member)}
          >
            View Full Profile
          </Button>
          
          {member.isTeamLead && (
            <Button
              variant="outline"
              fullWidth
              iconName="Phone"
              iconPosition="left"
              onClick={() => onContactMember(member)}
            >
              Contact Team Lead
            </Button>
          )}
        </div>

        {/* Quick Stats */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-lg font-semibold text-primary">{member.projectsCompleted}+</p>
              <p className="text-xs text-text-secondary">Projects</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-success">{member.clientRating}</p>
              <p className="text-xs text-text-secondary">Client Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;