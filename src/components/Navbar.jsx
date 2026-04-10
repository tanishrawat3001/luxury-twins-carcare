import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Allow React to mount the Home component before searching for the ID
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <Link to="/" onClick={() => window.scrollTo(0,0)} style={{ textDecoration: 'none' }}>
            <h2>LUXURY<span>TWINS</span></h2>
          </Link>
        </div>
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a></li>
          
          <li className="dropdown">
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="dropbtn">Services <span className="arrow">▼</span></a>
            
            {/* Mega Menu Dropdown */}
            <div className="mega-menu">
              <div className="mega-column">
                <h4>Mechanical</h4>
                <Link to="/service/svc-maintenance">🛠️ Maintenance & Repair</Link>
                <Link to="/service/svc-service">⚙️ Minor & Major Service</Link>
                <Link to="/service/svc-engine">🔧 Engine Repair</Link>
                <Link to="/service/svc-transmission">🕹️ Transmission Repair</Link>
                <Link to="/service/svc-brakes">🛑 Brakes Services</Link>
                <Link to="/service/svc-suspension">🛞 Suspension Services</Link>
              </div>
              
              <div className="mega-column">
                <h4>Diagnostics & Electrical</h4>
                <Link to="/service/svc-diagnostic">💻 Scanning & Diagnostics</Link>
                <Link to="/service/svc-ac">❄️ A/C Services</Link>
                <Link to="/service/svc-battery">🔋 Battery Services</Link>
                <Link to="/service/svc-inspection">📋 Pre-Purchase Insp.</Link>
                <Link to="/service/svc-oil">🛢️ Premium Oil</Link>
              </div>
              
              <div className="mega-column">
                <h4>Aesthetics & Body</h4>
                <Link to="/service/svc-bodywork">🔨 Body Work</Link>
                <Link to="/service/svc-paint">🎨 Paint Services</Link>
                <Link to="/service/svc-ceramic">✨ Ceramic Coating</Link>
                <Link to="/service/svc-upholstery">💺 Upholstery Work</Link>
                <Link to="/service/svc-sanitising">🧼 Sanitising Treatment</Link>
                <Link to="/service/svc-roof">⛺ Convertible Roof</Link>
              </div>
              
              <div className="mega-column highlight-col">
                <h4>Exclusive Gallery</h4>
                <p>View our recently transformed luxury vehicles.</p>
                <Link to="/service/svc-ceramic" className="mega-img-link">
                  <img src="./service_detailing_1775753088659.png" alt="Showcase" />
                </Link>
                <Link to="/service/svc-sales" style={{ borderBottom: 'none', padding: '10px 0 0 0', color: 'var(--accent-gold)' }}>🤝 Cars Buy & Sell Catalog</Link>
              </div>
            </div>
          </li>
          
          <li><a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>Gallery</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
        </ul>
        <div className="nav-cta">
          <a href="tel:+919354627795" className="btn btn-primary">Call Now</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
