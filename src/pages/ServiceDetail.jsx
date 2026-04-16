import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the requested service
  const service = servicesData.find(s => s.id === id);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service Not Found</h2>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Return to Home</button>
      </div>
    );
  }

  // Get 3 other related services for a bottom widget
  const otherServices = servicesData.filter(s => s.id !== id).slice(0, 3);

  return (
    <div className="service-detail-page">
      
      {/* Premium Hero Banner */}
      <div className="service-hero" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${service.img.replace('./', '')})` }}>
        <div className="service-hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="service-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge">Premium Care</div>
            <h1>{service.title}</h1>
            <p className="hero-subtitle">{service.desc}</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="container service-body">
        <div className="service-main-col">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            The Ultimate <span>Standard</span>
          </motion.h2>
          <div className="accent-line" style={{ margin: '1rem 0 2rem 0' }}></div>
          <p className="long-description">{service.longDesc}</p>
          
          <div className="service-features">
            <div className="feature-box">
              <h3>Precision Engineering</h3>
              <p>OEM certified tools ensure absolute factory correctness.</p>
            </div>
            <div className="feature-box">
              <h3>Master Technicians</h3>
              <p>Our experts have decades of exotic and luxury brand experience.</p>
            </div>
            <div className="feature-box">
              <h3>White-Glove Treatment</h3>
              <p>Your vehicle is kept in pristine conditions throughout its stay.</p>
            </div>
          </div>
        </div>

        <div className="service-side-col">
          <div className="contact-box">
            <h3>Book This Service</h3>
            <p>Call directly for VIP scheduling and precise estimations.</p>
            <a href="tel:+918796081172" className="btn btn-primary full-width">Call: +91 87960 81172</a>
            <div className="whatsapp-link">
              Or <a href="#whatsapp">Message us on WhatsApp</a>
            </div>
          </div>
        </div>
      </div>

      {/* Explore More Section */}
      <div className="explore-more">
        <div className="container">
          <h3 className="explore-title">Explore Other Services</h3>
          <div className="explore-grid">
            {otherServices.map(svc => (
              <Link to={`/service/${svc.id}`} className="explore-card" key={svc.id}>
                <div 
                  className="explore-img" 
                  style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${svc.img.replace('./', '')})` }}
                ></div>
                <div className="explore-txt">
                  <h4>{svc.title}</h4>
                  <span>Discover &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ServiceDetail;
