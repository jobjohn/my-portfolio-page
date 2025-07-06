import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <h1 className="home-title">私のポートフォリオへようこそ</h1>
          <p className="home-subtitle">TypeScript デベロッパー & フロントエンドエンジニア</p>
          <p className="home-description">
            TypeScript、JavaScript、モダンなフロントエンド技術に強い情熱を持った開発者です。
            クリーンで効率的、使いやすいアプリケーションの構築が好きです。
          </p>
          <div className="home-stats">
            <div className="stat">
              <span className="stat-number">11,000+</span>
              <span className="stat-label">行の TypeScript</span>
            </div>
            <div className="stat">
              <span className="stat-number">800+</span>
              <span className="stat-label">行の JavaScript</span>
            </div>
            <div className="stat">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">行の CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;