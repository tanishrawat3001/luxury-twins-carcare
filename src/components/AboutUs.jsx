import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="section about" id="about">
      <div className="container about-container">
        
        {/* Left Side: Images Collage */}
        <motion.div 
          className="about-images-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-image-primary">
            <img src="./service_engine_1775753055793.png" alt="Workshop Garage" loading="lazy" />
          </div>
          <div className="about-image-secondary">
            <img src="./gallery_interior_1775754384083.png" alt="Luxury Interior Detail" loading="lazy" />
          </div>
          <div className="about-experience-badge">
            <h3>10+</h3>
            <p>Years of<br/>Excellence</p>
          </div>
        </motion.div>

        {/* Right Side: Detailed Content */}
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="section-header">
            <span className="accent-line"></span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>About <span>Us</span></h2>
          </div>
          <p className="about-subtitle">Leading Car Repair & Service Center in Gurgaon</p>
          
          <div className="about-text-blocks">
            <p>
              With over 10+ years in providing Exceptional Services to more than 10,000 customers all over Gurgaon NCR, Luxury Twins Car Care was built on a simple philosophy: a premium vehicle demands a premium class of service. Specialized artisans understand the intricate engineering behind the world's most prestigious automotive brands.
            </p>
            <p>
              By combining state-of-the-art diagnostic equipment with industry-leading manual techniques, our factory-trained specialists ensure your vehicle performs flawlessly. Unmatched transparency and integrity are at the core of everything we do.
            </p>
          </div>

          <div className="about-highlights">
            <ul>
              <li><span className="check-icon">✓</span> 10,000+ Customers All Over Gurgaon NCR</li>
              <li><span className="check-icon">✓</span> 100% Genuine OEM Parts</li>
              <li><span className="check-icon">✓</span> Unmatched Transparency</li>
            </ul>
          </div>

          <a href="#services" className="btn btn-primary" style={{ marginTop: '1rem' }}>Discover Our Services</a>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
