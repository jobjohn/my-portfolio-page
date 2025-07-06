import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in discussing new opportunities, 
              collaborations, or just chatting about technology.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <h4>Email</h4>
                <p>Feel free to reach out via email</p>
              </div>
              <div className="contact-method">
                <h4>GitHub</h4>
                <p>Check out my projects and contributions</p>
              </div>
              <div className="contact-method">
                <h4>LinkedIn</h4>
                <p>Connect with me professionally</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form className="contact-form-container">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;