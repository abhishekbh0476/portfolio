import React, { useState } from 'react';
import projects from '../data/projects';
import useScrollReveal from '../hooks/useScrollReveal';

const CATEGORY_COLORS = {
  'AI / NLP': '#2196F3',
  'Frontend': '#4CAF50',
  'AI / ML + IoT': '#9C27B0',
  'Python Application': '#FF9800',
  'Machine Learning': '#FF5722',
  'Blockchain': '#FFC107',
  'Deep Learning / Computer Vision': '#795548',
  'Full Stack': '#00BCD4',
  'Full Stack / AI': '#E91E63',
};

const MAX_BADGES = 6;

const ProjectCard = ({ project, index, featured }) => {
  const ref = useScrollReveal();
  const [showAllTech, setShowAllTech] = useState(false);
  const techList = project.tech.split(', ');
  const visibleTech = showAllTech ? techList : techList.slice(0, MAX_BADGES);
  const hiddenCount = techList.length - MAX_BADGES;

  return (
    <div
      ref={ref}
      className={`match-card reveal-item ${featured ? 'match-card-featured' : ''}`}
      style={{ '--reveal-delay': `${(index % 3) * 80}ms` }}
    >
      {featured && (
        <div className="featured-ribbon">⭐ Featured Project</div>
      )}

      <div className="match-header">
        <div
          className="match-category"
          style={{ backgroundColor: CATEGORY_COLORS[project.category] || '#666' }}
        >
          {project.category}
        </div>
        <div className="match-number">#{index + 1}</div>
      </div>

      <div className="match-content">
        <h3 className="match-title">{project.name}</h3>

        {project.description && (
          <p className="match-description">{project.description}</p>
        )}

        <div className="tech-badges-wrap">
          {visibleTech.map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
          {!showAllTech && hiddenCount > 0 && (
            <button
              className="tech-badge tech-badge-more"
              onClick={() => setShowAllTech(true)}
            >
              +{hiddenCount} more
            </button>
          )}
          {showAllTech && hiddenCount > 0 && (
            <button
              className="tech-badge tech-badge-more"
              onClick={() => setShowAllTech(false)}
            >
              show less
            </button>
          )}
        </div>
      </div>

      <div className="match-footer">
        <div className="match-footer-links">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-btn"
            >
              🚀 Live Demo
            </a>
          )}
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-match-btn"
            >
              GitHub →
            </a>
          ) : (
            <span className="private-badge">🔒 Private Repository</span>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const titleRef = useScrollReveal();
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="projects" id="projects">
      <div ref={titleRef} className="section-header reveal-item">
        <h2 className="section-title">Match Highlights</h2>
        <p className="section-subtitle">A selection of projects across AI, full stack, and beyond</p>
      </div>

      <div className="filter-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-tab ${activeFilter === cat ? 'filter-tab-active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={projects.indexOf(project)}
            featured={project.name.startsWith('CortexAI') && activeFilter === 'All'}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
