import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData as services } from '../data/servicesData';
import './Services.css';

const Services = () => {

  return (
    <section className="section services" id="services">
      <div className="container" style={{ maxWidth: '100%' }}>
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
            Premium <span>Services</span>
          </motion.h2>
          <span className="accent-line"></span>
        </div>
        <p className="services-subtitle">Experience comprehensive care across our 18 tailored categories.</p>

        {/* Native CSS Scroll-Snap Slider to support anchor IDs */}
        <motion.div 
          className="services-native-slider"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {services.map((svc) => (
            <Link to={`/service/${svc.id}`} className="slide-card" key={svc.id} style={{ textDecoration: 'none' }}>
              <div 
                className="slide-bg" 
                style={{ backgroundImage: `url(${svc.img})` }}
              ></div>
              <div className="slide-overlay">
                <div className="slide-content">
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Scroll Instruction */}
        <div className="scroll-indicator">
          <span>&larr; Swipe to explore &rarr;</span>
        </div>

      </div>
    </section>
  );
};

export default Services;
