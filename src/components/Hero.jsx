import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  
  // Motion values to track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse movement
  const springConfig = { damping: 40, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Background and floating element parallax transforms
  const backgroundX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const backgroundY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);
  
  const midgroundX = useTransform(smoothX, [-0.5, 0.5], [-50, 50]);
  const midgroundY = useTransform(smoothY, [-0.5, 0.5], [-50, 50]);

  const foregroundX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const foregroundY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    // Calculate normalized coordinates (-0.5 to +0.5)
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      className="hero" 
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Dynamic Background Image */}
      <motion.div 
        className="hero-background-container"
        style={{ x: backgroundX, y: backgroundY }}
      >
        <img
          src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Car Background"
          className="hero-bg-img"
        />
      </motion.div>

      {/* Floating abstract decorative elements (Midground) */}
      <motion.div 
        className="hero-glow-orb hero-glow-orb-1"
        style={{ x: midgroundX, y: midgroundY }}
      />
      <motion.div 
        className="hero-glow-orb hero-glow-orb-2"
        style={{ x: midgroundX, y: midgroundY }}
      />

      <div className="hero-overlay"></div>
      
      {/* Foreground Content */}
      <motion.div 
        className="container hero-content"
        style={{ x: foregroundX, y: foregroundY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        >
          Schedule Your Appointment <span>Today</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Trusted by 10,000+ Customers | Pickup & Drop Available
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#booking" 
             className="btn btn-primary"
             onClick={(e) => {
               e.preventDefault();
               document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
             }}
          >
            Book Service
          </a>
          <a href="tel:+918796081172" className="btn btn-secondary">
            Call Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
