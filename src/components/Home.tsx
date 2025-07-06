import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <h1 className="home-title">jobjohn のポートフォリオ</h1>
          <p className="home-subtitle">TypeScript Developer & Frontend Engineer</p>
          <p className="home-description">
            TypeScript を中心としたモダンなウェブ開発に取り組んでいる開発者です。
            GitHub Pages を活用した静的サイト構築や、フロントエンド技術を使った実験的なプロジェクトを手がけています。
          </p>
          <div className="home-stats">
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">リポジトリ</span>
            </div>
            <div className="stat">
              <span className="stat-number">4</span>
              <span className="stat-label">技術スタック</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">TypeScript プロジェクト</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;