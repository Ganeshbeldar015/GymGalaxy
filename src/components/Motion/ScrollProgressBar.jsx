import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: '#D2F509',
        transformOrigin: '0%',
        zIndex: 10001,
      }}
    />
  );
};

export default ScrollProgressBar;
