import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const backgrounds = [
    // Premium cinematic car photography from Unsplash
    'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1920&q=80', // Dark Audi
    'https://images.unsplash.com/photo-1503373210986-e3d64bc9a502?auto=format&fit=crop&w=1920&q=80', // Porsche
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1920&q=80', // Ferrari
    'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=1920&q=80'  // Mercedes/Lambo style
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [backgrounds.length]);

  return (
    <section className="hero" id="home">
      
      {/* Background Slideshow */}
      <div className="hero-background-container">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={backgrounds[currentIndex]}
            alt="Luxury Car Background"
            className="hero-bg-img"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      <div className="hero-overlay"></div>
      
      <motion.div 
        className="container hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Schedule Your Appointment <span>Today</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Premium care for your luxury vehicle. Experience unmatched transparency, integrity, and efficiency.
        </motion.p>
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="tel:+918796081172" className="btn btn-primary">Call Now +91 87960 81172</a>
          <a href="#services" 
             className="btn btn-secondary"
             onClick={(e) => {
               e.preventDefault();
               document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
             }}
          >
            Explore Services
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
