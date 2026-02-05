import React from 'react';
import './index.css';
import Hero from './components/Hero';
import Profiles from './components/Profiles';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <Profiles />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
