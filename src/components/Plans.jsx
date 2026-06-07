import React from 'react';
import { motion } from 'framer-motion';
import './Plans.css';

const Plans = () => {
    const plans = [
        {
            id: 1,
            name: "Starter",
            tier: "BRONZE",
            price: "500",
            features: [
                "Smart Workout plan",
                "At Home Workout",
                "Basic Equipment Access",
                "Community Support"
            ]
        },
        {
            id: 2,
            name: "Professional",
            tier: "SILVER",
            price: "700",
            features: [
                "Pro GYMs Access",
                "Smart Workout plan",
                "At Home Workout",
                "Locker Room Access",
                "2x Personal Training"
            ],
            popular: true
        },
        {
            id: 3,
            name: "Elite",
            tier: "GOLD",
            price: "1000",
            features: [
                "ELITE GYMs & Classes",
                "Smart Workout plan",
                "At Home Workout",
                "Personal Training (4/mo)",
                "Nutrition Coaching"
            ]
        },
        {
            id: 4,
            name: "Ultimate",
            tier: "DIAMOND",
            price: "1500",
            features: [
                "Loyalty program",
                "Unlimited Training",
                "Personalized Dashboard",
                "Premium Video Library",
                "24/7 VIP Support"
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 100, scale: 0.9, rotateX: -15 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: { 
                type: "spring",
                stiffness: 70,
                damping: 12,
                duration: 0.8
            }
        }
    };

    return (
        <section className="plans" id="plans">
            <div className="plans-wrapper">
                <motion.div 
                    className="plans-header"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="section-tag">Pricing Plans</span>
                    <h2 className="heading">Unlock Your <span>Potential</span></h2>
                    <p className="sub-heading">Choose a membership that fits your fitness goals and lifestyle.</p>
                </motion.div>

                <motion.div 
                    className="plans-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {plans.map((plan) => (
                        <motion.div 
                            key={plan.id} 
                            className={`plan-card-pro ${plan.popular ? 'featured' : ''}`}
                            variants={cardVariants}
                        >
                            {plan.popular && <div className="featured-tag">Best Value</div>}
                            <div className="card-top">
                                <span className="tier-label">{plan.tier}</span>
                                <h3 className="plan-title">{plan.name}</h3>
                            </div>
                            
                            <div className="price-tag">
                                <span className="currency">₹</span>
                                <span className="amount">{plan.price}</span>
                                <span className="period">/mo</span>
                            </div>

                            <div className="features-list-pro">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="feature-item-pro">
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="card-bottom">
                                <motion.button 
                                    className="select-plan-btn"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get Started
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Plans;
