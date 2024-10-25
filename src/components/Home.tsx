import React from 'react';
import styles from './Home.module.css'; // Ensure your CSS is here
import me from '../assets/images/Me1.jpg'; // Import the image

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1>
            Hello, My Name Is <span>Christine Nyambwari</span>
          </h1>
          <p>A Creative Full Stack Developer & Tech Enthusiast</p>
          <a href="/about" className={styles.button}>Know More</a>
        </div>
        <div className={styles.heroImage}>
          <img src={me} alt="Profile" className={styles.heroImage} /> 
          
        </div>
      </section>

      <section id="about" className={styles.aboutSection}>
        <h2>Who Am I</h2>
        <div className={styles.aboutContent}>
          <img src={me} alt="Profile" className={styles.profileImage} />
          <div className={styles.aboutText}>
            <p>
              I am Christine Nyambwari, a passionate Full Stack Developer based in Kenya. With a background in frontend and backend technologies, I focus on building efficient and scalable solutions.
            </p>
            <div className={styles.skills}>
              <div className={styles.skillGroup}>
                <span>React</span>
                <div className={styles.skillStars}>★★★★★</div>
              </div>
              <div className={styles.skillGroup}>
                <span>JavaScript</span>
                <div className={styles.skillStars}>★★★★★</div>
              </div>
              <div className={styles.skillGroup}>
                <span>TypeScript</span>
                <div className={styles.skillStars}>★★★★☆</div>
              </div>
              <div className={styles.skillGroup}>
                <span>Node.js</span>
                <div className={styles.skillStars}>★★★★☆</div>
              </div>
              <div className={styles.skillGroup}>
                <span>Hono.js</span>
                <div className={styles.skillStars}>★★★★★</div>
              </div>
              <div className={styles.skillGroup}>
                <span>Drizzle ORM</span>
                <div className={styles.skillStars}>★★★★★</div>
              </div>
            </div>
            <a href="/path_to_cv" className={styles.downloadCv}>Download CV</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
