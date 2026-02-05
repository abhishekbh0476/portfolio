import React from 'react';

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      items: ["React", "JavaScript", "HTML5", "CSS3", "Redux"]
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "Python", "Flask", "FastAPI"]
    },
    {
      title: "AI/ML Tools",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP"]
    },
    {
      title: "Databases",
      items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase"]
    }
  ];

  return (
    <section className="tech-stack">
      <h2 className="section-title">Equipment Room - Tech Stack</h2>
      <div className="tech-grid">
        {techCategories.map((category, index) => (
          <div key={index} className="tech-category">
            <h3 className="tech-title">{category.title}</h3>
            <div className="tech-items">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="tech-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
