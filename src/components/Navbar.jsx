import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <h2>LUXURY<span>TWINS</span></h2>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          
          <li className="dropdown">
            <a href="#services" className="dropbtn">Services <span className="arrow">▼</span></a>
            
            {/* Mega Menu Dropdown */}
            <div className="mega-menu">
              <div className="mega-column">
                <h4>Mechanical</h4>
                <a href="#svc-maintenance">🛠️ Maintenance & Repair</a>
                <a href="#svc-service">⚙️ Minor & Major Service</a>
                <a href="#svc-engine">🔧 Engine Repair</a>
                <a href="#svc-transmission">🕹️ Transmission Repair</a>
                <a href="#svc-brakes">🛑 Brakes Services</a>
                <a href="#svc-suspension">🛞 Suspension Services</a>
              </div>
              
              <div className="mega-column">
                <h4>Diagnostics & Electrical</h4>
                <a href="#svc-diagnostic">💻 Scanning & Diagnostics</a>
                <a href="#svc-ac">❄️ A/C Services</a>
                <a href="#svc-battery">🔋 Battery Services</a>
                <a href="#svc-inspection">📋 Pre-Purchase Insp.</a>
                <a href="#svc-oil">🛢️ Premium Oil</a>
              </div>
              
              <div className="mega-column">
                <h4>Aesthetics & Body</h4>
                <a href="#svc-bodywork">🔨 Body Work</a>
                <a href="#svc-paint">🎨 Paint Services</a>
                <a href="#svc-ceramic">✨ Ceramic Coating</a>
                <a href="#svc-upholstery">💺 Upholstery Work</a>
                <a href="#svc-sanitising">🧼 Sanitising Treatment</a>
                <a href="#svc-roof">⛺ Convertible Roof</a>
              </div>
              
              <div className="mega-column highlight-col">
                <h4>Exclusive Gallery</h4>
                <p>View our recently transformed luxury vehicles.</p>
                <a href="#gallery" className="mega-img-link">
                  <img src="/service_detailing_1775753088659.png" alt="Showcase" />
                </a>
                <a href="#svc-sales" style={{ borderBottom: 'none', padding: '10px 0 0 0', color: 'var(--accent-gold)' }}>🤝 Cars Buy & Sell Catalog</a>
              </div>
            </div>
          </li>
          
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        <div className="nav-cta">
          <a href="tel:+919354627795" className="btn btn-primary">Call Now</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
