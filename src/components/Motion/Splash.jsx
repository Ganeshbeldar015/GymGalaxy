import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Splash = ({ isVisible }) => {
  const shouldReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduce ? 0.3 : 0.8 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#000000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000,
          }}
        >
          <motion.h1
            initial={shouldReduce ? { opacity: 0 } : { scale: 0.5, opacity: 0 }}
            animate={shouldReduce ? { opacity: 1 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ color: '#ffffff', fontSize: '5rem', fontWeight: 'bold' }}
          >
            Gym<span style={{ color: '#D2F509' }}>Galaxy</span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Splash;
