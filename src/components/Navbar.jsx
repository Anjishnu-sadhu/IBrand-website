import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = ({ onConnectSales }) => {
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
          
          {/* Actions inside mobile menu */}
          {/* <li className="mobile-actions">
            <button className="btn btn-outline">Request demo</button>
            <button className="btn btn-primary">Start free</button>
          </li> */}
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
  );
};

export default Navbar;
