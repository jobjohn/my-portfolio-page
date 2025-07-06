import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">お問い合わせ</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>つながりましょう</h3>
            <p>
              新しい機会やコラボレーション、技術について話し合うことに
              いつでも興味を持っています。
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <h4>メール</h4>
                <p>お気軽にメールでご連絡ください</p>
              </div>
              <div className="contact-method">
                <h4>GitHub</h4>
                <p>私のプロジェクトとコントリビューションをご覧ください</p>
              </div>
              <div className="contact-method">
                <h4>LinkedIn</h4>
                <p>プロフェッショナルなネットワークでつながりましょう</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>メッセージを送る</h3>
            <form className="contact-form-container">
              <div className="form-group">
                <label htmlFor="name">お名前</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="お名前"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">メールアドレス</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">メッセージ</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  placeholder="メッセージをここに入力してください..."
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                メッセージを送信
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;