import React from 'react';
import Icon from '../../../components/AppIcon';
import TeamMemberCard from './TeamMemberCard';

const DepartmentSection = ({ 
  department, 
  members, 
  onViewProfile, 
  onContactMember 
}) => {
  const getDepartmentIcon = (deptName) => {
    const icons = {
      'Field Operations': 'Shield',
      'Supervisory Team': 'Users',
      'Management': 'Crown',
      'Specialized Units': 'Target',
      'Training & Development': 'GraduationCap',
      'Emergency Response': 'AlertTriangle'
    };
    return icons[deptName] || 'Users';
  };

  const getDepartmentColor = (deptName) => {
    const colors = {
      'Field Operations': 'text-primary',
      'Supervisory Team': 'text-success',
      'Management': 'text-accent-foreground',
      'Specialized Units': 'text-warning-foreground',
      'Training & Development': 'text-secondary',
      'Emergency Response': 'text-error'
    };
    return colors[deptName] || 'text-text-primary';
  };

  if (!members || members.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      {/* Department Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className={`w-12 h-12 rounded-lg bg-background border-2 border-current ${getDepartmentColor(department)} flex items-center justify-center`}>
          <Icon 
            name={getDepartmentIcon(department)} 
            size={24} 
            className={getDepartmentColor(department)}
          />
        </div>
        <div>
          <h2 className="font-heading text-2xl font-semibold text-text-primary">
            {department}
          </h2>
          <p className="text-text-secondary">
            {members.length} {members.length === 1 ? 'member' : 'members'}
          </p>
        </div>
      </div>

      {/* Department Description */}
      <div className="mb-8 p-6 bg-background rounded-lg border border-border">
        <p className="text-text-secondary leading-relaxed">
          {getDepartmentDescription(department)}
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {members.map((member) => (
          <TeamMemberCard
            key={member.id}
            member={member}
            onViewProfile={onViewProfile}
            onContactMember={onContactMember}
          />
        ))}
      </div>
    </div>
  );
};

const getDepartmentDescription = (department) => {
  const descriptions = {
    'Field Operations': 'Our frontline security professionals who provide on-site protection services. These dedicated officers are the backbone of our operations, ensuring safety and security across all client locations with vigilance and professionalism.',
    'Supervisory Team': 'Experienced leaders who oversee field operations and ensure service quality. Our supervisors bring years of expertise to coordinate teams, manage client relationships, and maintain the highest standards of security service delivery.',
    'Management': 'Strategic leadership team responsible for company direction and client relations. Our management professionals combine extensive security industry experience with business acumen to drive innovation and excellence in security solutions.',
    'Specialized Units': 'Elite specialists trained in advanced security techniques and technologies. These experts handle high-risk situations, executive protection, cybersecurity threats, and specialized security challenges requiring advanced skills and training.',
    'Training & Development': 'Professional instructors and training coordinators who ensure our team maintains peak performance. They develop curriculum, conduct certifications, and keep our security professionals updated with the latest industry standards and techniques.',
    'Emergency Response': 'Rapid response specialists trained for crisis situations and emergency protocols. These highly trained professionals are available 24/7 to handle security emergencies, coordinate with law enforcement, and manage critical incidents.'
  };
  return descriptions[department] || 'Dedicated professionals committed to providing exceptional security services.';
};

export default DepartmentSection;