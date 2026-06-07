import React from 'react';
import { motion } from 'framer-motion';
import './Trainers.css';

const Trainers = () => {
    const trainers = [
        {
            id: 1,
            name: "John Doe",
            role: "Bodybuilding Coach",
            image: "/GYM_Website_Images/image1.jpg"
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "Yoga Instructor",
            image: "/GYM_Website_Images/image3.jpg"
        },
        {
            id: 3,
            name: "Mike Tyson",
            role: "Boxing Trainer",
            image: "/GYM_Website_Images/image4.jpg"
        },
        {
            id: 4,
            name: "Alex Johnson",
            role: "Crossfit Expert",
            image: "/GYM_Website_Images/image5.jpg"
        }
    ];

    return (
        <section className="trainers" id="trainers">
            <motion.h2 
                className="heading"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Expert <span>Trainers</span>
            </motion.h2>
            <div className="trainers-content">
                {trainers.map((trainer, index) => (
                    <motion.div 
                        key={trainer.id} 
                        className="trainer-card"
                        initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        whileHover={{ y: -8 }}
                    >
                        <div className="trainer-img">
                            <img src={trainer.image} alt={trainer.name} />
                            <div className="trainer-overlay">
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="trainer-info">
                            <h3>{trainer.name}</h3>
                            <p>{trainer.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Trainers;
