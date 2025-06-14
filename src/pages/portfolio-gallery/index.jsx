import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/ui/Header';
import ScrollProgressIndicator from '../../components/ui/ScrollProgressIndicator';
import SectionTransitionOverlay from '../../components/ui/SectionTransitionOverlay';
import Icon from '../../components/AppIcon';

import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import FilterTabs from './components/FilterTabs';

const PortfolioGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [showTransition, setShowTransition] = useState(false);
  const galleryRef = useRef(null);
  const observerRef = useRef(null);

  // Mock portfolio data
  const portfolioProjects = [
    {
      id: 1,
      title: "Royal E-Commerce Platform",
      category: "Web Design",
      description: `A luxurious e-commerce platform designed for premium brands, featuring elegant product showcases, smooth animations, and seamless checkout experience. Built with modern web technologies and optimized for conversion.`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://royal-ecommerce.demo",
      githubUrl: "https://github.com/portfolio/royal-ecommerce",
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "Golden Brand Identity",
      category: "Branding",
      description: `Complete brand identity design for a luxury jewelry company, including logo design, color palette, typography, and brand guidelines. Created cohesive visual language across all touchpoints.`,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=800&h=600&fit=crop",
      technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
      liveUrl: "https://golden-brand.demo",
      githubUrl: null,
      featured: true,
      year: "2024"
    },
    {
      id: 3,
      title: "Portfolio Management App",
      category: "Development",
      description: `A comprehensive portfolio management application for investment professionals, featuring real-time data visualization, risk analysis, and automated reporting capabilities.`,
      image: "https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      liveUrl: "https://portfolio-mgmt.demo",
      githubUrl: "https://github.com/portfolio/portfolio-mgmt",
      featured: false,
      year: "2023"
    },
    {
      id: 4,
      title: "Luxury Hotel Website",
      category: "Web Design",
      description: `Elegant website design for a 5-star luxury hotel chain, featuring immersive galleries, booking integration, and premium user experience with sophisticated animations.`,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      technologies: ["React", "GSAP", "Sanity CMS", "Stripe"],
      liveUrl: "https://luxury-hotel.demo",
      githubUrl: "https://github.com/portfolio/luxury-hotel",
      featured: true,
      year: "2024"
    },
    {
      id: 5,
      title: "Corporate Identity Suite",
      category: "Branding",
      description: `Complete corporate identity design for a financial services firm, including logo, business cards, letterheads, and digital brand assets with professional color schemes.`,
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?w=800&h=600&fit=crop",
      technologies: ["Adobe Creative Suite", "Brand Guidelines"],
      liveUrl: "https://corporate-identity.demo",
      githubUrl: null,
      featured: false,
      year: "2023"
    },
    {
      id: 6,
      title: "Analytics Dashboard",
      category: "Development",
      description: `Advanced analytics dashboard for business intelligence, featuring interactive charts, real-time data updates, and customizable reporting with modern UI components.`,
      image: "https://images.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "Chart.js", "Express"],
      liveUrl: "https://analytics-dash.demo",
      githubUrl: "https://github.com/portfolio/analytics-dash",
      featured: true,
      year: "2024"
    },
    {
      id: 7,
      title: "Fashion Brand Website",
      category: "Web Design",
      description: `Modern fashion brand website with dynamic product galleries, size guides, and seamless shopping experience optimized for mobile and desktop users.`,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      technologies: ["Next.js", "Shopify", "Tailwind CSS"],
      liveUrl: "https://fashion-brand.demo",
      githubUrl: "https://github.com/portfolio/fashion-brand",
      featured: false,
      year: "2023"
    },
    {
      id: 8,
      title: "Restaurant Brand Package",
      category: "Branding",
      description: `Complete branding package for an upscale restaurant including menu design, logo creation, interior signage, and digital marketing materials with elegant typography.`,
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?w=800&h=600&fit=crop",
      technologies: ["Adobe InDesign", "Illustrator", "Print Design"],
      liveUrl: "https://restaurant-brand.demo",
      githubUrl: null,
      featured: true,
      year: "2024"
    },
    {
      id: 9,
      title: "Task Management System",
      category: "Development",
      description: `Comprehensive task management system for teams with project tracking, time management, collaboration tools, and advanced reporting capabilities.`,
      image: "https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg?w=800&h=600&fit=crop",
      technologies: ["Angular", "Node.js", "MySQL", "Socket.io"],
      liveUrl: "https://task-mgmt.demo",
      githubUrl: "https://github.com/portfolio/task-mgmt",
      featured: false,
      year: "2023"
    }
  ];

  const filterCategories = [
    { name: 'All', count: portfolioProjects.length },
    { name: 'Web Design', count: portfolioProjects.filter(p => p.category === 'Web Design').length },
    { name: 'Branding', count: portfolioProjects.filter(p => p.category === 'Branding').length },
    { name: 'Development', count: portfolioProjects.filter(p => p.category === 'Development').length }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeFilter);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards(prev => [...new Set([...prev, cardId])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Observe cards when they mount
  useEffect(() => {
    const cards = document.querySelectorAll('[data-card-id]');
    cards.forEach(card => {
      if (observerRef.current) {
        observerRef.current.observe(card);
      }
    });

    return () => {
      cards.forEach(card => {
        if (observerRef.current) {
          observerRef.current.unobserve(card);
        }
      });
    };
  }, [filteredProjects]);

  // Reset visible cards when filter changes
  useEffect(() => {
    setVisibleCards([]);
  }, [activeFilter]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleFilterChange = (filter) => {
    if (filter !== activeFilter) {
      setShowTransition(true);
      setTimeout(() => {
        setActiveFilter(filter);
        setShowTransition(false);
      }, 150);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background">
      <Header />
      <ScrollProgressIndicator />
      
      <SectionTransitionOverlay 
        isActive={showTransition}
        targetSection="portfolio-gallery"
        onComplete={() => setShowTransition(false)}
      />

      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-50 px-4 py-2 rounded-royal-full mb-6">
              <Icon name="Briefcase" size={16} color="var(--color-primary)" />
              <span className="text-sm font-medium text-primary-700">Portfolio Gallery</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6">
              Royal
              <span className="bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent"> Portfolio</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Discover a curated collection of premium projects showcasing expertise in web design, 
              branding, and development with royal elegance and modern innovation.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <FilterTabs 
            categories={filterCategories}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />

          {/* Portfolio Grid */}
          <motion.div
            ref={galleryRef}
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isVisible={visibleCards.includes(project.id)}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-royal-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={24} color="white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-900 mb-2">
                No Projects Found
              </h3>
              <p className="text-text-secondary">
                Try selecting a different category to view more projects.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Projects Completed', value: '50+', icon: 'CheckCircle' },
              { label: 'Happy Clients', value: '30+', icon: 'Users' },
              { label: 'Years Experience', value: '5+', icon: 'Calendar' },
              { label: 'Awards Won', value: '12+', icon: 'Award' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-royal-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat.icon} size={20} color="white" />
                </div>
                <div className="font-heading text-2xl md:text-3xl font-bold text-primary-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Floating Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-royal-full royal-shadow-lg flex items-center justify-center text-white hover:royal-shadow-xl royal-transition z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name="ArrowUp" size={20} />
      </motion.button>
    </div>
  );
};

export default PortfolioGallery;