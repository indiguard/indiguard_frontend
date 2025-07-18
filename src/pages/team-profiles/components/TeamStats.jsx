import React from 'react';
import Icon from '../../../components/AppIcon';

const TeamStats = ({ members }) => {
  const calculateStats = () => {
    const totalMembers = members.length;
    const teamLeads = members.filter(m => m.isTeamLead).length;
    const avgExperience = Math.round(
      members.reduce((sum, m) => sum + m.experience, 0) / totalMembers
    );
    const totalCertifications = members.reduce((sum, m) => sum + m.certifications.length, 0);
    const avgRating = (
      members.reduce((sum, m) => sum + parseFloat(m.clientRating), 0) / totalMembers
    ).toFixed(1);
    const totalProjects = members.reduce((sum, m) => sum + m.projectsCompleted, 0);

    const specializations = {};
    members.forEach(m => {
      specializations[m.specialization] = (specializations[m.specialization] || 0) + 1;
    });

    return {
      totalMembers,
      teamLeads,
      avgExperience,
      totalCertifications,
      avgRating,
      totalProjects,
      specializations
    };
  };

  const stats = calculateStats();

  const statCards = [
    {
      icon: 'Users',
      label: 'Total Team Members',
      value: stats.totalMembers,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: 'Star',
      label: 'Team Leaders',
      value: stats.teamLeads,
      color: 'text-accent-foreground',
      bgColor: 'bg-accent/10'
    },
    {
      icon: 'Clock',
      label: 'Avg. Experience',
      value: `${stats.avgExperience} years`,
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: 'Award',
      label: 'Total Certifications',
      value: stats.totalCertifications,
      color: 'text-warning-foreground',
      bgColor: 'bg-warning/10'
    },
    {
      icon: 'ThumbsUp',
      label: 'Avg. Client Rating',
      value: `${stats.avgRating}/5.0`,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: 'Briefcase',
      label: 'Projects Completed',
      value: `${stats.totalProjects}+`,
      color: 'text-error',
      bgColor: 'bg-error/10'
    }
  ];

  return (
    <div className="bg-surface rounded-lg shadow-elevation-2 p-6 mb-8">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="BarChart3" size={24} className="text-primary" />
        <div>
          <h2 className="font-heading text-xl font-semibold text-text-primary">
            Team Statistics
          </h2>
          <p className="text-sm text-text-secondary">
            Overview of our security team capabilities and experience
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {statCards.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
              <Icon name={stat.icon} size={20} className={stat.color} />
            </div>
            <p className="text-2xl font-bold text-text-primary mb-1">{stat.value}</p>
            <p className="text-xs text-text-secondary">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Specialization Breakdown */}
      <div className="border-t border-border pt-6">
        <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">
          Team Specializations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(stats.specializations).map(([specialization, count]) => {
            const percentage = ((count / stats.totalMembers) * 100).toFixed(1);
            return (
              <div key={specialization} className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div>
                  <p className="font-medium text-text-primary text-sm">{specialization}</p>
                  <p className="text-xs text-text-secondary">{count} members</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">{percentage}%</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamStats;