import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import IndiguardLogo from '../../assets/indiguard_logo_2.png';
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
  { label: 'Home', path: '/homepage', icon: 'Home' },
  {
    label: 'Services',
    path: '/services-overview',
    icon: 'Shield',
    submenu: [
    { label: 'Services Overview', path: '/services-overview' },
    { label: 'Service Details', path: '/service-detail-page' }]

  },
  {
    label: 'About',
    path: '/about-us',
    icon: 'Users',
    

  },
  { label: 'JoinUs', path: '/join-us', icon: 'Briefcase' },
  { label: 'Contact', path: '/contact-quote-request', icon: 'Phone' }];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const isActiveGroup = (item) => {
    if (item.submenu) {
      return item.submenu.some((subItem) => isActivePath(subItem.path));
    }
    return isActivePath(item.path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 transition-smooth ${
      isScrolled ?
      'bg-surface/95 backdrop-blur-sm shadow-elevation-2' :
      'bg-surface'}`
      }>

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/homepage"
              className="flex items-center space-x-3 transition-smooth hover:opacity-80">

               <div className="w-18 h-12 bg-white rounded-lg overflow-hidden flex items-center justify-center">
  <img src={IndiguardLogo} alt="IndiGuard Logo" className="w-full h-full object-contain" />
</div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-semibold text-primary">IndiGuard Security

                </span>
                <span className="font-heading font-semibold text-[rgba(246,207,156,1)] text-base">Limited

                </span>
                
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) =>
            <div key={item.label} className="relative group">
                <a
                href={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-smooth font-medium ${
                isActiveGroup(item) ?
                'text-primary bg-primary/5' : 'text-text-primary hover:text-primary hover:bg-primary/5'}`
                }>

                  <Icon name={item.icon} size={18} />
                  <span>{item.label}</span>
                  {item.submenu &&
                <Icon name="ChevronDown" size={16} className="transition-transform group-hover:rotate-180" />
                }
                </a>

                {/* Dropdown Menu */}
                {item.submenu &&
              <div className="absolute top-full left-0 mt-2 w-56 bg-surface rounded-lg shadow-elevation-3 border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth">
                    <div className="py-2">
                      {item.submenu.map((subItem) =>
                  <a
                    key={subItem.path}
                    href={subItem.path}
                    className={`block px-4 py-3 text-sm transition-smooth ${
                    isActivePath(subItem.path) ?
                    'text-primary bg-primary/5 border-r-2 border-primary' : 'text-text-primary hover:text-primary hover:bg-primary/5'}`
                    }>

                          {subItem.label}
                        </a>
                  )}
                    </div>
                  </div>
              }
              </div>
            )}
          </nav>

          {/* Emergency Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
{/*             <div className="flex items-center space-x-2 text-sm">
              <Icon name="Phone" size={16} color="#E53E3E" />
              <span className="font-data text-error font-medium">24/7 Emergency</span>
              <a
                href="tel:+74038982366"
                className="font-data font-semibold text-primary hover:text-secondary transition-smooth">

                (074) 3898-2366
              </a>
            </div> */}
            <Button
              variant="primary"
              iconName="MessageSquare"
              iconPosition="left"
              onClick={() => window.location.href = '/contact-quote-request'}>

              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <a
              href="tel:+447438982366"
              className="p-2 text-error hover:bg-error/10 rounded-md transition-smooth">

              <Icon name="Phone" size={20} />
            </a>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-text-primary hover:text-primary hover:bg-primary/5 rounded-md transition-smooth"
              aria-label="Toggle mobile menu">

              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen &&
      <div className="lg:hidden fixed inset-0 top-20 z-300 bg-surface border-t border-border animate-slide-down">
          <nav className="px-6 py-6 space-y-4 bg-surface">
            {navigationItems.map((item) =>
          <div key={item.label}>
                <a
              href={item.path}
              onClick={closeMobileMenu}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-smooth ${
              isActiveGroup(item) ?
              'text-primary bg-primary/10 border border-primary/20' : 'text-text-primary hover:text-primary hover:bg-primary/5'}`
              }>

                  <Icon name={item.icon} size={20} />
                  <span className="font-medium">{item.label}</span>
                </a>
                
                {/* Mobile Submenu */}
                {item.submenu &&
            <div className="ml-6 mt-2 space-y-2">
                    {item.submenu.map((subItem) =>
              <a
                key={subItem.path}
                href={subItem.path}
                onClick={closeMobileMenu}
                className={`block px-4 py-2 text-sm rounded-md transition-smooth ${
                isActivePath(subItem.path) ?
                'text-primary bg-primary/5' : 'text-text-secondary hover:text-primary hover:bg-primary/5'}`
                }>

                        {subItem.label}
                      </a>
              )}
                  </div>
            }
              </div>
          )}

            {/* Mobile Emergency Contact */}
{/*             <div className="pt-6 border-t border-border">
              <div className="flex items-center justify-between p-4 bg-error/5 rounded-lg border border-error/20">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={18} color="#E53E3E" />
                  <span className="text-sm font-medium text-error">24/7 Emergency</span>
                </div>
                <a
                href="tel:+74038982366"
                className="font-data font-semibold text-primary">

                  (074) 3898-2366
                </a>
              </div>
            </div> */}

            {/* Mobile CTA */}
            <div className="pt-4">
              <Button
              variant="primary"
              fullWidth
              iconName="MessageSquare"
              iconPosition="left"
              onClick={() => {
                closeMobileMenu();
                window.location.href = '/contact-quote-request';
              }}>

                Get Free Quote
              </Button>
            </div>
          </nav>
        </div>
      }
    </header>);

};

export default Header;
