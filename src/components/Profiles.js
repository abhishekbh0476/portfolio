import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const PROFILES = [
  {
    name: 'GitHub',
    handle: '@abhishekbh0476',
    url: 'https://github.com/abhishekbh0476',
    icon: FaGithub,
    color: '#e0e0e0',
    desc: 'Open-source projects & code',
  },
  {
    name: 'LinkedIn',
    handle: 'Abhishek B H',
    url: 'https://www.linkedin.com/in/abhishek-b-h-1774a8336/',
    icon: FaLinkedin,
    color: '#0A66C2',
    desc: 'Professional network',
  },
  {
    name: 'LeetCode',
    handle: '@abhishekbh04',
    url: 'https://leetcode.com/u/abhishekbh04/',
    icon: SiLeetcode,
    color: '#FFA116',
    desc: 'DSA & problem solving',
  },
];

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.unobserve(el); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
};

const ProfileCard = ({ profile, delay }) => {
  const ref = useReveal();
  const Icon = profile.icon;
  return (
    <a
      ref={ref}
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      className="profile-card reveal-item"
      style={{ '--reveal-delay': delay, borderColor: profile.color }}
    >
      <div className="profile-icon-wrap" style={{ color: profile.color }}>
        <Icon size={30} />
      </div>
      <div className="profile-text">
        <div className="profile-name">{profile.name}</div>
        <div className="profile-handle">{profile.handle}</div>
        <div className="profile-desc">{profile.desc}</div>
      </div>
      <span className="profile-arrow" style={{ color: profile.color }}>↗</span>
    </a>
  );
};

const Profiles = () => {
  const titleRef = useReveal();

  return (
    <section className="profiles" id="profiles">
      <div ref={titleRef} className="section-header reveal-item">
        <h2 className="section-title">Player Profiles</h2>
        <p className="section-subtitle">Find me across the web</p>
      </div>
      <div className="profiles-grid">
        {PROFILES.map((profile, i) => (
          <ProfileCard key={profile.name} profile={profile} delay={`${i * 100}ms`} />
        ))}
      </div>
    </section>
  );
};

export default Profiles;
