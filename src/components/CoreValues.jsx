import React from 'react';
import { motion } from 'framer-motion';
import './CoreValues.css';

const CoreValues = () => {
  const values = [
    {
      title: 'Transparency',
      icon: '🔍',
      desc: 'Clear, honest communication about what your vehicle needs with no hidden fees.'
    },
    {
      title: 'Integrity',
      icon: '🛡️',
      desc: 'Doing the right thing for you and your car, using genuine parts and approved methods.'
    },
    {
      title: 'Efficiency',
      icon: '⚡',
      desc: 'Fast, reliable service to get you back on the road in your luxury vehicle quickly.'
    }
  ];

  // Enhanced "Pop-up" spring animation for a highly premium feel
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 60 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 110,
        damping: 12
      } 
    }
  };

  return (
    <section className="section core-values" id="about">
      <div className="container">
        
        <div className="section-header" style={{ justifyContent: 'center', marginBottom: '4rem' }}>
          <span className="accent-line"></span>
          <motion.h2 
            className="section-title"
            style={{ marginBottom: '0', textAlign: 'center' }}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Why Choose <span>Us</span>
          </motion.h2>
          <span className="accent-line"></span>
        </div>

        <motion.div 
          className="values-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((val, idx) => (
            <motion.div 
              className="value-card-premium" 
              key={idx} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -15, 
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)",
                borderColor: "var(--accent-gold)"
              }}
            >
              <div className="value-icon-container">
                <div className="value-icon">{val.icon}</div>
                <div className="icon-glow"></div>
              </div>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
              <div className="bottom-highlight"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
