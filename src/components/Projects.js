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
      case 'Full Stack': return '#00BCD4';
      case 'Full Stack / AI': return '#E91E63';
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
              {project.description && (
                <p className="match-description">{project.description}</p>
              )}
              <div className="tech-stack">
                {project.tech.split(', ').map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
            <div className="match-footer">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-match-btn"
                >
                  View Match →
                </a>
              ) : (
                <span className="private-badge">🔒 Private Repository</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
