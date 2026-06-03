import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            image: "/GYM_Website_Images/image1.jpg",
            title: "Physical Fitness"
        },
        {
            id: 2,
            image: "/GYM_Website_Images/image2.jpg",
            title: "Weight Gain"
        },
        {
            id: 3,
            image: "/GYM_Website_Images/image3.jpg",
            title: "Strength Training"
        },
        {
            id: 4,
            image: "/GYM_Website_Images/image4.jpg",
            title: "Fat Loss"
        },
        {
            id: 5,
            image: "/GYM_Website_Images/image5.jpg",
            title: "Weight Lifting"
        },
        {
            id: 6,
            image: "/GYM_Website_Images/about.jpg",
            title: "Stamina"
        }
    ];

    return (
        <section className="services" id="services">
            <h2 className="heading">Our <span>Services</span></h2>  
            <div className="services-content">
                {services.map((service) => (
                    <div key={service.id} className="row">
                        <img src={service.image} alt={service.title} />
                        <h4>{service.title}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
