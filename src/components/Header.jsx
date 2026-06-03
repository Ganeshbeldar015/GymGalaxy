import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <header>
            <a href="#home" className="logo" onClick={() => scrollToSection('home')}>
                Gym<span>Galaxy</span>
            </a>
            <div 
                className={`fa-solid fa-bars ${isMenuOpen ? 'active' : ''}`} 
                id="menu-icon"
                onClick={toggleMenu}
            ></div>
            <ul className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
                <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
                <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
                <li><a href="#plans" onClick={() => scrollToSection('plans')}>Pricing</a></li>
                <li><a href="#review" onClick={() => scrollToSection('review')}>Review</a></li>
            </ul>
            <div className="top-btn">
                <a href="#" className="nav-btn">Join Us</a>
            </div>
        </header>
    );
};

export default Header;
