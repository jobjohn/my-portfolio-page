import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <h1 className="home-title">Welcome to My Portfolio</h1>
          <p className="home-subtitle">TypeScript Developer & Frontend Engineer</p>
          <p className="home-description">
            I'm a passionate developer with strong expertise in TypeScript, JavaScript, and modern frontend technologies.
            I love building clean, efficient, and user-friendly applications.
          </p>
          <div className="home-stats">
            <div className="stat">
              <span className="stat-number">11,000+</span>
              <span className="stat-label">Lines of TypeScript</span>
            </div>
            <div className="stat">
              <span className="stat-number">800+</span>
              <span className="stat-label">Lines of JavaScript</span>
            </div>
            <div className="stat">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Lines of CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;