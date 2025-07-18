import React from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const TeamFilters = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  totalMembers, 
  filteredCount 
}) => {
  const specializations = [
    'All Specializations',
    'Corporate Security',
    'Residential Security', 
    'Event Security',
    'Executive Protection',
    'Cybersecurity'
  ];

  const experienceLevels = [
    'All Experience Levels',
    'Professional (0-5 years)',
    'Experienced (5-10 years)',
    'Expert (10-15 years)',
    'Senior Expert (15+ years)'
  ];

  const certificationTypes = [
    'All Certifications',
    'CPP (Certified Protection Professional)',
    'PSP (Physical Security Professional)',
    'ASIS International',
    'Armed Security License',
    'First Aid/CPR',
    'Cybersecurity Certified'
  ];

  const serviceAreas = [
    'All Service Areas',
    'Downtown Business District',
    'Residential Communities',
    'Industrial Complexes',
    'Healthcare Facilities',
    'Educational Institutions',
    'Government Buildings'
  ];

  const handleSpecializationChange = (e) => {
    const value = e.target.value === 'All Specializations' ? '' : e.target.value;
    onFilterChange({ ...filters, specialization: value });
  };

  const handleExperienceChange = (e) => {
    const value = e.target.value === 'All Experience Levels' ? '' : e.target.value;
    onFilterChange({ ...filters, experienceLevel: value });
  };

  const handleCertificationChange = (e) => {
    const value = e.target.value === 'All Certifications' ? '' : e.target.value;
    onFilterChange({ ...filters, certification: value });
  };

  const handleServiceAreaChange = (e) => {
    const value = e.target.value === 'All Service Areas' ? '' : e.target.value;
    onFilterChange({ ...filters, serviceArea: value });
  };

  const handleSearchChange = (e) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handleTeamLeadToggle = () => {
    onFilterChange({ ...filters, teamLeadsOnly: !filters.teamLeadsOnly });
  };

  const hasActiveFilters = filters.search || filters.specialization || 
    filters.experienceLevel || filters.certification || filters.serviceArea || 
    filters.teamLeadsOnly;

  return (
    <div className="bg-surface rounded-lg shadow-elevation-1 p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={24} className="text-primary" />
          <div>
            <h2 className="font-heading text-xl font-semibold text-text-primary">
              Filter Team Members
            </h2>
            <p className="text-sm text-text-secondary">
              Showing {filteredCount} of {totalMembers} team members
            </p>
          </div>
        </div>
        
        {hasActiveFilters && (
          <Button
            variant="outline"
            iconName="X"
            iconPosition="left"
            onClick={onClearFilters}
          >
            Clear Filters
          </Button>
        )}
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
          />
          <Input
            type="search"
            placeholder="Search by name, title, or expertise..."
            value={filters.search}
            onChange={handleSearchChange}
            className="pl-10"
          />
        </div>
      </div>

      {/* Filter Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Specialization Filter */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Specialization
          </label>
          <select
            value={filters.specialization || 'All Specializations'}
            onChange={handleSpecializationChange}
            className="w-full px-3 py-2 border border-border rounded-md bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {specializations.map((spec) => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
        </div>

        {/* Experience Level Filter */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Experience Level
          </label>
          <select
            value={filters.experienceLevel || 'All Experience Levels'}
            onChange={handleExperienceChange}
            className="w-full px-3 py-2 border border-border rounded-md bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {experienceLevels.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        {/* Certification Filter */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Certification
          </label>
          <select
            value={filters.certification || 'All Certifications'}
            onChange={handleCertificationChange}
            className="w-full px-3 py-2 border border-border rounded-md bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {certificationTypes.map((cert) => (
              <option key={cert} value={cert}>{cert}</option>
            ))}
          </select>
        </div>

        {/* Service Area Filter */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Service Area
          </label>
          <select
            value={filters.serviceArea || 'All Service Areas'}
            onChange={handleServiceAreaChange}
            className="w-full px-3 py-2 border border-border rounded-md bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {serviceAreas.map((area) => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Additional Filters */}
      <div className="flex items-center space-x-6">
        <label className="flex items-center space-x-2 cursor-pointer">
          <Input
            type="checkbox"
            checked={filters.teamLeadsOnly}
            onChange={handleTeamLeadToggle}
            className="w-4 h-4"
          />
          <span className="text-sm text-text-primary">Team Leads Only</span>
        </label>

        <div className="flex items-center space-x-2 text-sm text-text-secondary">
          <Icon name="Info" size={16} />
          <span>Use filters to find specialists for your specific security needs</span>
        </div>
      </div>
    </div>
  );
};

export default TeamFilters;