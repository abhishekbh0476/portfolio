import React from 'react';

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "MongoDB",
    "Python",
    "AI / ML",
    "Deep Learning",
    "Rag",
    "NLP",
    "Mern"
  ];

  return (
    <section className="skills">
      <h2 className="section-title">Player Stats - Skills</h2>
      <div className="scoreboard">
        <div className="scoreboard-section">
          <h3>Technologies</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
