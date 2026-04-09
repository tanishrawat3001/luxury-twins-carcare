import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'Maintenance & Repair', desc: 'Comprehensive auto care.', img: './svc_maintenance_1775756810396.png', id: 'svc-maintenance' },
    { title: 'Minor & Major Service', desc: 'Milestone checks.', img: './svc_service_1775756877049.png', id: 'svc-service' },
    { title: 'Engine Repair', desc: 'Full rebuilds.', img: './svc_engine_1775756918358.png', id: 'svc-engine' },
    { title: 'Transmission Repair', desc: 'Gearbox inspections.', img: './svc_transmission_1775756893286.png', id: 'svc-transmission' },
    { title: 'Brakes Services', desc: 'Pad & rotor tuning.', img: './svc_brakes_1775756952860.png', id: 'svc-brakes' },
    { title: 'Suspension Services', desc: 'Shocks & alignment.', img: './svc_suspension_1775756969871.png', id: 'svc-suspension' },
    
    { title: 'Scanning & Diagnostics', desc: 'Computerized OBD testing.', img: './svc_diagnostic_1775756827596.png', id: 'svc-diagnostic' },
    { title: 'A/C Services', desc: 'Leak testing & refill.', img: './svc_ac_1775756843320.png', id: 'svc-ac' },
    { title: 'Battery Services', desc: 'Testing & replacement.', img: './svc_battery_1775756986031.png', id: 'svc-battery' },
    { title: 'Pre-Purchase Insp.', desc: '150-Point verification.', img: './svc_inspection_1775756936956.png', id: 'svc-inspection' },
    { title: 'Premium Oil', desc: 'Synthetic oil changes.', img: './svc_oil_1775756861307.png', id: 'svc-oil' },
    
    { title: 'Body Work', desc: 'Dent & collision repair.', img: './service_engine_1775753055793.png', id: 'svc-bodywork' },
    { title: 'Paint Services', desc: 'Color matching & correction.', img: './gallery_wax_1775754367229.png', id: 'svc-paint' },
    { title: 'Ceramic Coating', desc: '9H protection layers.', img: './service_detailing_1775753088659.png', id: 'svc-ceramic' },
    { title: 'Upholstery Work', desc: 'Leather repair & detailing.', img: './gallery_interior_1775754384083.png', id: 'svc-upholstery' },
    { title: 'Sanitising Treatment', desc: 'Ozone purification.', img: './gallery_wax_1775754367229.png', id: 'svc-sanitising' },
    { title: 'Convertible Roof', desc: 'Mechanism & fabric care.', img: './service_detailing_1775753088659.png', id: 'svc-roof' },
    { title: 'Cars Buy & Sell', desc: 'Premium auto trading.', img: './hero_car_luxury_1775753031548.png', id: 'svc-sales' }
  ];

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
            <div className="slide-card" key={svc.id} id={svc.id}>
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
            </div>
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
