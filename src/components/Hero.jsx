import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import './Hero.css';

const HERO_IMAGES = [
  `${import.meta.env.BASE_URL}hero_car_luxury_1775753031548.png`,     // Luxury Exterior
  `${import.meta.env.BASE_URL}gallery_interior_1775754384083.png`,     // Luxury Interior
  `${import.meta.env.BASE_URL}service_detailing_1775753088659.png`,    // Professional Detailing
  `${import.meta.env.BASE_URL}hero_detailing_topdown.png`,             // Premium Top-down Detailing
  `${import.meta.env.BASE_URL}hero_car_foam.png`                      // Premium Foam Wash
];

const Hero = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Motion values to track mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const backgroundX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const backgroundY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);
  const midgroundX = useTransform(smoothX, [-0.5, 0.5], [-50, 50]);
  const midgroundY = useTransform(smoothY, [-0.5, 0.5], [-50, 50]);
  const foregroundX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const foregroundY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
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
      {/* Background Slider with Parallax */}
      <motion.div 
        className="hero-background-container"
        style={{ x: backgroundX, y: backgroundY }}
      >
        <AnimatePresence mode='wait'>
          <motion.img
            key={currentIndex}
            src={HERO_IMAGES[currentIndex]}
            alt={`Luxury Car ${currentIndex + 1}`}
            className="hero-bg-img"
            initial={{ opacity: 0, x: 50, scale: 1.1 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 1.05 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.8 }
            }}
          />
        </AnimatePresence>
      </motion.div>

      {/* Floating orbs */}
      <motion.div className="hero-glow-orb hero-glow-orb-1" style={{ x: midgroundX, y: midgroundY }} />
      <motion.div className="hero-glow-orb hero-glow-orb-2" style={{ x: midgroundX, y: midgroundY }} />

      <div className="hero-overlay"></div>
      
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
