import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <motion.a 
                href="#home" 
                className="logo pulse-glow" 
                onClick={() => scrollToSection('home')}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                Gym<span>Galaxy</span>
            </motion.a>
            <div 
                className={`fa-solid fa-bars ${isMenuOpen ? 'active' : ''}`} 
                id="menu-icon"
                onClick={toggleMenu}
            ></div>
            <div className={`navbar-wrapper ${isMenuOpen ? 'active' : ''}`}>
                <ul className={`navbar`}>
                    <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
                    <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
                    <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a href="#plans" onClick={() => scrollToSection('plans')}>Pricing</a></li>
                    <li><a href="#review" onClick={() => scrollToSection('review')}>Review</a></li>
                </ul>
                <div className="top-btn">
                    <a href="#" className="nav-btn" onClick={() => setIsMenuOpen(false)}>Join Us</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
