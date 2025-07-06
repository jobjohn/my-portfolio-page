import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    {
      name: 'TypeScript',
      level: 90,
      description: 'Primary language with 11,000+ lines of experience'
    },
    {
      name: 'JavaScript',
      level: 85,
      description: 'Strong foundation with modern ES6+ features'
    },
    {
      name: 'CSS',
      level: 80,
      description: 'Extensive styling experience with 10,000+ lines'
    },
    {
      name: 'HTML',
      level: 85,
      description: 'Semantic markup and accessibility best practices'
    },
    {
      name: 'React',
      level: 80,
      description: 'Modern React with hooks and functional components'
    },
    {
      name: 'Git & GitHub',
      level: 75,
      description: 'Version control and collaboration'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;