import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";

import Homepage from "@/pages/homepage";
import ServicesOverview from "@/pages/services-overview";
import AboutUs from "@/pages/about-us";
import ContactQuoteRequest from "@/pages/contact-quote-request";
import ServiceDetailPage from "@/pages/service-detail-page";
import TeamProfiles from "@/pages/team-profiles";
import JoinUs from "@/pages/join-us";
import NotFound from "@/pages/NotFound";
import ConstructionSecurity from "@/pages/ConstructionSecurity";
import EventSecurity from "@/pages/EventSecurity";
import Keyholding from "@/pages/Keyholding";
import MobileSecurity from "@/pages/MobileSecurity";
import RetailCorporateSecurity from "@/pages/RetailCorporateSecurity";
import VacantProperty from "@/pages/VacantProperty";
import WarehouseSecurity from "@/pages/WarehouseSecurity";
// import PrivacyPolicy from "@/pages/PrivacyPolicy"; // optional

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/services-overview" element={<ServicesOverview />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-quote-request" element={<ContactQuoteRequest />} />
          <Route path="/service-detail-page" element={<ServiceDetailPage />} />
          <Route path="/team-profiles" element={<TeamProfiles />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/construction-security" element={<ConstructionSecurity />} />
          <Route path="/event-security" element={<EventSecurity />} />
          <Route path="/keyholding" element={<Keyholding />} />
          <Route path="/mobile-security" element={<MobileSecurity />} />
          <Route path="/retail-corporate-security" element={<RetailCorporateSecurity />} />
          <Route path="/vacant-property" element={<VacantProperty />} />
          <Route path="/warehouse-security" element={<WarehouseSecurity />} />
          {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
