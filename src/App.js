import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profiles from './components/Profiles';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Profiles />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
