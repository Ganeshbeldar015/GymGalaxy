
import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">
              <i className="fas fa-dumbbell"></i>GYM <span>Galaxy</span>
            </h2>
            <p className="footer-tagline">
              We offer everything you need to achieve your goals and more. Join us and turn your fitness dreams into reality.
            </p>
          </div>
        </div>

        <div className="footer-links-section">
          <div className="footer-column">
            <h3 className="footer-heading">Pages</h3>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
              <li><a href="#plans" onClick={(e) => { e.preventDefault(); scrollToSection('plans'); }}>Pricing</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Utility</h3>
            <ul className="footer-links">
              <li><a href="#">Style Guide</a></li>
              <li><a href="#">Instructions</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Licenses</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-contact">
              <li><i className="fas fa-map-marker-alt"></i> 123 Fitness Lane, Wellness City, CA 12345</li>
              <li><i className="fas fa-envelope"></i> hello@gymgalaxy.com</li>
              <li><i className="fas fa-phone"></i> (123) 456-7890</li>
            </ul>
          </div>

          <div className="footer-column footer-hours">
            <div className="hours-card">
              <h4>Opening hours</h4>
              <p>Monday - Friday: 5:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 7:00 AM - 8:00 PM</p>
              <a href="#" className="location-btn">
                <i className="fas fa-map-marker-alt"></i> View location
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <a href="#" className="footer-privacy">Privacy Policy</a>
          </div>
          <div className="footer-bottom-right">
            <p>Designed by Webestica, Powered by <span>GYM Galaxy</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
