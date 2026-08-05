import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-background">
        <img 
          src="/GYM_Website_Images/image2.jpg" 
          alt="Fitness Training" 
          className="hero-image" 
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="home-content">
        <h1 className="hero-title">
          Transform your life with Fitness
        </h1>
        <p className="hero-description">
          Join us to achieve your fitness goals with our state-of-the-art facilities, 
          expert trainers, and a supportive community.
        </p>
        <a href="#plans" className="hero-button">
          Join now
        </a>
      </div>
      
      <div className="curve-container">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="curve-svg"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 120L1440 120L1440 0C1440 0 1320 80 720 80C120 80 0 0 0 0L0 120Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Home;
