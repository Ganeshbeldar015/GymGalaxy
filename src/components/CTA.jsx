import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './CTA.css';

const CTA = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section className="cta-banner" ref={ref}>
            <motion.div 
                className="cta-bg-parallax" 
                style={{ x }}
            ></motion.div>
            <div className="cta-overlay"></div>
            <motion.div 
                className="cta-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="typewriter">Ready to transform your life?</h2>
                <p>Join the GymGalaxy family today and start your journey towards a healthier, stronger you.</p>
                <motion.a 
                    href="#plans" 
                    className="cta-btn pulse-glow"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Get Started Now
                </motion.a>
            </motion.div>
        </section>
    );
};

export default CTA;
