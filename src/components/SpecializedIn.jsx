import React from 'react';
import { motion } from 'framer-motion';
import './SpecializedIn.css';

const SpecializedIn = () => {
  const brands = [
    { name: "INDIAN CARS", icon: "tata" },
    { name: "GERMAN CARS", icon: "volkswagen" },
    { name: "AMERICAN CARS", icon: "ford" },
    { name: "PORSCHE", icon: "porsche" },
    { name: "MERCEDES", icon: "mercedes" },
    { name: "BMW", icon: "bmw" },
    { name: "AUDI", icon: "audi" },
    { name: "LAND ROVER", icon: "landrover" }
  ];

  return (
    <section className="section specialized-in">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '1rem' }}
        >
          Specialized <span>In</span>
        </motion.h2>
        <motion.p 
          className="services-subtitle" 
          style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          All Premium Indian, German, American & Intercontinental Cars
        </motion.p>

        <div className="brands-container">
          <div className="brands-marquee">
            {brands.map((brand, idx) => (
              <div className="brand-card" key={`brand-${idx}`}>
                <img 
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/${brand.icon}.svg`} 
                  alt={`${brand.name} logo`} 
                  className="brand-logo-img"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span>{brand.name}</span>
              </div>
            ))}
            {/* Duplicate for infinite loop effect */}
            {brands.map((brand, idx) => (
              <div className="brand-card" key={`dup-${idx}`}>
                <img 
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/${brand.icon}.svg`} 
                  alt={`${brand.name} logo`} 
                  className="brand-logo-img"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span>{brand.name}</span>
              </div>
            ))}
            {/* Triplicate for seamless loop across larger screens */}
            {brands.map((brand, idx) => (
              <div className="brand-card" key={`trip-${idx}`}>
                <img 
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/${brand.icon}.svg`} 
                  alt={`${brand.name} logo`} 
                  className="brand-logo-img"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedIn;
