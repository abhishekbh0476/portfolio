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

const useReveal = (threshold = 0.12) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
};

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
  const titleRef = useReveal();
  const barsRef = useReveal();
  const tagsRef = useReveal();
  const [animated, setAnimated] = useState(false);

  // Trigger bar animations when the bars panel comes into view
  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [barsRef]);

  return (
    <section className="skills" id="skills">
      <div ref={titleRef} className="section-header reveal-item">
        <h2 className="section-title">Player Stats</h2>
        <p className="section-subtitle">Core proficiencies and technology expertise</p>
      </div>

      <div className="skills-layout">
        <div
          ref={barsRef}
          className="skills-bars reveal-item"
          style={{ '--reveal-delay': '0ms' }}
        >
          <h3 className="skills-sub-title">Proficiency</h3>
          {SKILLS.map(skill => (
            <SkillBar key={skill.name} skill={skill} animate={animated} />
          ))}
        </div>

        <div
          ref={tagsRef}
          className="skills-tags-panel reveal-item"
          style={{ '--reveal-delay': '120ms' }}
        >
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
