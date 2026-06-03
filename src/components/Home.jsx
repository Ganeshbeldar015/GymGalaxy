import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
    const [stats, setStats] = useState({ members: 0, trainers: 0 });
    const [showMobileCards, setShowMobileCards] = useState(false);
    const statsRef = useRef(null);
    const animatedRef = useRef(false);
    const homeVisualRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !animatedRef.current) {
                        animatedRef.current = true;
                        animateStats();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShowMobileCards(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (homeVisualRef.current) {
            observer.observe(homeVisualRef.current);
        }

        return () => {
            if (homeVisualRef.current) {
                observer.unobserve(homeVisualRef.current);
            }
        };
    }, []);

    const animateStats = () => {
        const targetMembers = 500;
        const targetTrainers = 50;
        const duration = 2000; // 2 seconds
        const steps = 60; // 60fps
        const incrementMembers = targetMembers / (duration / (1000 / steps));
        const incrementTrainers = targetTrainers / (duration / (1000 / steps));

        let currentMembers = 0;
        let currentTrainers = 0;

        const timer = setInterval(() => {
            currentMembers += incrementMembers;
            currentTrainers += incrementTrainers;

            if (currentMembers >= targetMembers && currentTrainers >= targetTrainers) {
                clearInterval(timer);
                setStats({ members: targetMembers, trainers: targetTrainers });
            } else {
                setStats({
                    members: Math.floor(currentMembers),
                    trainers: Math.floor(currentTrainers)
                });
            }
        }, 1000 / steps);
    };

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
                            <a href="#plans" className="btn btn-primary">Start Your Journey</a>
                            <a href="#about" className="btn btn-secondary">Learn More</a>
                        </div>
                        <div className="home-stats" ref={statsRef}>
                            <div className="stat">
                                <h4>{stats.members}+</h4>
                                <p>Happy Members</p>
                            </div>
                            <div className="stat">
                                <h4>{stats.trainers}+</h4>
                                <p>Expert Trainers</p>
                            </div>
                            <div className="stat stat-247">
                                <h4>24/7</h4>
                                <p>Gym Access</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-visual" ref={homeVisualRef}>
                    <div className="home-img-container">
                        <img src="/GYM_Website_Images/home page.jpg" alt="Fitness Training" className="home-img" />
                        <div className="img-overlay"></div>
                    </div>
                    <div className={`floating-cards ${showMobileCards ? 'show-mobile' : ''}`}>
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