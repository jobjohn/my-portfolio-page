import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    {
      name: 'TypeScript',
      level: 90,
      description: '11,000+行の経験を持つメイン言語'
    },
    {
      name: 'JavaScript',
      level: 85,
      description: 'モダンなES6+機能の強固な基盤'
    },
    {
      name: 'CSS',
      level: 80,
      description: '10,000+行の豊富なスタイリング経験'
    },
    {
      name: 'HTML',
      level: 85,
      description: 'セマンティックなマークアップとアクセシビリティ'
    },
    {
      name: 'React',
      level: 80,
      description: 'フック関数とファンクショナルコンポーネント'
    },
    {
      name: 'Git & GitHub',
      level: 75,
      description: 'バージョン管理とチーム開発'
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