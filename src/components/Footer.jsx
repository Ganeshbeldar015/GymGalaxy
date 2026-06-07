
import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.footer 
        className="footer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
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
          <div className="footer-social">
            <motion.a href="#" whileHover={{ scale: 1.3, color: '#D2F509' }}><i className="fab fa-facebook-f"></i></motion.a>
            <motion.a href="#" whileHover={{ scale: 1.3, color: '#D2F509' }}><i className="fab fa-twitter"></i></motion.a>
            <motion.a href="#" whileHover={{ scale: 1.3, color: '#D2F509' }}><i className="fab fa-instagram"></i></motion.a>
            <motion.a href="#" whileHover={{ scale: 1.3, color: '#D2F509' }}><i className="fab fa-youtube"></i></motion.a>
          </div>
        </div>

        <div className="footer-links-section">
          <div className="footer-column">
            <h3 className="footer-heading">Pages</h3>
            <ul className="footer-links">
              <li><motion.a href="#home" whileHover={{ x: 4, color: '#D2F509' }} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</motion.a></li>
              <li><motion.a href="#about" whileHover={{ x: 4, color: '#D2F509' }} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</motion.a></li>
              <li><motion.a href="#services" whileHover={{ x: 4, color: '#D2F509' }} onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</motion.a></li>
              <li><motion.a href="#plans" whileHover={{ x: 4, color: '#D2F509' }} onClick={(e) => { e.preventDefault(); scrollToSection('plans'); }}>Pricing</motion.a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Utility</h3>
            <ul className="footer-links">
              <li><motion.a href="#" whileHover={{ x: 4, color: '#D2F509' }}>Style Guide</motion.a></li>
              <li><motion.a href="#" whileHover={{ x: 4, color: '#D2F509' }}>Instructions</motion.a></li>
              <li><motion.a href="#" whileHover={{ x: 4, color: '#D2F509' }}>Changelog</motion.a></li>
              <li><motion.a href="#" whileHover={{ x: 4, color: '#D2F509' }}>Licenses</motion.a></li>
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
              <motion.a href="#" className="location-btn" whileHover={{ scale: 1.05, boxShadow: '0 0 15px #D2F509' }}>
                <i className="fas fa-map-marker-alt"></i> View location
              </motion.a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <a href="#" className="footer-privacy">Privacy Policy</a>
          </div>
          <div className="footer-bottom-right">
            <p>Designed and built by <span>GYM Galaxy</span></p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
