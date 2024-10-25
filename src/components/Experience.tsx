import React from 'react';
import styles from './Experience.module.css';
import react2 from '../assets/images/React 2.webp';
import node from '../assets/images/node.png';
import typescript from '../assets/images/typescript.png';
import postgresql from '../assets/images/postgresql.png';
import hono from '../assets/images/hono.webp';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import javascript from '../assets/images/javascript.webp';
import tailwind from '../assets/images/tailwind.png';
import scss from '../assets/images/scss.png';
import drizzle from '../assets/images/drizzle.png';
import daisy from '../assets/images/daisy.png';

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.skillsGrid}>
        <div className={styles.skill}>
          <img src={react2} alt="React.js" className={styles.skillIcon} />
          <p>React.js</p>
        </div>
        <div className={styles.skill}>
          <img src={node} alt="Node.js" className={styles.skillIcon} />
          <p>Node.js</p>
        </div>
        <div className={styles.skill}>
          <img src={typescript} alt="TypeScript" className={styles.skillIcon} />
          <p>TypeScript</p>
        </div>
        <div className={styles.skill}>
          <img src={postgresql} alt="PostgreSQL" className={styles.skillIcon} />
          <p>PostgreSQL</p>
        </div>
        <div className={styles.skill}>
          <img src={hono} alt="Hono.js" className={styles.skillIcon} />
          <p>Hono.js</p>
        </div>
        <div className={styles.skill}>
          <img src={html} alt="HTML" className={styles.skillIcon} />
          <p>HTML</p>
        </div>
        <div className={styles.skill}>
          <img src={css} alt="CSS" className={styles.skillIcon} />
          <p>CSS</p>
        </div>
        <div className={styles.skill}>
          <img src={javascript} alt="JavaScript" className={styles.skillIcon} />
          <p>JavaScript</p>
        </div>
        <div className={styles.skill}>
          <img src={tailwind} alt="Tailwind CSS" className={styles.skillIcon} />
          <p>Tailwind CSS</p>
        </div>
        <div className={styles.skill}>
          <img src={scss} alt="SCSS" className={styles.skillIcon} />
          <p>SCSS</p>
        </div>
        <div className={styles.skill}>
          <img src={drizzle} alt="SCSS" className={styles.skillIcon} />
          <p>Drizlle ORM</p>
        </div>
        <div className={styles.skill}>
          <img src={daisy} alt="SCSS" className={styles.skillIcon} />
          <p>Daisy UI</p>
        </div>
        {/* Add more skills as needed */}
      </div>
    </section>
  );
};

export default Experience;
