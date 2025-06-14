import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const watchedFields = watch();

  const projectTypes = [
    { value: '', label: 'Select Project Type' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'e-commerce', label: 'E-commerce Solution' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'other', label: 'Other' }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      reset();
      setSubmitSuccess(false);
    }, 3000);
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    blur: {
      scale: 1,
      transition: { duration: 0.2 }
    }
  };

  const labelVariants = {
    float: {
      y: -24,
      scale: 0.85,
      color: '#B8860B',
      transition: { duration: 0.2 }
    },
    rest: {
      y: 0,
      scale: 1,
      color: '#6B7280',
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="bg-white rounded-royal-lg royal-shadow-lg p-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 right-4 w-32 h-32 border border-accent-300 rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 border border-primary-300 rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Form Header */}
        <div className="mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">
            Start Your Royal Project
          </h2>
          <p className="text-text-secondary">
            Tell me about your vision and let's create something extraordinary together.
          </p>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-success/10 border border-success/20 rounded-royal text-success flex items-center space-x-3"
          >
            <Icon name="CheckCircle" size={20} />
            <span className="font-medium">Thank you! Your message has been sent successfully.</span>
          </motion.div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <motion.input
              type="text"
              id="name"
              className={`w-full px-4 py-4 border-2 rounded-royal-md bg-transparent royal-transition focus:outline-none ${
                errors.name 
                  ? 'border-error focus:border-error' 
                  : focusedField === 'name'|| watchedFields.name ?'border-accent-500 focus:border-accent-600' :'border-gray-300 focus:border-accent-500'
              }`}
              variants={inputVariants}
              animate={focusedField === 'name' ? 'focus' : 'blur'}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              {...register('name', { 
                required: 'Name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' }
              })}
            />
            <motion.label
              htmlFor="name"
              className="absolute left-4 top-4 pointer-events-none font-medium"
              variants={labelVariants}
              animate={focusedField === 'name' || watchedFields.name ? 'float' : 'rest'}
            >
              Your Name
            </motion.label>
            {errors.name && (
              <p className="mt-2 text-sm text-error flex items-center space-x-1">
                <Icon name="AlertCircle" size={16} />
                <span>{errors.name.message}</span>
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="relative">
            <motion.input
              type="email"
              id="email"
              className={`w-full px-4 py-4 border-2 rounded-royal-md bg-transparent royal-transition focus:outline-none ${
                errors.email 
                  ? 'border-error focus:border-error' 
                  : focusedField === 'email'|| watchedFields.email ?'border-accent-500 focus:border-accent-600' :'border-gray-300 focus:border-accent-500'
              }`}
              variants={inputVariants}
              animate={focusedField === 'email' ? 'focus' : 'blur'}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            <motion.label
              htmlFor="email"
              className="absolute left-4 top-4 pointer-events-none font-medium"
              variants={labelVariants}
              animate={focusedField === 'email' || watchedFields.email ? 'float' : 'rest'}
            >
              Email Address
            </motion.label>
            {errors.email && (
              <p className="mt-2 text-sm text-error flex items-center space-x-1">
                <Icon name="AlertCircle" size={16} />
                <span>{errors.email.message}</span>
              </p>
            )}
          </div>

          {/* Project Type Field */}
          <div className="relative">
            <select
              id="projectType"
              className={`w-full px-4 py-4 border-2 rounded-royal-md bg-white royal-transition focus:outline-none appearance-none ${
                errors.projectType 
                  ? 'border-error focus:border-error' 
                  : focusedField === 'projectType'|| watchedFields.projectType ?'border-accent-500 focus:border-accent-600' :'border-gray-300 focus:border-accent-500'
              }`}
              onFocus={() => setFocusedField('projectType')}
              onBlur={() => setFocusedField(null)}
              {...register('projectType', { required: 'Please select a project type' })}
            >
              {projectTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Icon name="ChevronDown" size={20} color="#6B7280" />
            </div>
            {errors.projectType && (
              <p className="mt-2 text-sm text-error flex items-center space-x-1">
                <Icon name="AlertCircle" size={16} />
                <span>{errors.projectType.message}</span>
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="relative">
            <motion.textarea
              id="message"
              rows={5}
              className={`w-full px-4 py-4 border-2 rounded-royal-md bg-transparent royal-transition focus:outline-none resize-none ${
                errors.message 
                  ? 'border-error focus:border-error' 
                  : focusedField === 'message'|| watchedFields.message ?'border-accent-500 focus:border-accent-600' :'border-gray-300 focus:border-accent-500'
              }`}
              variants={inputVariants}
              animate={focusedField === 'message' ? 'focus' : 'blur'}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              {...register('message', { 
                required: 'Message is required',
                minLength: { value: 10, message: 'Message must be at least 10 characters' }
              })}
            />
            <motion.label
              htmlFor="message"
              className="absolute left-4 top-4 pointer-events-none font-medium"
              variants={labelVariants}
              animate={focusedField === 'message' || watchedFields.message ? 'float' : 'rest'}
            >
              Project Details
            </motion.label>
            {errors.message && (
              <p className="mt-2 text-sm text-error flex items-center space-x-1">
                <Icon name="AlertCircle" size={16} />
                <span>{errors.message.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-8 rounded-royal-md royal-shadow hover:royal-shadow-md royal-transition flex items-center justify-center space-x-3"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Icon name="Send" size={20} />
                <span>Send Royal Message</span>
              </>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;