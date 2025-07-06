import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    {
      name: 'TypeScript',
      level: 90,
      description: '3つのプロジェクトで活用するメイン言語'
    },
    {
      name: 'JavaScript',
      level: 85,
      description: 'ウェブ開発の基盤技術として活用'
    },
    {
      name: 'HTML',
      level: 80,
      description: '静的サイト構築とマークアップ'
    },
    {
      name: 'CSS',
      level: 80,
      description: 'スタイリングとレスポンシブデザイン'
    },
    {
      name: 'GitHub Pages',
      level: 85,
      description: '静的サイトのデプロイと公開'
    },
    {
      name: 'Git & GitHub',
      level: 85,
      description: 'バージョン管理とプロジェクト公開'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">技術スキル</h2>
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