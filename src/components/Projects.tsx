import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built with TypeScript and React',
      technologies: ['TypeScript', 'React', 'CSS', 'Vite'],
      status: 'In Development'
    },
    {
      title: 'Static Site Projects',
      description: 'Multiple static websites deployed on GitHub Pages',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      status: 'Deployed'
    },
    {
      title: 'TypeScript Applications',
      description: 'Various TypeScript projects showcasing type safety',
      technologies: ['TypeScript', 'Node.js', 'Modern JavaScript'],
      status: 'Active'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className={`project-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="github-link">
          <p>More projects available on my GitHub profile</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;