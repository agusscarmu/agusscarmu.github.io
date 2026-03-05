import { useState, useEffect } from 'react';
import { FaHeartbeat } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: scrolled ? '1rem 0' : '2rem 0',
      background: scrolled ? 'rgba(10, 10, 15, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FaHeartbeat style={{ color: 'var(--primary)' }} />
          <span>AC</span>
        </a>

        <nav>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            <li><a href="#tech-stack" className="nav-link">Technologies</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#research" className="nav-link">Research</a></li>
            <li><a href="#courses" className="nav-link">Courses</a></li>
          </ul>
        </nav>
      </div>
      <style>{`
        .nav-link {
          color: var(--text-muted);
          font-weight: 500;
          position: relative;
        }
        .nav-link:hover {
          color: #fff;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: var(--primary);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
};

export default Header;
