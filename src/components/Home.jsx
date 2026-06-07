import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Home.css';

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const titleWords = "Transform your life with Fitness".split(" ");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const wordVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
        },
    };

    return (
        <section className="home" id="home">
            <motion.div 
                className="home-background"
                style={{ y: y1 }}
            >
                <img src="/GYM_Website_Images/image2.jpg" alt="Fitness" className="hero-image ken-burns" />
                <div className="hero-overlay"></div>
            </motion.div>

            <motion.div 
                className="home-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ opacity }}
            >
                <h1 className="hero-title">
                    {titleWords.map((word, index) => (
                        <motion.span 
                            key={index} 
                            variants={wordVariants}
                            style={{ display: 'inline-block', marginRight: '10px' }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>
                <motion.p 
                    className="hero-description"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    Join us to achieve your fitness goals with our state-of-the-art facilities, expert trainers, and a supportive community.
                </motion.p>
                <motion.a 
                    href="#plans" 
                    className="hero-button"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                        delay: 1.3, 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 10 
                    }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px #D2F509' }}
                    whileTap={{ scale: 0.97 }}
                >
                    Join now
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Home;