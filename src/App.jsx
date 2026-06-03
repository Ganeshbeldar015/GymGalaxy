import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Plans from './components/Plans';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <About />
      <Plans />
    </div>
  );
}

export default App;
