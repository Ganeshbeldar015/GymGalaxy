import React, { useState, useEffect } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Plans from './components/Plans';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CustomCursor from './components/Motion/CustomCursor';
import Splash from './components/Motion/Splash';
import ScrollProgressBar from './components/Motion/ScrollProgressBar';
import BackToTop from './components/Motion/BackToTop';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const shouldReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="App">
        <Splash isVisible={showSplash} />
        <CustomCursor />
        <ScrollProgressBar />
        {!showSplash && (
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
          >
            <Header />
            <Home />
            <Services />
            <About />
            <Trainers />
            <Plans />
            <Testimonials />
            <CTA />
            <Footer />
            <BackToTop />
          </motion.div>
        )}
      </div>
    </MotionConfig>
  );
}

export default App;
