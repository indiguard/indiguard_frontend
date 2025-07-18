import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ServiceFilters = ({ filters, onFilterChange, onClearFilters }) => {
  // const [isExpanded, setIsExpanded] = useState(false);

  // const serviceTypes = [
  //   'Corporate Security',
  //   'Event Protection',
  //   'Residential Services',
  //   'Executive Protection',
  //   'Specialized Solutions'
  // ];

  // const industries = [
  //   'Healthcare',
  //   'Education',
  //   'Retail',
  //   'Government',
  //   'Entertainment',
  //   'Technology',
  //   'Finance'
  // ];

  // const budgetRanges = [
  //   { label: 'Under $1,000/month', value: 'under-1000' },
  //   { label: '$1,000 - $5,000/month', value: '1000-5000' },
  //   { label: '$5,000 - $15,000/month', value: '5000-15000' },
  //   { label: '$15,000+/month', value: 'over-15000' }
  // ];

  // const coverageAreas = [
  //   'Downtown',
  //   'Business District',
  //   'Residential Areas',
  //   'Industrial Zone',
  //   'Airport/Transportation',
  //   'Educational Campus'
  // ];

  const handleFilterToggle = (category, value) => {
    const currentValues = filters[category] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    onFilterChange(category, newValues);
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters).reduce((count, filterArray) => {
      return count + (Array.isArray(filterArray) ? filterArray.length : 0);
    }, 0);
  };

  return (
    <div className="bg-surface rounded-lg shadow-elevation-2 border border-border">
      {/* Filter Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Filter" size={20} className="text-primary" />
            <h3 className="font-heading font-semibold text-primary">Filter Services</h3>
            {getActiveFiltersCount() > 0 && (
              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                {getActiveFiltersCount()}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            {getActiveFiltersCount() > 0 && (
              <Button
                variant="ghost"
                size="sm"
                iconName="X"
                iconPosition="left"
                onClick={onClearFilters}
              >
                Clear All
              </Button>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="lg:hidden p-2 hover:bg-primary/5 rounded-md transition-smooth"
            >
              <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Content */}
      <div className={`${isExpanded ? 'block' : 'hidden'} lg:block`}>
        <div className="p-4 space-y-6">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Search Services
            </label>
            <Input
              type="search"
              placeholder="Search by service name or keyword..."
              value={filters.search || ''}
              onChange={(e) => onFilterChange('search', e.target.value)}
              className="w-full"
            />
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">
              Service Type
            </label>
            <div className="space-y-2">
              {serviceTypes.map((type) => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer">
                  <Input
                    type="checkbox"
                    checked={(filters.serviceType || []).includes(type)}
                    onChange={() => handleFilterToggle('serviceType', type)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-text-secondary">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Industry */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">
              Industry Focus
            </label>
            <div className="space-y-2">
              {industries.map((industry) => (
                <label key={industry} className="flex items-center space-x-2 cursor-pointer">
                  <Input
                    type="checkbox"
                    checked={(filters.industry || []).includes(industry)}
                    onChange={() => handleFilterToggle('industry', industry)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-text-secondary">{industry}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">
              Budget Range
            </label>
            <div className="space-y-2">
              {budgetRanges.map((range) => (
                <label key={range.value} className="flex items-center space-x-2 cursor-pointer">
                  <Input
                    type="checkbox"
                    checked={(filters.budget || []).includes(range.value)}
                    onChange={() => handleFilterToggle('budget', range.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-text-secondary">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Coverage Area */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">
              Coverage Area
            </label>
            <div className="space-y-2">
              {coverageAreas.map((area) => (
                <label key={area} className="flex items-center space-x-2 cursor-pointer">
                  <Input
                    type="checkbox"
                    checked={(filters.coverageArea || []).includes(area)}
                    onChange={() => handleFilterToggle('coverageArea', area)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-text-secondary">{area}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFilters;