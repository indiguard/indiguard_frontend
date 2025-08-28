import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import EmergencyContact from '../../components/ui/EmergencyContact';
import QuoteRequestCTA from '../../components/ui/QuoteRequestCTA';
import ServicesHero from './components/ServicesHero';
import ServiceCard from './components/ServiceCard';
import ServiceComparison from './components/ServiceComparison';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ServicesOverview = () => {
  const [filters, setFilters] = useState({});
  const [selectedServices, setSelectedServices] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');

  const services = [
    {
      id: 1,
      name: "Mobile Security Patrols",
      description: "Scheduled patrols to deter crime, check premises, and ensure safety with visible security presence.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricingTier: "Standard",
      features: ["Regular patrols", "Crime deterrence", "Premises checks", "Safety verification"],
      useCases: ["Commercial properties", "Construction sites", "Industrial areas"],
      coverageAreas: ["Cardiff", "Midlands", "London", "Newport", "Bristol", "Swansea"],
      responseTime: "< 15 minutes",
      coverageHours: "24/7",
      personnelTraining: "Patrol Specialist",
      technologyIntegration: "GPS Tracking",
      reportingFrequency: "Daily",
      emergencyProtocols: "Standard",
      customizationLevel: "Medium",
      complianceStandards: "SIA Approved",
      link: "/mobile-security"
    },
    {
      id: 2,
      name: "Keyholding & Alarm Response",
      description: "24/7 response to alarm activations with secure keyholding and rapid emergency response.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricingTier: "Standard",
      features: ["Immediate response", "Secure key storage", "Alarm verification", "Emergency services liaison"],
      useCases: ["Business premises", "Retail stores", "Office buildings"],
      coverageAreas: ["Cardiff", "Midlands", "London", "Newport", "Bristol", "Swansea"],
      responseTime: "< 10 minutes",
      coverageHours: "24/7",
      personnelTraining: "Response Specialist",
      technologyIntegration: "Alarm Monitoring",
      reportingFrequency: "Per Incident",
      emergencyProtocols: "Standard",
      customizationLevel: "High",
      complianceStandards: "SIA Approved",
      link: "/keyholding"
    },
    {
      id: 3,
      name: "Vacant Property Inspections",
      description: "Prevent vandalism, theft and damage with regular checks and detailed condition reports.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricingTier: "Basic",
      features: ["Regular inspections", "Damage prevention", "Detailed reports", "Incident response"],
      useCases: ["Vacant properties", "Foreclosed homes", "Unoccupied buildings"],
      coverageAreas: ["Cardiff", "Midlands", "London", "Newport", "Bristol", "Swansea"],
      responseTime: "< 24 hours",
      coverageHours: "Scheduled",
      personnelTraining: "Inspection Specialist",
      technologyIntegration: "Reporting App",
      reportingFrequency: "Per Inspection",
      emergencyProtocols: "Basic",
      customizationLevel: "Medium",
      complianceStandards: "Property Standards",
      link: "/vacant-property"
    },
    {
      id: 4,
      name: "Construction Site Security",
      description: "Manned guards and patrols to protect high-value equipment, materials and prevent unauthorized access.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricingTier: "Premium",
      features: ["Equipment protection", "Material security", "Access control", "Night patrols"],
      useCases: ["Construction sites", "Renovation projects", "Development areas"],
      coverageAreas: ["Cardiff", "Midlands", "London", "Newport", "Bristol", "Swansea"],
      responseTime: "< 5 minutes",
      coverageHours: "24/7",
      personnelTraining: "Construction Specialist",
      technologyIntegration: "Site Monitoring",
      reportingFrequency: "Real-time",
      emergencyProtocols: "Enhanced",
      customizationLevel: "High",
      complianceStandards: "Construction Safety",
      link: "/construction-security"
    },
    {
      id: 5,
      name: "Retail & Corporate Security",
      description: "Uniformed officers to monitor premises, deter theft and maintain a safe environment.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricingTier: "Standard",
      features: ["Visible deterrence", "Theft prevention", "Safety monitoring", "Incident management"],
      useCases: ["Retail stores", "Corporate offices", "Business centers"],
      coverageAreas: ["Cardiff", "Midlands", "London", "Newport", "Bristol", "Swansea"],
      responseTime: "< 1 minute",
      coverageHours: "Business Hours",
      personnelTraining: "Retail Specialist",
      technologyIntegration: "CCTV Monitoring",
      reportingFrequency: "Shift Reports",
      emergencyProtocols: "Standard",
      customizationLevel: "High",
      complianceStandards: "Retail Security",
      link: "/retail-corporate-security"
    },
    {
      id: 6,
      name: "Events & Festivals Security",
      description: "Professional security services for events of all sizes, ensuring crowd safety and smooth operations.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricingTier: "Premium",
      features: [
        "Crowd management",
        "Access control",
        "VIP protection",
        "Emergency response planning",
        "Alcohol management",
        "Conflict resolution"
      ],
      useCases: ["Music festivals", "Corporate events", "Sporting events", "Community gatherings"],
      coverageAreas: ["Cardiff", "Midlands", "London", "Newport", "Bristol", "Swansea"],
      responseTime: "Immediate",
      coverageHours: "Event Duration",
      personnelTraining: "Event Security Specialist",
      technologyIntegration: "Event Management Systems",
      reportingFrequency: "Real-time",
      emergencyProtocols: "Event-specific",
      customizationLevel: "Very High",
      complianceStandards: "Event Safety",
      link: "/event-security"
    },
    {
      id: 7,
      name: "Warehouse & Logistics Security",
      description: "Comprehensive security solutions for warehouses, distribution centers, and logistics operations.",
      image: "https://imgs.search.brave.com/nq0a4StuXEOEZ-WkAtaz6vfEizEr8CNgWq83u10hYYA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3VhcmRpYW5zZWN1/cml0eWluYy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MTEvd2FyZWhvdXNl/LXNlY3VyaXR5LWd1/YXJkLmpwZw",
      pricingTier: "Standard",
      features: [
        "Inventory protection",
        "Access control systems",
        "24/7 monitoring",
        "Vehicle inspection",
        "Fire watch",
        "Shipping security"
      ],
      useCases: ["Warehouses", "Distribution centers", "Logistics hubs", "Storage facilities"],
      coverageAreas: ["Cardiff", "Midlands", "London", "Newport", "Bristol", "Swansea"],
      responseTime: "< 10 minutes",
      coverageHours: "24/7",
      personnelTraining: "Logistics Security Specialist",
      technologyIntegration: "Inventory Tracking Systems",
      reportingFrequency: "Daily",
      emergencyProtocols: "Enhanced",
      customizationLevel: "High",
      complianceStandards: "Supply Chain Security",
      link: "/warehouse-security"
    }
  ];

  const filteredServices = services.filter(service => {
    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      if (!service.name.toLowerCase().includes(searchTerm) && 
          !service.description.toLowerCase().includes(searchTerm)) {
        return false;
      }
    }

    // Service type filter
    if (filters.serviceType && filters.serviceType.length > 0) {
      if (!filters.serviceType.some(type => service.name.includes(type))) {
        return false;
      }
    }

    // Industry filter (simplified matching)
    if (filters.industry && filters.industry.length > 0) {
      const serviceIndustries = service.useCases.join(' ').toLowerCase();
      if (!filters.industry.some(industry => 
        serviceIndustries.includes(industry.toLowerCase())
      )) {
        return false;
      }
    }

    // Budget filter (simplified)
    if (filters.budget && filters.budget.length > 0) {
      const tierToBudget = {
        'Basic': 'under-1000',
        'Standard': '1000-5000',
        'Premium': '5000-15000'
      };
      if (!filters.budget.includes(tierToBudget[service.pricingTier])) {
        return false;
      }
    }

    // Coverage area filter
    if (filters.coverageArea && filters.coverageArea.length > 0) {
      if (!filters.coverageArea.some(area => 
        service.coverageAreas.some(serviceArea => 
          serviceArea.toLowerCase().includes(area.toLowerCase())
        )
      )) {
        return false;
      }
    }

    return true;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'rating':
        return b.rating - a.rating;
      case 'pricing':
        const pricingOrder = { 'Basic': 1, 'Standard': 2, 'Premium': 3 };
        return pricingOrder[a.pricingTier] - pricingOrder[b.pricingTier];
      default:
        return 0;
    }
  });

  const handleFilterChange = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  const handleServiceCompareToggle = (serviceId) => {
    setSelectedServices(prev => {
      const isSelected = prev.some(s => s.id === serviceId);
      if (isSelected) {
        return prev.filter(s => s.id !== serviceId);
      } else {
        const service = services.find(s => s.id === serviceId);
        return [...prev, service];
      }
    });
  };

  const handleRemoveFromComparison = (serviceId) => {
    setSelectedServices(prev => prev.filter(s => s.id !== serviceId));
  };

  const handleClearComparison = () => {
    setSelectedServices([]);
  };

  const handleRequestQuote = (service) => {
    if (Array.isArray(service)) {
      alert(`Quote requested for ${service.length} services: ${service.map(s => s.name).join(', ')}`);
    } else {
      alert(`Quote requested for: ${service.name}`);
    }
    window.location.href = '/contact-quote-request';
  };

  const handleViewCaseStudy = (service) => {
    alert(`Viewing case studies for: ${service.name}`);
  };

  const handleServiceClick = (link) => {
    window.location.href = link;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Footer data and functions
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/homepage' },
    { label: 'Services Overview', path: '/services-overview' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact & Quote', path: '/contact-quote-request' }
  ];

  
  const legalLinks = [
    { label: 'Privacy Policy', path: '/vacant-property' },
  ];

  const socialLinks = [
    { icon: 'Facebook', url: '#', label: 'Facebook' },
    { icon: 'Twitter', url: '#', label: 'Twitter' },
    { icon: 'Linkedin', url: '#', label: 'LinkedIn' },
    { icon: 'Instagram', url: '#', label: 'Instagram' }
  ];

  const handleFooterQuoteRequest = () => {
    window.location.href = '/contact-quote-request';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <ServicesHero onFilterChange={handleFilterChange} />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <Breadcrumb />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-heading font-semibold text-primary">
                  Security Services
                </h2>
                <p className="text-text-secondary">
                  {sortedServices.length} service{sortedServices.length !== 1 ? 's' : ''} available
                </p>
              </div>

              <div className="flex items-center space-x-4">
                {/* View Mode Toggle */}
                <div className="flex items-center border border-border rounded-md">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 transition-smooth ${
                      viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-text-secondary hover:text-primary'
                    }`}
                  >
                    <Icon name="Grid3X3" size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 transition-smooth ${
                      viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-text-secondary hover:text-primary'
                    }`}
                  >
                    <Icon name="List" size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Services Grid/List */}
            {sortedServices.length > 0 ? (
              <div className={
                viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-6'
              }>
                {sortedServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onRequestQuote={handleRequestQuote}
                    onViewCaseStudy={handleViewCaseStudy}
                    onCompareToggle={handleServiceCompareToggle}
                    isSelected={selectedServices.some(s => s.id === service.id)}
                    onClick={() => handleServiceClick(service.link)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                  No services found
                </h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your filters or search terms to find the security services you need.
                </p>
                <Button
                  variant="primary"
                  iconName="RotateCcw"
                  iconPosition="left"
                  onClick={handleClearFilters}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Service Comparison */}
      <ServiceComparison
        selectedServices={selectedServices}
        onRemoveService={handleRemoveFromComparison}
        onClearAll={handleClearComparison}
        onRequestQuote={handleRequestQuote}
      />

      {/* Other Services Section */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Looking for Different Security Solutions?
          </h2>
          <p className="text-white max-w-2xl mx-auto mb-8">
            We offer a wide range of specialized security services tailored to your unique needs. 
            Contact us to discuss custom security solutions not listed here.
          </p>
          <Button
            variant="primary"
            size="lg"
            iconName="Shield"
            iconPosition="left"
            onClick={() => window.location.href = '/contact-quote-request'}
          >
            Explore Other Security Services
          </Button>
        </div>
      </div>

      {/* Emergency Contact & Quote CTA */}
{/*       <EmergencyContact position="floating" /> */}
      {/*      <QuoteRequestCTA variant="floating" context="service" /> */}

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div>
                  <h3 className="text-2xl font-heading font-bold">IndiGuard Security</h3>
                  <p className="text-accent font-medium">Ltd</p>
                </div>
              </div>
              
              <p className="text-primary-foreground/80 leading-relaxed">
                Providing comprehensive security solutions with professional excellence and unwavering commitment to protecting what matters most to our clients.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.icon}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon name={social.icon} size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6 text-accent">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <a
                      href={link.path}
                      className="text-primary-foreground/80 hover:text-accent transition-smooth flex items-center space-x-2 group"
                    >
                      <Icon
                        name="ArrowRight"
                        size={14}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

           

            {/* Contact & Newsletter */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6 text-accent">Stay Connected</h4>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={18} className="mt-1 text-accent" />
                  <div>
                    <p className="text-primary-foreground/80">
                      London , Cardiff ,<br />
                      Midlands
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} className="text-accent" />
                  <a
                    href="tel:+44735173221"
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    +44735173221
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} className="text-accent" />
                  <a
                    href="mailto:info.indiguard@gmail.com"
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    info.indiguard@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-secondary py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-heading font-semibold text-accent mb-2">
                  Ready to Secure Your Property?
                </h3>
                <p className="text-primary-foreground/80">
                  Get a free consultation and customized security quote today.
                </p>
              </div>
              <Button
                variant="secondary"
                size="lg"
                iconName="MessageSquare"
                iconPosition="left"
                onClick={handleFooterQuoteRequest}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-primary/80 py-6 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-primary-foreground/60 text-sm">
                  © {currentYear} IndiGuard Security Limited. All rights reserved.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                {legalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.path}
                    className="text-primary-foreground/60 hover:text-accent text-sm transition-smooth"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-center space-x-8 text-xs text-primary-foreground/60">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} />
                  <span>Licensed Security Agency</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="ShieldCheck" size={16} />
                  <span>Fully Insured & Bonded</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} />
                  <span>Certified Security Professionals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesOverview;
