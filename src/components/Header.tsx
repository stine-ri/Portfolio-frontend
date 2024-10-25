import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Header.module.css';
import logo from '../assets/images/Christine.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Stine Portfolio Logo" className={styles.logoImage} />
      <nav className={styles.navbar}>
        {/* Use Link for internal routing instead of anchor tags */}
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/about" className={styles.navLink}>About Me</Link>
        <Link to="/portfolio" className={styles.navLink}>Portfolio</Link>
        <Link to="/services" className={styles.navLink}>Services</Link>
        <Link to="/experience" className={styles.navLink}>Experience</Link>
        <Link to="/contact" className={styles.navLink}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
