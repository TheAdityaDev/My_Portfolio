import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ScrollProgressIndicator from '../../components/ui/ScrollProgressIndicator';
import Icon from '../../components/AppIcon';

import HeroSection from './components/HeroSection';
import PortfolioPreview from './components/PortfolioPreview';
import SkillsBadges from './components/SkillsBadges';
import TestimonialsSection from './components/TestimonialsSection';
import LoadingAnimation from './components/LoadingAnimation';

const HeroLandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    portfolio: false,
    skills: false,
    testimonials: false
  });

  const heroRef = useRef(null);
  const portfolioRef = useRef(null);
  const skillsRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section');
          setIsVisible(prev => ({ ...prev, [sectionName]: true }));
        }
      });
    }, observerOptions);

    const sections = [heroRef, portfolioRef, skillsRef, testimonialsRef];
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <ScrollProgressIndicator />
      
      {/* Parallax Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Floating Particles */}
        <div 
          className="absolute w-2 h-2 bg-accent-400 rounded-full opacity-60 animate-pulse"
          style={{
            top: '20%',
            left: '10%',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
        <div 
          className="absolute w-3 h-3 bg-accent-500 rounded-full opacity-40 animate-pulse animation-delay-200"
          style={{
            top: '60%',
            right: '15%',
            transform: `translateY(${scrollY * 0.15}px)`
          }}
        />
        <div 
          className="absolute w-1 h-1 bg-accent-300 rounded-full opacity-80 animate-pulse animation-delay-400"
          style={{
            top: '40%',
            left: '80%',
            transform: `translateY(${scrollY * 0.08}px)`
          }}
        />

        {/* Geometric Shapes */}
        <div 
          className="absolute w-32 h-32 border border-primary-200 opacity-10 rounded-full"
          style={{
            top: '30%',
            left: '5%',
            transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)`
          }}
        />
        <div 
          className="absolute w-24 h-24 border border-accent-300 opacity-15 rounded-royal"
          style={{
            top: '70%',
            right: '10%',
            transform: `translateY(${scrollY * 0.12}px) rotate(${-scrollY * 0.08}deg)`
          }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          data-section="hero"
          className="relative"
        >
          <HeroSection isVisible={isVisible.hero} scrollY={scrollY} />
        </section>

        {/* Portfolio Preview Section */}
        <section 
          ref={portfolioRef}
          data-section="portfolio"
          className="relative py-20 bg-surface"
        >
          <PortfolioPreview isVisible={isVisible.portfolio} />
        </section>

        {/* Skills Badges Section */}
        <section 
          ref={skillsRef}
          data-section="skills"
          className="relative py-20 bg-background"
        >
          <SkillsBadges isVisible={isVisible.skills} />
        </section>

        {/* Testimonials Section */}
        <section 
          ref={testimonialsRef}
          data-section="testimonials"
          className="relative py-20 bg-surface"
        >
          <TestimonialsSection isVisible={isVisible.testimonials} />
        </section>

        {/* Call to Action Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-primary-700 to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Something Royal?
              </h2>
              <p className="text-primary-200 text-lg mb-8">
                Let's collaborate and bring your vision to life with premium design and development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/portfolio-gallery"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-medium px-8 py-3 rounded-royal-md royal-shadow hover:royal-shadow-md royal-transition"
                >
                  <Icon name="Briefcase" size={20} />
                  <span>View Full Portfolio</span>
                </Link>
                <Link
                  to="/contact-footer"
                  className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-3 rounded-royal-md royal-border hover:border-accent-400 royal-transition"
                >
                  <Icon name="Mail" size={20} />
                  <span>Get In Touch</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 opacity-20">
            <Icon name="Crown" size={32} color="#B8860B" className="animate-pulse" />
          </div>
          <div className="absolute bottom-8 right-8 opacity-20">
            <Icon name="Sparkles" size={32} color="#B8860B" className="animate-pulse animation-delay-300" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HeroLandingPage;