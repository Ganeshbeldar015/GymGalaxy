import React, { useState, useEffect } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import Lenis from 'lenis';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Plans from './components/Plans';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CustomCursor from './components/Motion/CustomCursor';
import Splash from './components/Motion/Splash';
import ScrollProgressBar from './components/Motion/ScrollProgressBar';
import BackToTop from './components/Motion/BackToTop';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
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
