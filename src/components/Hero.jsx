import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  // Motion values to track mouse position (-1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse values with a spring physics configuration
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // Map the smooth spring values to translation pixel/percentage values
  // Background moves slightly opposite to the mouse
  const bgX = useTransform(springX, [-1, 1], ['-2%', '2%']);
  const bgY = useTransform(springY, [-1, 1], ['-2%', '2%']);

  // Typography/Foreground moves slightly towards the mouse
  const textX = useTransform(springX, [-1, 1], ['2%', '-2%']);
  const textY = useTransform(springY, [-1, 1], ['2%', '-2%']);

  // Floating shape layers (midground) move at different speeds
  const shape1X = useTransform(springX, [-1, 1], ['-4%', '4%']);
  const shape1Y = useTransform(springY, [-1, 1], ['-4%', '4%']);
  const shape2X = useTransform(springX, [-1, 1], ['3%', '-3%']);
  const shape2Y = useTransform(springY, [-1, 1], ['3%', '-3%']);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate normalized position (-1 to 1 based on center)
    const xPos = (e.clientX - rect.left - centerX) / centerX;
    const yPos = (e.clientY - rect.top - centerY) / centerY;

    mouseX.set(xPos);
    mouseY.set(yPos);
  };

  const handleMouseLeave = () => {
    // Return to center when mouse leaves
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      className="hero parallax-hero" 
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Background Layer */}
      <motion.div 
        className="hero-background-container"
        style={{ x: bgX, y: bgY }}
      >
        <img
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Car Background"
          className="hero-bg-img"
        />
        <div className="hero-overlay"></div>
      </motion.div>

      {/* Abstract Glowing Floating Shapes (Depth illusion) */}
      <motion.div className="hero-shape shape-glow-1" style={{ x: shape1X, y: shape1Y }} />
      <motion.div className="hero-shape shape-glow-2" style={{ x: shape2X, y: shape2Y }} />
      
      {/* Foreground Content Layer */}
      <motion.div 
        className="container hero-content"
        style={{ x: textX, y: textY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Premium Car Service & Detailing in <span>10 + Locations in Delhi NCR</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
          <a href="#services" 
             className="btn btn-primary"
             onClick={(e) => {
               e.preventDefault();
               document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
             }}
          >
            Book Service
          </a>
          <a href="tel:+918796081172" className="btn btn-secondary">Call Now</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
