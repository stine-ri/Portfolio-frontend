import React from 'react';
import { Link } from 'react-router-dom'; // Link component to navigate
import Projects from './Projects'; // Import the Projects component
import Services from './Services'; // Import the Services component
import Experience from './Experience'; // Import the Experience component
import Certifications from './Certifications'; // Import the Certifications component
import Contact from './Contact'; // Import the Contact component
import styles from './Home.module.css'; // CSS for Home
import me from '../assets/images/Me1.jpg'; // Profile image

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1>Hello, My Name Is <span>Christine Nyambwari</span></h1>
          <p>A Creative Full Stack Developer & Tech Enthusiast</p>
          <Link to="/about" className={styles.button}>Know More</Link>
          <a
              href="/Stine_resume.pdf"
              className={styles.downloadCv}
              target="_blank"
              rel="noopener noreferrer"
          >
              Resume 
          </a>
        </div>
        <div className={styles.heroImage}>
          <img src={me} alt="Profile" className={styles.heroImage} />
        </div>
      </section>

      {/* Display the content of the pages on Home */}
      <div className={styles.pageContent}>
        <Projects />
        <Services />
        <Experience />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
