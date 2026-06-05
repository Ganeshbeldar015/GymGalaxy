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
            <div className="home-background">
                <img src="/GYM_Website_Images/image2.jpg" alt="Fitness" className="hero-image" />
                <div className="hero-overlay"></div>
            </div>

            <div className="home-content">
                <h1 className="hero-title">Transform your life with Fitness</h1>
                <p className="hero-description">
                    Join us to achieve your fitness goals with our state-of-the-art facilities, expert trainers, and a supportive community.
                </p>
                <a href="#plans" className="hero-button">Join now</a>
            </div>
            
            <div className="curve-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="curve-svg">
                    <path fill="#ffffff" fill-opacity="1" d="M0,128L48,122.7C96,117,192,107,288,96C384,85,480,75,576,80C672,85,768,107,864,112C960,117,1056,107,1152,90.7C1248,75,1344,53,1392,42.7L1440,32L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default Home;