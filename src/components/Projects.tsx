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
                  {project.github && (project as any).stars && (
                    <span className="github-stars">⭐ {(project as any).stars}</span>
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
              {project.github && (
                <div className="project-links">
                  <a 
                    href={`https://github.com/jobjohn/${project.title}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="github-link"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub で見る
                  </a>
                </div>
              )}
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