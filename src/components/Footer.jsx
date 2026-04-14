import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" id="contact">
      {/* Premium Pre-Footer CTA */}
      <div className="pre-footer-cta">
        <div className="container cta-container">
          <motion.div 
            className="cta-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Elevate Your Ride?</h2>
            <p>Experience unmatched automotive detail and engineering precision.</p>
          </motion.div>
          <motion.div 
            className="cta-action"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="tel:+918796081172" className="btn btn-gold-solid">Book an Appointment</a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="footer-main">
        <div className="container footer-grid">
          
          <motion.div className="footer-col brand-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>LUXURY<span>TWINS</span></h2>
            <p className="brand-desc">
              Gurgaon’s premier destination for high-end automotive care. We deliver absolute perfection, from routine maintenance to full aesthetic restorations.
            </p>
            <div className="social-icons">
              <a href="#" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </motion.div>

          <motion.div className="footer-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Our Story</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Our Services</a></li>
              <li><a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>Portfolio</a></li>
            </ul>
          </motion.div>

          <motion.div className="footer-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Business Hours</h3>
            <ul className="hours-block">
              <li><span>Monday - Friday</span> <span>9:00 AM - 7:00 PM</span></li>
              <li><span>Saturday</span> <span>9:00 AM - 5:00 PM</span></li>
              <li><span>Sunday</span> <span className="closed">Closed / Drop-off</span></li>
            </ul>
          </motion.div>

          <motion.div className="footer-col contact-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Get In Touch</h3>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <p><a href="tel:+918796081172" className="hover-gold">+91 87960 81172</a></p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <p><a href="mailto:info@luxurytwinscarcare.com" className="hover-gold">service@luxurytwins.in</a></p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {new Date().getFullYear()} Luxury Twins Car Care. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <span className="bullet">•</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
