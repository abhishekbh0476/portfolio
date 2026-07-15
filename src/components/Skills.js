import React, { useEffect, useRef, useState } from 'react';

const SKILLS = [
  { name: 'React / Frontend', level: 90, color: '#61dafb' },
  { name: 'Python / FastAPI', level: 88, color: '#ff6b35' },
  { name: 'RAG & LLM Pipelines', level: 85, color: '#E91E63' },
  { name: 'AI / ML & Deep Learning', level: 82, color: '#9C27B0' },
  { name: 'NLP & LangChain', level: 80, color: '#2196F3' },
  { name: 'Node.js / Express', level: 80, color: '#4CAF50' },
  { name: 'Databases (SQL / NoSQL)', level: 78, color: '#FFC107' },
  { name: 'Docker / DevOps', level: 65, color: '#00BCD4' },
];

const TAGS = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Redux',
  'Node.js', 'Express', 'FastAPI', 'Flask', 'Spring Boot',
  'Python', 'Java', 'SQL', 'MongoDB', 'PostgreSQL', 'Redis',
  'TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'LangGraph',
  'FAISS', 'OpenCV', 'Solidity', 'Web3.js', 'Docker', 'Git',
];

const SkillBar = ({ skill, animate }) => (
  <div className="skill-bar-row">
    <div className="skill-bar-header">
      <span className="skill-bar-name">{skill.name}</span>
      <span className="skill-bar-pct" style={{ color: skill.color }}>{skill.level}%</span>
    </div>
    <div className="skill-bar-track">
      <div
        className="skill-bar-fill"
        style={{
          width: animate ? `${skill.level}%` : '0%',
          background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
          boxShadow: animate ? `0 0 12px ${skill.color}66` : 'none',
        }}
      />
    </div>
  </div>
);

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  // Title reveal
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Trigger bar fill animation when section enters view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div ref={titleRef} className="section-header reveal-item">
        <h2 className="section-title">Player Stats</h2>
        <p className="section-subtitle">Core proficiencies and technology expertise</p>
      </div>

      <div className="skills-layout">
        {/* No reveal-item here — panels are always visible */}
        <div className="skills-bars">
          <h3 className="skills-sub-title">Proficiency</h3>
          {SKILLS.map(skill => (
            <SkillBar key={skill.name} skill={skill} animate={animated} />
          ))}
        </div>

        <div className="skills-tags-panel">
          <h3 className="skills-sub-title">Technologies</h3>
          <div className="skills-tags">
            {TAGS.map(tag => (
              <span key={tag} className="skill-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
