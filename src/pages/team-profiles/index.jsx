import React, { useState, useMemo } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import EmergencyContact from '../../components/ui/EmergencyContact';
import QuoteRequestCTA from '../../components/ui/QuoteRequestCTA';
import TeamFilters from './components/TeamFilters';
import TeamMemberCard from './components/TeamMemberCard';
import TeamMemberModal from './components/TeamMemberModal';
import DepartmentSection from './components/DepartmentSection';
import TeamStats from './components/TeamStats';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const TeamProfiles = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'department'
  const [filters, setFilters] = useState({
    search: '',
    specialization: '',
    experienceLevel: '',
    certification: '',
    serviceArea: '',
    teamLeadsOnly: false
  });

  // Mock team members data
  const teamMembers = [
    {
      id: 1,
      name: "Marcus Rodriguez",
      title: "Senior Security Supervisor",
      specialization: "Corporate Security",
      department: "Supervisory Team",
      experience: 12,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      certifications: ["CPP (Certified Protection Professional)", "PSP (Physical Security Professional)", "ASIS International", "Armed Security License"],
      serviceAreas: ["Downtown Business District", "Corporate Complexes", "Government Buildings"],
      projectsCompleted: 150,
      clientRating: "4.9",
      isTeamLead: true,
      summary: `Marcus brings over 12 years of comprehensive security experience, specializing in corporate environments and high-profile client protection. His expertise in risk assessment and team coordination has made him an invaluable leader in our supervisory team.`,
      training: [
        { title: "Advanced Corporate Security Management", institution: "International Security Institute", year: "2023" },
        { title: "Crisis Management & Emergency Response", institution: "Federal Security Academy", year: "2022" },
        { title: "Executive Protection Specialist", institution: "Elite Protection Training", year: "2021" }
      ],
      highlights: [
        "Successfully managed security for Fortune 500 company headquarters",
        "Led emergency response during major corporate incident with zero casualties",
        "Implemented innovative security protocols reducing incidents by 40%",
        "Trained over 50 junior security professionals"
      ],
      testimonial: {
        quote: "Marcus transformed our security operations completely. His attention to detail and proactive approach gave us confidence in our safety measures.",
        client: "Sarah Chen",
        company: "TechCorp Industries"
      }
    },
    {
      id: 2,
      name: "Jennifer Walsh",
      title: "Residential Security Specialist",
      specialization: "Residential Security",
      department: "Field Operations",
      experience: 8,
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      certifications: ["PSP (Physical Security Professional)", "First Aid/CPR", "Residential Security Certified"],
      serviceAreas: ["Residential Communities", "Gated Communities", "Private Estates"],
      projectsCompleted: 95,
      clientRating: "4.8",
      isTeamLead: false,
      summary: `Jennifer specializes in residential security with a focus on family safety and property protection. Her compassionate approach combined with professional expertise makes her highly sought after by families and residential communities.`,
      training: [
        { title: "Residential Security Best Practices", institution: "Home Security Institute", year: "2023" },
        { title: "Family Protection Protocols", institution: "Personal Safety Academy", year: "2022" },
        { title: "Community Safety Management", institution: "Residential Security Training", year: "2021" }
      ],
      highlights: [
        "Developed comprehensive security plans for luxury residential communities",
        "Maintained 100% client satisfaction rate over 3 consecutive years",
        "Specialized in family security education and awareness programs",
        "Expert in residential alarm systems and surveillance technology"
      ],
      testimonial: {
        quote: "Jennifer's dedication to our family's safety is unmatched. She goes above and beyond to ensure we feel secure in our home.",
        client: "Michael Thompson",
        company: "Private Residence"
      }
    },
    {
      id: 3,
      name: "David Kim",
      title: "Executive Protection Officer",
      specialization: "Executive Protection",
      department: "Specialized Units",
      experience: 15,
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      certifications: ["CPP (Certified Protection Professional)", "Executive Protection Specialist", "Armed Security License", "Advanced Driving Techniques"],
      serviceAreas: ["Executive Offices", "Corporate Events", "Travel Security"],
      projectsCompleted: 200,
      clientRating: "5.0",
      isTeamLead: true,
      summary: `David is our premier executive protection specialist with extensive experience protecting high-profile executives and dignitaries. His military background and advanced training make him the ideal choice for VIP protection services.`,
      training: [
        { title: "Advanced Executive Protection", institution: "Executive Security Institute", year: "2023" },
        { title: "Threat Assessment & Risk Management", institution: "Federal Protection Academy", year: "2022" },
        { title: "Tactical Driving & Evasion", institution: "Advanced Security Training", year: "2021" }
      ],
      highlights: [
        "Protected Fortune 100 CEOs during international travel",
        "Managed security for high-profile corporate events with 1000+ attendees",
        "Developed executive protection protocols adopted industry-wide",
        "Zero security incidents in 15 years of executive protection"
      ],
      testimonial: {
        quote: "David\'s professionalism and expertise gave me complete confidence during challenging business travels. His attention to detail is exceptional.",
        client: "Robert Anderson",
        company: "Global Enterprises CEO"
      }
    },
    {
      id: 4,
      name: "Lisa Chen",
      title: "Cybersecurity Analyst",
      specialization: "Cybersecurity",
      department: "Specialized Units",
      experience: 6,
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      certifications: ["Cybersecurity Certified", "CISSP", "Ethical Hacker Certified"],
      serviceAreas: ["Corporate Networks", "Data Centers", "Digital Infrastructure"],
      projectsCompleted: 75,
      clientRating: "4.9",
      isTeamLead: false,
      summary: `Lisa brings cutting-edge cybersecurity expertise to our physical security operations. Her unique combination of digital and physical security knowledge helps clients protect against modern hybrid threats.`,
      training: [
        { title: "Advanced Cybersecurity Protocols", institution: "Cyber Defense Institute", year: "2023" },
        { title: "Digital Forensics & Investigation", institution: "Technology Security Academy", year: "2022" },
        { title: "Network Security & Penetration Testing", institution: "Cyber Security Training", year: "2021" }
      ],
      highlights: [
        "Prevented major cybersecurity breaches for multiple corporate clients",
        "Developed integrated cyber-physical security protocols",
        "Expert in security system vulnerability assessment",
        "Trained security teams on digital threat awareness"
      ],
      testimonial: {
        quote: "Lisa's cybersecurity expertise helped us identify vulnerabilities we never knew existed. Her integrated approach to security is invaluable.",
        client: "Tech Solutions Inc.",
        company: "IT Director"
      }
    },
    {
      id: 5,
      name: "James Wilson",
      title: "Event Security Coordinator",
      specialization: "Event Security",
      department: "Field Operations",
      experience: 10,
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      certifications: ["Event Security Specialist", "Crowd Control Certified", "Emergency Response"],
      serviceAreas: ["Convention Centers", "Sports Venues", "Corporate Events"],
      projectsCompleted: 120,
      clientRating: "4.7",
      isTeamLead: true,
      summary: `James specializes in large-scale event security with expertise in crowd management and emergency response. His experience coordinating security for major events makes him essential for any large gathering.`,
      training: [
        { title: "Large Event Security Management", institution: "Event Security Institute", year: "2023" },
        { title: "Crowd Psychology & Control", institution: "Public Safety Academy", year: "2022" },
        { title: "Emergency Evacuation Procedures", institution: "Crisis Management Training", year: "2021" }
      ],
      highlights: [
        "Managed security for events with 10,000+ attendees",
        "Developed crowd control protocols for major venues",
        "Zero incidents during high-profile celebrity events",
        "Expert in event risk assessment and planning"
      ],
      testimonial: {
        quote: "James made our corporate conference run smoothly. His team\'s professionalism and preparedness were evident throughout the event.",
        client: "Global Conference Solutions",
        company: "Event Director"
      }
    },
    {
      id: 6,
      name: "Maria Gonzalez",
      title: "Training Director",
      specialization: "Corporate Security",
      department: "Training & Development",
      experience: 14,
      photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      certifications: ["Master Security Trainer", "CPP (Certified Protection Professional)", "Adult Education Certified"],
      serviceAreas: ["Training Facilities", "Corporate Offices", "Educational Institutions"],
      projectsCompleted: 180,
      clientRating: "4.9",
      isTeamLead: true,
      summary: `Maria leads our training and development programs, ensuring all team members maintain the highest standards of professional competency. Her educational background and security expertise create comprehensive training programs.`,
      training: [
        { title: "Advanced Security Training Methods", institution: "Professional Training Institute", year: "2023" },
        { title: "Adult Learning & Development", institution: "Education Excellence Academy", year: "2022" },
        { title: "Security Industry Standards", institution: "Professional Security Training", year: "2021" }
      ],
      highlights: [
        "Developed industry-leading security training curriculum",
        "Trained over 500 security professionals",
        "Created certification programs adopted by other agencies",
        "Expert in continuous professional development"
      ],
      testimonial: {
        quote: "Maria\'s training programs elevated our entire security team\'s capabilities. Her expertise in education and security is unmatched.",
        client: "Security Services Alliance",
        company: "Operations Manager"
      }
    }
  ];

  // Filter team members based on current filters
  const filteredMembers = useMemo(() => {
    return teamMembers.filter(member => {
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const matchesSearch = 
          member.name.toLowerCase().includes(searchTerm) ||
          member.title.toLowerCase().includes(searchTerm) ||
          member.specialization.toLowerCase().includes(searchTerm) ||
          member.certifications.some(cert => cert.toLowerCase().includes(searchTerm));
        if (!matchesSearch) return false;
      }

      // Specialization filter
      if (filters.specialization && member.specialization !== filters.specialization) {
        return false;
      }

      // Experience level filter
      if (filters.experienceLevel) {
        const experienceRanges = {
          'Professional (0-5 years)': [0, 5],
          'Experienced (5-10 years)': [5, 10],
          'Expert (10-15 years)': [10, 15],
          'Senior Expert (15+ years)': [15, 100]
        };
        const [min, max] = experienceRanges[filters.experienceLevel] || [0, 100];
        if (member.experience < min || member.experience > max) {
          return false;
        }
      }

      // Certification filter
      if (filters.certification) {
        const hasCertification = member.certifications.some(cert => 
          cert.includes(filters.certification.replace('All Certifications', ''))
        );
        if (!hasCertification) return false;
      }

      // Service area filter
      if (filters.serviceArea) {
        const hasServiceArea = member.serviceAreas.some(area => 
          area.includes(filters.serviceArea.replace('All Service Areas', ''))
        );
        if (!hasServiceArea) return false;
      }

      // Team leads only filter
      if (filters.teamLeadsOnly && !member.isTeamLead) {
        return false;
      }

      return true;
    });
  }, [teamMembers, filters]);

  // Group members by department
  const membersByDepartment = useMemo(() => {
    const departments = {};
    filteredMembers.forEach(member => {
      if (!departments[member.department]) {
        departments[member.department] = [];
      }
      departments[member.department].push(member);
    });
    return departments;
  }, [filteredMembers]);

  const handleViewProfile = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const handleContactMember = (member) => {
    // Redirect to contact page with member info
    window.location.href = `/contact-quote-request?member=${member.id}&service=consultation`;
  };

  const handleRequestQuote = (member) => {
    // Redirect to quote request with specific member
    window.location.href = `/contact-quote-request?member=${member.id}&service=quote`;
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      specialization: '',
      experienceLevel: '',
      certification: '',
      serviceArea: '',
      teamLeadsOnly: false
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb />
          
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Users" size={32} color="#FFFFFF" />
              </div>
              <div>
                <h1 className="font-heading text-4xl font-bold text-text-primary">
                  Our Security Team
                </h1>
                <p className="text-xl text-text-secondary mt-2">
                  Meet the professionals dedicated to your safety and security
                </p>
              </div>
            </div>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <p className="text-text-primary leading-relaxed">
                Our team consists of highly trained security professionals with diverse backgrounds and specialized expertise. 
                Each member brings years of experience, industry certifications, and a commitment to excellence in protecting 
                what matters most to our clients. Browse our team profiles to find the right security specialists for your needs.
              </p>
            </div>
          </div>

          {/* Team Statistics */}
          <TeamStats members={teamMembers} />

          {/* Filters */}
          <TeamFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            totalMembers={teamMembers.length}
            filteredCount={filteredMembers.length}
          />

          {/* View Mode Toggle */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-text-primary">View Mode:</span>
              <div className="flex items-center bg-background rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth flex items-center space-x-2 ${
                    viewMode === 'grid' ?'bg-primary text-primary-foreground' :'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <Icon name="Grid3X3" size={16} />
                  <span>Grid View</span>
                </button>
                <button
                  onClick={() => setViewMode('department')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth flex items-center space-x-2 ${
                    viewMode === 'department' ?'bg-primary text-primary-foreground' :'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <Icon name="Building" size={16} />
                  <span>By Department</span>
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-text-secondary">
                {filteredMembers.length} of {teamMembers.length} members
              </span>
              <Button
                variant="outline"
                iconName="Download"
                iconPosition="left"
                onClick={() => {
                  // Mock download functionality
                  alert('Team credentials summary download started');
                }}
              >
                Download Team Summary
              </Button>
            </div>
          </div>

          {/* Team Members Display */}
          {filteredMembers.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-border rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Search" size={32} className="text-text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
                No team members found
              </h3>
              <p className="text-text-secondary mb-6">
                Try adjusting your filters to see more results
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
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMembers.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  onViewProfile={handleViewProfile}
                  onContactMember={handleContactMember}
                />
              ))}
            </div>
          ) : (
            <div>
              {Object.entries(membersByDepartment).map(([department, members]) => (
                <DepartmentSection
                  key={department}
                  department={department}
                  members={members}
                  onViewProfile={handleViewProfile}
                  onContactMember={handleContactMember}
                />
              ))}
            </div>
          )}

          {/* Call to Action */}
          <QuoteRequestCTA 
            variant="inline" 
            context="team"
            className="mt-12"
          />
        </div>
      </main>

      {/* Team Member Modal */}
      <TeamMemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onContactMember={handleContactMember}
        onRequestQuote={handleRequestQuote}
      />

      {/* Emergency Contact */}
      <EmergencyContact position="floating" />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={24} color="#1A202C" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold">Elite Security Group</h3>
                  <p className="text-sm opacity-80">Professional Security Services</p>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed mb-4">
                Our experienced team of security professionals is dedicated to providing comprehensive 
                protection services tailored to your specific needs. Contact us to learn more about 
                how our team can help secure your assets.
              </p>
              <div className="flex items-center space-x-4">
                <Icon name="Phone" size={16} />
                <span className="text-sm">(800) 732-8748</span>
                <Icon name="Mail" size={16} />
                <span className="text-sm">team@elitesecurity.com</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/services-overview" className="hover:opacity-100 transition-smooth">Our Services</a></li>
                <li><a href="/about-us" className="hover:opacity-100 transition-smooth">About Us</a></li>
                <li><a href="/contact-quote-request" className="hover:opacity-100 transition-smooth">Get Quote</a></li>
                <li><a href="/homepage" className="hover:opacity-100 transition-smooth">Home</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Team Specializations</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Corporate Security</li>
                <li>Residential Protection</li>
                <li>Event Security</li>
                <li>Executive Protection</li>
                <li>Cybersecurity</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Elite Security Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeamProfiles;