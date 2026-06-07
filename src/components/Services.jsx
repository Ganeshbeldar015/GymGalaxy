import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            image: "/GYM_Website_Images/Service1.png",
            title: "Weight Lifting"
        },
        {
            id: 2,
            image: "/GYM_Website_Images/Service2.png",
            title: "Cardio & HIIT"
        },
        {
            id: 3,
            image: "/GYM_Website_Images/image1.jpg",
            title: "Personal Training"
        },
        {
            id: 4,
            image: "/GYM_Website_Images/image3.jpg",
            title: "Group Yoga"
        },
        {
            id: 5,
            image: "/GYM_Website_Images/image4.jpg",
            title: "Boxing & MMA"
        },
        {
            id: 6,
            image: "/GYM_Website_Images/image5.jpg",
            title: "Diet & Nutrition"
        }
    ];

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    return (
        <section className="services" id="services">
            <motion.h2 
                className="heading"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                Our <span>Services</span>
            </motion.h2>
            <motion.div 
                className="services-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.15 }}
            >
                {services.map((service, index) => (
                    <React.Fragment key={service.id}>
                        <motion.div 
                            className="service-card"
                            variants={cardVariants}
                            whileHover={{ y: -10, borderColor: '#D2F509', boxShadow: '0 0 20px rgba(210, 245, 9, 0.3)' }}
                        >
                            <img src={service.image} alt={service.title} className="card-image" />
                            <h4 className="card-title">{service.title}</h4>
                        </motion.div>
                        {index === 2 && (
                            <div className="divider-container">
                                <motion.div 
                                    className="divider-line"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </motion.div>
        </section>
    );
};

export default Services;
