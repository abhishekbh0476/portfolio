import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Experience = () => {
  const titleRef = useScrollReveal();
  const cardRef = useScrollReveal();

  return (
    <section className="experience" id="experience">
      <div ref={titleRef} className="section-header reveal-item">
        <h2 className="section-title">Career History</h2>
        <p className="section-subtitle">Where I've built, shipped, and learned</p>
      </div>

      <div className="experience-timeline">
        <div ref={cardRef} className="experience-card reveal-item">
          <div className="experience-header">
            <div className="experience-company-block">
              <div className="experience-company">Sonata Software Limited</div>
              <div className="experience-role">AI / ML Intern</div>
            </div>
            <div className="experience-meta">
              <div className="experience-date">Mar 2026 – Present</div>
              <div className="experience-location">📍 Bengaluru, Karnataka</div>
            </div>
          </div>
          <div className="experience-body">
            <ul className="experience-points">
              <li>Built production RAG pipelines and LangChain-based conversational agents for enterprise document Q&amp;A systems.</li>
              <li>Developed React.js front-end interfaces and Flask REST APIs for AI-powered internal applications.</li>
              <li>Integrated LLM-based solutions into production workflows, improving process automation efficiency.</li>
            </ul>
          </div>
          <div className="experience-tags">
            {['LangChain', 'RAG', 'React.js', 'Flask', 'Python', 'LLMs'].map(t => (
              <span key={t} className="exp-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
