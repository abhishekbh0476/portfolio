import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'profiles', label: 'Profiles' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
      let current = 'hero';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  // navLinks is a static constant defined outside — safe to omit
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        <button className="navbar-logo" onClick={() => scrollTo('hero')}>
          <span className="navbar-logo-num">28</span>
          <span className="navbar-logo-name">ABH</span>
        </button>

        <ul className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={`navbar-link ${activeSection === link.id ? 'navbar-link-active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1uT4YK9cMqzzyGcNDutM2N1Cpqt62WGCd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-resume-btn"
            >
              Resume ↗
            </a>
          </li>
        </ul>

        <button
          className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
