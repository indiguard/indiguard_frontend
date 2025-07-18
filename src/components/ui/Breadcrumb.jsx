import React from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = () => {
  const location = useLocation();
  
  const pathMap = {
    '/homepage': { label: 'Home', icon: 'Home' },
    '/services-overview': { label: 'Services Overview', icon: 'Shield' },
    '/service-detail-page': { label: 'Service Details', icon: 'ShieldCheck' },
    '/about-us': { label: 'About Us', icon: 'Users' },
    // '/team-profiles': { label: 'Team Profiles', icon: 'UserCheck' },
    '/contact-quote-request': { label: 'Contact & Quote', icon: 'Phone' },
    '/join-us': { label: 'Join Us', icon: 'Briefcase' }
  };

  const generateBreadcrumbs = () => {
    const currentPath = location.pathname;
    const breadcrumbs = [];

    // Always start with Home
    if (currentPath !== '/homepage') {
      breadcrumbs.push({
        label: 'Home',
        path: '/homepage',
        icon: 'Home'
      });
    }

    // Add parent paths for nested routes
    if (currentPath === '/service-detail-page') {
      breadcrumbs.push({
        label: 'Services Overview',
        path: '/services-overview',
        icon: 'Shield'
      });
    }

    if (currentPath === '/team-profiles') {
      breadcrumbs.push({
        label: 'About Us',
        path: '/about-us',
        icon: 'Users'
      });
    }

    if (currentPath === '/join-us') {
      breadcrumbs.push({
        label: 'Careers',
        path: '/join-us',
        icon: 'Briefcase'
      });
    }

    // Add current page
    const currentPage = pathMap[currentPath];
    if (currentPage) {
      breadcrumbs.push({
        label: currentPage.label,
        path: currentPath,
        icon: currentPage.icon,
        current: true
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on homepage or if only one item
  if (location.pathname === '/homepage' || breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav 
      className="flex items-center space-x-2 text-sm mb-6"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center">
            {index > 0 && (
              <Icon 
                name="ChevronRight" 
                size={16} 
                className="text-text-secondary mx-2" 
              />
            )}
            
            {crumb.current ? (
              <span className="flex items-center space-x-2 text-primary font-medium">
                <Icon name={crumb.icon} size={16} />
                <span>{crumb.label}</span>
              </span>
            ) : (
              <a
                href={crumb.path}
                className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-smooth"
              >
                <Icon name={crumb.icon} size={16} />
                <span>{crumb.label}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;