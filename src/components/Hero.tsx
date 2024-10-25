import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.title}>
        I'm a <br />
        <span className={styles.highlight}>Full Stack</span> Software Developer
      </h1>
      <a href="https://github.com/stine-ri" target="_blank" rel="noopener noreferrer">
  <button className={styles.projectsButton}>Previous Projects</button>
</a>

    </section>
  );
};

export default Hero;

