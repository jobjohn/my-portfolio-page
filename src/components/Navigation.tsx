import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>Portfolio</h2>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;