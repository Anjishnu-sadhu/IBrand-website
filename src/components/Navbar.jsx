import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Settings } from 'lucide-react';

const Navbar = ({ onConnectSales, onAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isLight = isScrolled || isHovered;

  return (
    <>
      <header 
        className={`header-wrapper ${isLight ? 'light' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <nav className="container navbar">
          <div className="nav-logo">
            <span className="nav-logo-icon"></span>
            iBrandMark
          </div>
          
          {/* Desktop Menu */}
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li>Features <ChevronDown size={14} /></li>
            <li>Pricing</li>
            <li>Migration <ChevronDown size={14} /></li>
            <li>Integrations <ChevronDown size={14} /></li>
            <li>Resources <ChevronDown size={14} /></li>
          </ul>

          {/* Desktop Actions */}
          <div className="nav-actions">
            <button className="btn btn-outline" onClick={onConnectSales}>Request demo</button>
            <button className="btn btn-primary" onClick={onConnectSales}>Start free</button>
          </div>

          {/* Hamburger Icon */}
          <button className="hamburger" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Admin Settings Button */}
      <button
        onClick={onAdmin}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 999,
          background: 'rgba(20, 20, 20, 0.9)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '12px',
          cursor: 'pointer',
          color: '#666',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(144, 244, 136, 0.2)';
          e.target.style.color = 'var(--accent-green)';
          e.target.style.borderColor = 'var(--accent-green)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(20, 20, 20, 0.9)';
          e.target.style.color = '#666';
          e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }}
        title="Email Settings"
      >
        <Settings size={20} />
      </button>
    </>
  );
};

export default Navbar;