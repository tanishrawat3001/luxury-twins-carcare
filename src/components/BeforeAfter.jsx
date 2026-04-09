import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './BeforeAfter.css';

const BeforeAfter = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const imgBefore = "https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=1920&q=80"; // Example: Dirty/Dusty
  const imgAfter = "https://images.unsplash.com/photo-1503373210986-e3d64bc9a502?auto=format&fit=crop&w=1920&q=80"; // Example: Clean/Shining

  const handleMove = (x) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let pos = ((x - rect.left) / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPos(pos);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="section before-after-section">
      <div className="container">
        <div className="section-header" style={{ justifyContent: 'center' }}>
          <span className="accent-line"></span>
          <motion.h2 
            className="section-title"
            style={{ marginBottom: '0', textAlign: 'center' }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            See the <span>Difference</span>
          </motion.h2>
          <span className="accent-line"></span>
        </div>
        <p className="services-subtitle" style={{ marginBottom: '3rem' }}>Slide to compare an unserviced car with a fully detailed finish.</p>

        <motion.div 
          className="before-after-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div 
            className="ba-container" 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            style={{ '--clip': `${sliderPos}%` }}
          >
            {/* Base Image (After / Cleaned) */}
            <img src={imgAfter} alt="After Detailing" className="img-after" />
            <span className="ba-label label-after">DETAILED</span>

            {/* Top Image (Before / Dirty) with Clip Path */}
            <div className="img-before-clipper">
              <img src={imgBefore} alt="Before Detailing" className="img-before" />
              <span className="ba-label label-before">UNSERVICED</span>
            </div>

            {/* Slider Line & Handle */}
            <div className="ba-slider-line">
              <div className="ba-slider-button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/><path d="M9 18l6-6-6-6"/></svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
