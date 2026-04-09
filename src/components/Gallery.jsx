import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const images = [
    // Garage
    { src: './svc_service_1775756877049.png', alt: 'Pristine Workshop Bay', category: 'Garage' },
    { src: './svc_maintenance_1775756810396.png', alt: 'Performance Maintenance', category: 'Garage' },
    { src: './svc_suspension_1775756969871.png', alt: 'Suspension & Undercarriage', category: 'Garage' },
    { src: './gallery_brakes_1775754348321.png', alt: 'Premium Brake Inspection', category: 'Garage' },
    { src: './gallery_interior_1775754384083.png', alt: 'Luxury Interior Cleaning', category: 'Garage' },

    // Diagnosis
    { src: './svc_diagnostic_1775756827596.png', alt: 'Digital Scanner OBD', category: 'Diagnosis' },
    { src: './svc_inspection_1775756936956.png', alt: 'Pre-Purchase Inspection', category: 'Diagnosis' },

    // Engine
    { src: './svc_engine_1775756918358.png', alt: 'V8 Engine Block Rebuild', category: 'Engine' },
    { src: './service_engine_1775753055793.png', alt: 'Engine Bay Detailing', category: 'Engine' },
    { src: './svc_transmission_1775756893286.png', alt: 'Complex Transmission Gears', category: 'Engine' },

    // Paint & Body
    { src: './gallery_wax_1775754367229.png', alt: 'Car Waxing and Polishing', category: 'Paint & Body' },
    { src: './service_detailing_1775753088659.png', alt: 'Ceramic Coating Finish', category: 'Paint & Body' }
  ];

  const categories = ['All', 'Garage', 'Diagnosis', 'Engine', 'Paint & Body'];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <section className="section gallery" id="gallery">
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
            Our <span>Gallery</span>
          </motion.h2>
          <span className="accent-line"></span>
        </div>

        {/* Dynamic Category Filters */}
        <motion.div 
          className="gallery-filters"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Animated Grid with AnimatePresence for the dissolve effect */}
        <motion.div layout className="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div 
                layout
                className="gallery-item" 
                key={img.src} // Crucial for framer-motion to track exits/enters
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }} // The dissolve out effect
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <img src={img.src} alt={img.alt} />
                <div className="gallery-overlay">
                  <span>{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
