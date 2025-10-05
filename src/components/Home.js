import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section className="home" id="home">
            {/* Animated Background Elements */}
            <div className="bg-animations">
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                    <div className="shape shape-5"></div>
                    <div className="shape shape-6"></div>
                </div>
                <div className="particle-system">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                    <div className="particle particle-5"></div>
                    <div className="particle particle-6"></div>
                    <div className="particle particle-7"></div>
                    <div className="particle particle-8"></div>
                </div>
                <div className="gradient-orbs">
                    <div className="orb orb-1"></div>
                    <div className="orb orb-2"></div>
                    <div className="orb orb-3"></div>
                </div>
            </div>

            <div className="home-container">
                <div className="home-content">
                    <div className="home-text">
                        <h3 className="home-subtitle">Transform Your Life</h3>
                        <h1 className="home-title">Build Your <span className="highlight">Dream Body</span></h1>
                        <h3 className="home-tagline"><span className="multiple-text">Strength • Power • Confidence</span></h3>
                        <p className="home-description">
                            Join our diverse community of fitness enthusiasts. Our supportive atmosphere helps you stay motivated, 
                            make friends, and achieve your fitness goals with world-class equipment and expert guidance.
                        </p>
                        <div className="home-buttons">
                            <a href="#" className="btn btn-primary">Start Your Journey</a>
                            <a href="#about" className="btn btn-secondary">Learn More</a>
                        </div>
                        <div className="home-stats">
                            <div className="stat">
                                <h4>500+</h4>
                                <p>Happy Members</p>
                            </div>
                            <div className="stat">
                                <h4>50+</h4>
                                <p>Expert Trainers</p>
                            </div>
                            <div className="stat">
                                <h4>24/7</h4>
                                <p>Gym Access</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-visual">
                    <div className="home-img-container">
                        <img src="/GYM_Website_Images/home page.jpg" alt="Fitness Training" className="home-img" />
                        <div className="img-overlay"></div>
                    </div>
                    <div className="floating-cards">
                        <div className="floating-card card-1">
                            <i className="fas fa-dumbbell"></i>
                            <span>Strength Training</span>
                        </div>
                        <div className="floating-card card-2">
                            <i className="fas fa-heart"></i>
                            <span>Cardio Fitness</span>
                        </div>
                        <div className="floating-card card-3">
                            <i className="fas fa-trophy"></i>
                            <span>Achieve Goals</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
