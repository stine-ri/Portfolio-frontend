import React from 'react';
import styles from './AboutMe.module.css';
import { Link } from 'react-router-dom';
import me1 from '../assets/images/Me1.jpg'
const AboutMe: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <img src={me1} alt="Profile" className={styles.profileImg} />
      <div className={styles.aboutText}>
        <h2>About Me</h2>
        <p>
        I am Christine Nyambwari, a full-stack developer certified by Teach2Give, with expertise in both frontend and backend technologies. My skills span across various frameworks and languages, including React.js, Node.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Daisy UI, Hono.js, Drizzle ORM, and PostgreSQL.I hold a Bachelor’s degree in Business Information Technology from Kirinyaga University, where I’ve developed a passion for building scalable and user-centric applications. Throughout my journey, I’ve worked on several projects such as a Vehicle Rental Management System, a Comprehensive Health Chatbot with GPT-3 integration for mental and physical wellness, and a Maternal Health Monitoring System for a Kenya Red Cross competition.
       As a developer, I focus on creating responsive, efficient, and functional applications. My approach emphasizes clean, maintainable code with a keen eye for detail in UI/UX. I enjoy problem-solving and continuously strive to learn and adapt new technologies to meet the needs of the project.
       Feel free to explore some of my projects through the live demos linked below!

        </p>
        <div className={styles.buttons}>
        <a href="https://github.com/stine-ri" target="_blank" rel="noopener noreferrer">
         <button className={styles.githubBtn}>GitHub</button>
          </a>
          <Link to="/contact">
              <button className={styles.hireMeBtn}>Hire Me</button>
          </Link>
          <button className={styles.resumeBtn}>Curriculum Vitae</button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
