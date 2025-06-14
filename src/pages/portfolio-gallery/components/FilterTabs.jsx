import React from 'react';
import { motion } from 'framer-motion';


const FilterTabs = ({ categories, activeFilter, onFilterChange }) => {
  const tabVariants = {
    inactive: {
      backgroundColor: "transparent",
      color: "var(--color-text-secondary)"
    },
    active: {
      backgroundColor: "var(--color-accent-500)",
      color: "white"
    }
  };

  const underlineVariants = {
    inactive: { scaleX: 0 },
    active: { scaleX: 1 }
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.name}
          variants={tabVariants}
          animate={activeFilter === category.name ? "active" : "inactive"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(category.name)}
          className="relative px-6 py-3 rounded-royal-full font-medium royal-transition border border-primary-200 hover:border-accent-300"
        >
          <div className="flex items-center space-x-2">
            <span>{category.name}</span>
            <span className={`text-xs px-2 py-1 rounded-royal-full ${
              activeFilter === category.name 
                ? 'bg-white/20 text-white' :'bg-primary-100 text-primary-700'
            }`}>
              {category.count}
            </span>
          </div>

          {/* Active Underline */}
          {activeFilter === category.name && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 rounded-royal-full -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterTabs;