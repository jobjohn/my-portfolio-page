import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'ポートフォリオサイト',
      description: 'TypeScript と React で構築した個人ポートフォリオ',
      technologies: ['TypeScript', 'React', 'CSS', 'Vite'],
      status: '開発中'
    },
    {
      title: '静的サイトプロジェクト',
      description: 'GitHub Pages にデプロイされた複数の静的サイト',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      status: '公開済み'
    },
    {
      title: 'TypeScript アプリケーション',
      description: '型安全性を活用した様々な TypeScript プロジェクト',
      technologies: ['TypeScript', 'Node.js', 'Modern JavaScript'],
      status: '活動中'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">プロジェクト</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className={`project-status status-${project.status === '開発中' ? 'in-development' : project.status === '公開済み' ? 'deployed' : 'active'}`}>
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
          <p>その他のプロジェクトは GitHub プロフィールで確認できます</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;