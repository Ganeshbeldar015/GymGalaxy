import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import useCountUp from './Motion/useCountUp';
import './Stats.css';

const StatItem = ({ target, label, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const count = useCountUp(target, 2000, isInView);

    return (
        <div className="stat-item" ref={ref}>
            <h3>{count}{suffix}</h3>
            <p>{label}</p>
        </div>
    );
};

const Stats = () => {
    return (
        <section className="stats">
            <div className="stats-container">
                <StatItem target={500} label="Happy Members" suffix="+" />
                <StatItem target={50} label="Expert Trainers" suffix="+" />
                <StatItem target={20} label="Gym Facilities" suffix="+" />
                <StatItem target={10} label="Years Experience" suffix="+" />
            </div>
        </section>
    );
};

export default Stats;
