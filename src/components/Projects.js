import React from 'react';
import projects from '../data/projects';

const Projects = () => {
  const getCategoryColor = (category) => {
    switch(category) {
      case 'AI / NLP': return '#2196F3';
      case 'Frontend': return '#4CAF50';
      case 'AI / ML + IoT': return '#9C27B0';
      case 'Python Application': return '#FF9800';
      case 'Machine Learning': return '#FF5722';
      case 'Blockchain': return '#FFC107';
      case 'Deep Learning / Computer Vision': return '#795548';
      default: return '#666';
    }
  };

  return (
    <section className="projects">
      <h2 className="section-title">Match Highlights - Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="match-card">
            <div className="match-header">
              <div className="match-category" style={{ backgroundColor: getCategoryColor(project.category) }}>
                {project.category}
              </div>
              <div className="match-number">#{index + 1}</div>
            </div>
            <div className="match-content">
              <h3 className="match-title">{project.name}</h3>
              <div className="tech-stack">
                {project.tech.split(', ').map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
            <div className="match-footer">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-match-btn"
              >
                View Match →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
