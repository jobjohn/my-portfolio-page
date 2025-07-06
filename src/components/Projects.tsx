import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'jobjohn.github.io',
      description: 'TypeScript で構築された個人ポートフォリオサイト',
      technologies: ['TypeScript', 'GitHub Pages'],
      status: '公開済み',
      github: true
    },
    {
      title: 'gh-next',
      description: 'TypeScript を活用した Next.js プロジェクト',
      technologies: ['TypeScript', 'Next.js'],
      status: '開発中',
      github: true
    },
    {
      title: 'test-wiki',
      description: 'TypeScript で実装されたウィキシステムのテスト',
      technologies: ['TypeScript'],
      status: '実験中',
      github: true
    },
    {
      title: 'gh-pages-test',
      description: 'GitHub Pages のテスト用 JavaScript プロジェクト',
      technologies: ['JavaScript', 'GitHub Pages'],
      status: '公開済み',
      github: true
    },
    {
      title: 'aaajobjohn.github.io',
      description: 'HTML ベースの静的サイト',
      technologies: ['HTML', 'GitHub Pages'],
      status: '公開済み',
      github: true
    },
    {
      title: 'my-app',
      description: 'CSS を中心としたアプリケーション',
      technologies: ['CSS'],
      status: '開発中',
      github: true
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
                <div className="project-badges">
                  {project.github && project.stars && (
                    <span className="github-stars">⭐ {project.stars}</span>
                  )}
                  <span className={`project-status status-${project.status === '開発中' ? 'in-development' : project.status === '公開済み' ? 'deployed' : project.status === '実験中' ? 'experimental' : 'active'}`}>
                    {project.status}
                  </span>
                </div>
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