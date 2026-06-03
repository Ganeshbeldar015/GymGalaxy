import React from 'react';
import './About.css';

const About = () => {
    const features = [
        {
            id: 1,
            text: "Our diverse membership base creates a friendly and supportive atmosphere, where you can make friends and stay motivated."
        },
        {
            id: 2,
            text: "From strength training to cardio, our gym is packed with the latest, top-quality fitness equipment to maximize your workouts."
        },
        {
            id: 3,
            text: "We maintain a clean, hygienic space with regular sanitization and a welcoming atmosphere for everyone."
        },
        {
            id: 4,
            text: "Your fitness journey isn't just about exercise. Get access to expert advice on diet and meal planning to fuel your progress."
        }
    ];

    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src="/GYM_Website_Images/about.jpg" alt="About us" />
            </div>
            <div className="about-content">
                <h2 className="heading">Why Choose Us?</h2>
                <div className="features-grid">
                    {features.map((feature) => (
                        <div key={feature.id} className="feature-card">
                            <p>{feature.text}</p>
                        </div>
                    ))}
                </div>
                <a href="#" className="btn">Book a Free Class</a>
            </div>
        </section>
    );
};

export default About;
