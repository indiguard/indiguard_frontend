import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import TrustIndicators from './components/TrustIndicators';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import Footer from './components/Footer';
import EmergencyContact from '../../components/ui/EmergencyContact';
import QuoteRequestCTA from '../../components/ui/QuoteRequestCTA';
import MapSection from './components/MapSection'; 


const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Services Overview */}
        <ServicesOverview />
        
        {/* Trust Indicators */}
        <TrustIndicators />
        
        {/* Client Testimonials */}
        <TestimonialsCarousel />

        {/* Map Section */}
        <MapSection />
        
        
       

      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Components */}
{/*       <EmergencyContact position="floating" /> */}
      <QuoteRequestCTA variant="floating" context="general" />
    </div>
  );
};

export default Homepage;
