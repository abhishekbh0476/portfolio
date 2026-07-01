import React from 'react';

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="section-title">Career History - Experience</h2>
      <div className="experience-timeline">
        <div className="experience-card">
          <div className="experience-header">
            <div className="experience-company-block">
              <div className="experience-company">Sonata Software Limited</div>
              <div className="experience-role">Intern</div>
            </div>
            <div className="experience-meta">
              <div className="experience-date">Mar 2026 – Present</div>
              <div className="experience-location">📍 Bengaluru, Karnataka</div>
            </div>
          </div>
          <div className="experience-body">
            <ul className="experience-points">
              <li>Built RAG pipelines and LangChain-based conversational agents for enterprise document Q&amp;A systems.</li>
              <li>Developed React.js front-end interfaces and Flask REST APIs for AI-powered internal applications.</li>
              <li>Integrated LLM-based solutions into production workflows, improving process automation efficiency.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
