import React, { useState, useEffect } from 'react';

const ROLES = [
  'Full Stack Developer',
  'AI / ML Engineer',
  'RAG & LLM Specialist',
  'React + FastAPI Builder',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* Animated background orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Available for opportunities
        </div>

        <div className="player-profile">
          <div className="jersey-number">28</div>

          <div className="player-info">
            <h1 className="player-name">ABHISHEK B H</h1>
            <div className="player-role">
              <span className="typing-text">{displayed}</span>
              <span className="typing-cursor">|</span>
            </div>
            <p className="player-tagline">
              Building intelligent systems — from scalable APIs to multi-agent AI pipelines.
            </p>
          </div>

          <div className="hero-cta-row">
            <button className="cta-button" onClick={scrollToProjects}>
              View Projects
            </button>
            <button className="cta-button-secondary" onClick={scrollToContact}>
              Get in Touch
            </button>
          </div>

          <div className="hero-stats-row">
            <div className="hero-stat">
              <span className="hero-stat-num">10+</span>
              <span className="hero-stat-label">Projects</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">2+</span>
              <span className="hero-stat-label">Years Coding</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">7</span>
              <span className="hero-stat-label">Tech Domains</span>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" onClick={() => document.getElementById('profiles')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>

      <div className="stadium-lights">
        <div className="light" />
        <div className="light" />
        <div className="light" />
        <div className="light" />
      </div>
    </section>
  );
};

export default Hero;
