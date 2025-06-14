import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PersonalStorySection = ({ parallaxY }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const personalInfo = {
    name: "Alexandra Sterling",
    title: "Creative Director & Full-Stack Developer",
    location: "San Francisco, CA",
    experience: "8+ Years",
    biography: `I'm a passionate software engineer with over 8 years of experience specializing in frontend development and creative direction. My journey in technology began with a fascination for building things that people interact with daily. This curiosity led me to pursue a degree in Computer Science and eventually specialize in creating intuitive, efficient, and beautiful web applications.

What drives me is the intersection of technology and human experience – finding ways to make complex systems feel simple and intuitive for users while maintaining technical excellence behind the scenes. I believe that great design isn't just about how something looks, but how it works and how it makes people feel.

Throughout my career, I've had the privilege of working with startups, Fortune 500 companies, and everything in between. Each project has taught me something new about the craft of building digital experiences that truly matter.`,
    achievements: [
      "Led 50+ successful project launches",
      "Mentored 25+ junior developers",
      "Speaker at 15+ tech conferences",
      "Published 30+ technical articles"
    ],
    values: [
      { icon: "Heart", title: "Passion-Driven", description: "Every project is approached with genuine enthusiasm and care" },
      { icon: "Users", title: "User-Centric", description: "Always prioritizing the end-user experience in every decision" },
      { icon: "Zap", title: "Innovation", description: "Constantly exploring new technologies and creative solutions" },
      { icon: "Shield", title: "Quality First", description: "Committed to delivering excellence in every line of code" }
    ]
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-surface relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y: parallaxY }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Floating Golden Border Effect */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-accent-400 to-accent-600 rounded-royal-lg opacity-20"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Profile Image */}
              <div className="relative bg-white p-2 rounded-royal-lg royal-shadow-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Alexandra Sterling - Creative Director"
                  className="w-full h-96 object-cover rounded-royal"
                />
                
                {/* Floating Achievement Badge */}
                <motion.div 
                  className="absolute top-4 right-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-3 py-1 rounded-full text-sm font-medium royal-shadow"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Icon name="Award" size={14} className="inline mr-1" />
                  {personalInfo.experience}
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-6 -left-6 w-12 h-12 bg-accent-400 rounded-full opacity-60"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-40"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Personal Story Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Header */}
            <div>
              <motion.h2 
                className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {personalInfo.name}
              </motion.h2>
              <motion.p 
                className="text-xl text-primary font-medium mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {personalInfo.title}
              </motion.p>
              <motion.div 
                className="flex items-center space-x-4 text-text-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center space-x-1">
                  <Icon name="MapPin" size={16} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={16} />
                  <span>{personalInfo.experience}</span>
                </div>
              </motion.div>
            </div>

            {/* Biography */}
            <motion.div 
              className="prose prose-lg max-w-none text-text-secondary"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p className="mb-4 leading-relaxed">{personalInfo.biography}</p>
            </motion.div>

            {/* Achievements */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {personalInfo.achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-2 text-sm text-text-secondary"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span>{achievement}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Core Values */}
            <motion.div 
              className="grid grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {personalInfo.values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="group p-4 bg-white rounded-royal royal-shadow-sm hover:royal-shadow-md royal-transition cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-600 rounded-royal flex items-center justify-center group-hover:from-accent-500 group-hover:to-accent-600 royal-transition">
                      <Icon name={value.icon} size={16} color="white" />
                    </div>
                    <h4 className="font-medium text-text-primary">{value.title}</h4>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalStorySection;