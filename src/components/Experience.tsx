import React from 'react';
import styles from './Experience.module.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiRedux, SiPostgresql, SiDrizzle, SiHono, SiDaisyui, SiSass,SiFigma } from 'react-icons/si';
import azure from '../assets/images/azure.jpg'
const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.skillsGrid}>
        <div className={styles.skill}>
          <FaReact size={60} color="#61DBFB" />
          <p>React.js</p>
        </div>
        <div className={styles.skill}>
          <FaNodeJs size={60} color="#68A063" />
          <p>Node.js</p>
        </div>
        <div className={styles.skill}>
          <SiTypescript size={60} color="#3178C6" />
          <p>TypeScript</p>
        </div>
        <div className={styles.skill}>
          <SiPostgresql size={60} color="#336791" />
          <p>PostgreSQL</p>
        </div>
        <div className={styles.skill}>
          <SiHono size={60} color="#FF6A00" />
          <p>Hono.js</p>
        </div>
        <div className={styles.skill}>
          <FaHtml5 size={60} color="#E44D26" />
          <p>HTML</p>
        </div>
        <div className={styles.skill}>
          <FaCss3Alt size={60} color="#1572B6" />
          <p>CSS</p>
        </div>
        <div className={styles.skill}>
          <FaJsSquare size={60} color="#F7DF1E" />
          <p>JavaScript</p>
        </div>
        <div className={styles.skill}>
          <SiTailwindcss size={60} color="#38B2AC" />
          <p>Tailwind CSS</p>
        </div>
        <div className={styles.skill}>
          <SiSass size={60} color="#CD6799" />
          <p>SCSS</p>
        </div>
        <div className={styles.skill}>
          <SiDrizzle size={60} color="#84B6F4" />
          <p>Drizzle ORM</p>
        </div>
        <div className={styles.skill}>
          <SiDaisyui size={60} color="#FF69B4" />
          <p>Daisy UI</p>
        </div>
        <div className={styles.skill}>
          <SiRedux size={60} color="#764ABC" />
          <p>Redux.js</p>
        </div>
        <div className={styles.skill}>
          <img src={azure} alt="Azure" className={styles.skillIcon} />
          <p>Azure</p>
        </div>
        <div className={styles.skill}>
          <FaDatabase size={60} color="#F29111" />
          <p>SQL</p>
        </div>
        <div className={styles.skill}>
          <SiFigma size={60} color="#F29111" />
          <p>Figma</p>
        </div>
        {/* Add more skills if needed */}
      </div>
    </section>
  );
};

export default Experience;
