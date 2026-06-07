import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Rahul Sharma",
            text: "GymGalaxy transformed my fitness journey. The trainers are top-notch and the atmosphere is incredibly motivating!",
            role: "Member"
        },
        {
            id: 2,
            name: "Priya Patel",
            text: "Best gym in the city! The equipment is modern and the community is so supportive. Highly recommended!",
            role: "Member"
        },
        {
            id: 3,
            name: "Amit Kumar",
            text: "I've seen amazing results in just 3 months. The personalized workout plans really make a difference.",
            role: "Member"
        }
    ];

    return (
        <section className="testimonials" id="review">
            <motion.h2 
                className="heading"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                What Our <span>Members Say</span>
            </motion.h2>
            <motion.div 
                className="testimonials-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                {testimonials.map((test) => (
                    <motion.div 
                        key={test.id} 
                        className="testimonial-card"
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                    >
                        <i className="fas fa-quote-left quote-icon"></i>
                        <p>{test.text}</p>
                        <div className="test-info">
                            <h4>{test.name}</h4>
                            <span>{test.role}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Testimonials;
