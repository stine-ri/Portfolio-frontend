import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/images/Snapchat-952421492.jpg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleLinkClick = (path: string) => {
    setIsMenuOpen(false); // Close the menu immediately
    setTimeout(() => {
      navigate(path); // Navigate after 3 seconds
    }, 3000);
  };

  return (
    <header className={styles.header}>
      <img src={logo} alt="Stine Portfolio Logo" className={styles.logoImage} />
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.line} ${isMenuOpen ? styles.active : ''}`}></div>
        <div className={`${styles.line} ${isMenuOpen ? styles.active : ''}`}></div>
        <div className={`${styles.line} ${isMenuOpen ? styles.active : ''}`}></div>
      </div>
      <nav className={`${styles.navbar} ${isMenuOpen ? styles.active : ''}`}>
        <Link to="/" className={styles.navLink} onClick={() => handleLinkClick('/')}>Home</Link>
        <Link to="/about" className={styles.navLink} onClick={() => handleLinkClick('/about')}>About Me</Link>
        <Link to="/projects" className={styles.navLink} onClick={() => handleLinkClick('/projects')}>Projects</Link>
        <Link to="/services" className={styles.navLink} onClick={() => handleLinkClick('/services')}>Services</Link>
        <Link to="/experience" className={styles.navLink} onClick={() => handleLinkClick('/experience')}>Experience</Link>
        <Link to="/certificates" className={styles.navLink} onClick={() => handleLinkClick('/certificates')}>Certificates</Link>
        <Link to="/contact" className={styles.navLink} onClick={() => handleLinkClick('/contact')}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
