import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

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
            <motion.div 
                className="about-img"
                style={{ y: yParallax }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <img src="/GYM_Website_Images/about.jpg" alt="About us" />
            </motion.div>
            <div className="about-content">
                <motion.h2 
                    className="heading"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    Why <span>Choose Us?</span>
                </motion.h2>
                <motion.div 
                    className="features-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.15 }}
                >
                    {features.map((feature) => (
                        <motion.div 
                            key={feature.id} 
                            className="feature-card"
                            variants={cardVariants}
                            whileHover={{ y: -5, borderColor: '#D2F509', boxShadow: '0 10px 30px rgba(210, 245, 9, 0.2)' }}
                        >
                            <p>{feature.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
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
            </div>
        </motion.section>
    );
};

export default About;
