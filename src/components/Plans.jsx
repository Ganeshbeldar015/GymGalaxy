import React from 'react';
import './Plans.css';

const Plans = () => {
    const plans = [
        {
            id: 1,
            name: "BRONZE",
            price: "₹500/Month",
            features: [
                "Smart Workout plan",
                "At Home Workout"
            ]
        },
        {
            id: 2,
            name: "SILVER",
            price: "₹700/Month",
            features: [
                "Pro GYMs",
                "Smart Workout plan",
                "At Home Workout"
            ]
        },
        {
            id: 3,
            name: "GOLD",
            price: "₹1000/Month",
            features: [
                "ELITE GYMs and Classes",
                "Smart Workout plan",
                "At Home Workout",
                "Personal Training"
            ]
        },
        {
            id: 4,
            name: "DIAMOND",
            price: "₹1500/Month",
            features: [
                "Loyalty program",
                "Smart Workout plan",
                "At Home Workout", 
                "Personal Training",
                "Personalized dashboards (track progress, goals)",
                "Video library (workouts, tips)"
            ]
        }
    ];

    return (
        <section className="plans" id="plans">
            <h2 className="heading">Our <span>Plans</span></h2>
            <div className="plans-content">
                {plans.map((plan) => (
                    <div key={plan.id} className="box">
                        <h3>{plan.name}</h3>
                        <h2><span>{plan.price}</span></h2>
                        <ul>
                            {plan.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <a href="#">
                            Join now
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Plans;
