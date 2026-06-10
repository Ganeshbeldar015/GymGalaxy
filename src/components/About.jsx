import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [-30, 30]);

    const features = [
        {
            id: 1,
            title: "Supportive Community",
            text: "Our diverse membership base creates a friendly and supportive atmosphere, where you can make friends and stay motivated.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Modern Equipment",
            text: "From strength training to cardio, our gym is packed with the latest, top-quality fitness equipment to maximize your workouts.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6.5 6.5h11M6.5 17.5h11M18 5v14M6 5v14M3 8v8M21 8v8" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Hygienic & Clean",
            text: "We maintain a clean, hygienic space with regular sanitization and a welcoming atmosphere for everyone.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Nutrition Guidance",
            text: "Your fitness journey isn't just about exercise. Get access to expert advice on diet and meal planning to fuel your progress.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            )
        }
    ];

    const cardVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    return (
        <motion.section
            className="about"
            id="about"
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1 }}
        >
            <div className="about-header">
                <motion.span 
                    className="section-tag"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    Why Choose Us
                </motion.span>
                <motion.h2 
                    className="heading"
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    Unlock Your <span>True Potential</span>
                </motion.h2>
            </div>

            <div className="about-showcase">
                <motion.div 
                    className="left-features"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.12 }}
                >
                    {features.slice(0, 2).map((feature) => (
                        <motion.div 
                            key={feature.id} 
                            className="feature-item"
                            variants={cardVariants}
                        >
                            <div className="feature-icon-container">
                                {feature.icon}
                            </div>
                            <div className="feature-text-container">
                                <h3 className="feature-item-title">{feature.title}</h3>
                                <p className="feature-item-description">{feature.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="about-img"
                    style={{ y: yParallax }}
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <img src="/GYM_Website_Images/about.jpg" alt="About us" />
                </motion.div>

                <motion.div 
                    className="right-features"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.12 }}
                >
                    {features.slice(2, 4).map((feature) => (
                        <motion.div 
                            key={feature.id} 
                            className="feature-item"
                            variants={cardVariants}
                        >
                            <div className="feature-icon-container">
                                {feature.icon}
                            </div>
                            <div className="feature-text-container">
                                <h3 className="feature-item-title">{feature.title}</h3>
                                <p className="feature-item-description">{feature.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <motion.a 
                href="#" 
                className="btn"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px #D2F509' }}
                whileTap={{ scale: 0.97 }}
            >
                Book a Free Class
            </motion.a>
        </motion.section>
    );
};

export default About;
