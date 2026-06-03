import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src="/GYM_Website_Images/about.jpg" alt="About us" />
            </div>
            <div className="about-content">
                <h2 className="heading">Why Choose Us?</h2>
                <p>Our diverse membership base creates a friendly and supportive atmosphere, where you can make friends and stay motivated.</p>
                <p>From strength training to cardio, our gym is packed with the latest, top-quality fitness equipment to maximize your workouts.</p>
                <p>We maintain a clean, hygienic space with regular sanitization and a welcoming atmosphere for everyone.</p>
                <p>Your fitness journey isn't just about exercise. Get access to expert advice on diet and meal planning to fuel your progress.</p>
                <a href="#" className="btn">Book a Free Class</a>
            </div>
        </section>
    );
};

export default About;
