import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import HeroLandingPage from "pages/hero-landing-page";
import AboutSkillsShowcase from "pages/about-skills-showcase";
import PortfolioGallery from "pages/portfolio-gallery";
import ContactFooter from "pages/contact-footer";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<HeroLandingPage />} />
          <Route path="/hero-landing-page" element={<HeroLandingPage />} />
          <Route path="/about-skills-showcase" element={<AboutSkillsShowcase />} />
          <Route path="/portfolio-gallery" element={<PortfolioGallery />} />
          <Route path="/contact-footer" element={<ContactFooter />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;