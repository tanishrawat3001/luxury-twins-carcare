import React from 'react';
import { motion } from 'framer-motion';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="section contact-section" id="booking">
      <div className="container contact-container">
        
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Schedule Your <br/><span>VIP Appointment</span></h2>
          <p className="contact-desc">
            Reserve a dedicated time slot with our master technicians. We accommodate tight schedules and offer complimentary pickup & drop-off for premium services.
          </p>
          
          <div className="perks-list">
            <div className="perk">
              <span className="perk-icon">✓</span>
              <span>Priority Workshop Bay</span>
            </div>
            <div className="perk">
              <span className="perk-icon">✓</span>
              <span>Direct Technician Consultation</span>
            </div>
            <div className="perk">
              <span className="perk-icon">✓</span>
              <span>Complimentary Multi-Point Inspection</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="luxury-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="e.g. John Doe" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 xxxxx xxxxx" required />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Vehicle Make & Model</label>
                <input type="text" placeholder="e.g. Mercedes S-Class" />
              </div>
              <div className="form-group">
                <label>Service Area</label>
                <select defaultValue="">
                  <option value="" disabled>Select a focus...</option>
                  <option value="routine">Maintenance & Service</option>
                  <option value="body">Paint & Body Work</option>
                  <option value="diag">Diagnostics & Electronics</option>
                  <option value="detail">Ceramic & Detailing</option>
                  <option value="other">Other / Custom</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label>Specific Requests</label>
              <textarea rows="4" placeholder="Briefly describe what you're looking for..."></textarea>
            </div>

            <button type="button" className="btn btn-primary submit-btn">
              Request Booking <span>&rarr;</span>
            </button>
            <p className="form-note">*Our service concierge will call you within 1 hour to confirm.</p>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactForm;
