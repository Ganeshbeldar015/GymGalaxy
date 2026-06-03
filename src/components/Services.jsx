import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            image: "/GYM_Website_Images/Service1.png",
        },
        {
            id: 2,
            image: "/GYM_Website_Images/Service2.png",
        }
    ];

    return (
        <section className="services" id="services">
            <h2 className="heading">Our <span>Services</span></h2>
            <div className="services-content">
                {services.map((service, index) => (
                    <>
                        <div key={service.id} className="service-card">
                            <img src={service.image} alt={service.title} className="card-image" />
                            <h4 className="card-title">{service.title}</h4>
                        </div>
                        {index === 0 && (
                            <div className="wave-separator">
                                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
                                            <stop offset="50%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
                                        </linearGradient>
                                        <filter id="waveGlow" x="-20%" y="-20%" width="140%" height="140%">
                                            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                                            <feMerge>
                                                <feMergeNode in="coloredBlur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>

                                </svg>
                            </div>
                        )}
                    </>
                ))}
            </div>
        </section>
    );
};

export default Services;
