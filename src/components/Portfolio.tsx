import React from 'react';
import styles from './Portfolio.module.css';
import vehicle from '../assets/images/vehicle.png';
import ToDo from '../assets/images/To Do.png'; 
import APPP2 from '../assets/images/APPP2.png';
import mental from '../assets/images/mental.jpg'

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Vehicle Rental Management System",
    description: "A mobile app design that helps users find meaningful connections based on mutual interests and preferences.",
    image: vehicle,
    link: "https://vercel.com/christine-nyambwaris-projects/car-rental-frontend",
  },
  {
    title: "TO DO",
    description: "An e-commerce app that provides a seamless shopping experience, complete with cart management and payment integration.",
    image: ToDo,
    link: "https://tech-assessment-rosy.vercel.app/",
  },
  {
    title: "Restaurant API",
    description: "An app focused on fitness tracking, goal-setting, and health analytics for users looking to stay in shape.",
    image: APPP2,
    link: "https://riyanhotel.azurewebsites.net/",
  },
  {
    title: "Mental Health Chatbot",
    description: " A chatbot designed to provide mental health support, integrating GPT-3 for personalized wellness, recommendations and conversation insights.",
    image: mental,
    link: "https://riyanhotel.azurewebsites.net/",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className={styles.portfolioSection}>
      <h2 className={styles.title}>Portfolio</h2>

      <div className={styles.tabMenu}>
  <a href="https://riyanhotel.azurewebsites.net/" target="_blank" rel="noopener noreferrer">
    <button>Backend Developer</button>
  </a>
  <a href="https://tech-assessment-rosy.vercel.app/" target="_blank" rel="noopener noreferrer">
    <button>Frontend Developer</button>
  </a>
  <a href="https://car-rental-frontend-git-master-christine-nyambwaris-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
    <button>FullStack Developer</button>
  </a>
  <a href="https://api-vehiclebackend.onrender.com" target="_blank" rel="noopener noreferrer">
    <button>Other Projects</button>
  </a>
</div>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.projectCard} ${
              index % 2 === 0 ? styles.imageLeft : styles.imageRight
            }`}
          >
            <div className={styles.projectContent}>
              <img src={project.image} alt={project.title} className={styles.projectImg} />
              <div className={styles.projectDetails}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewProjectButton}
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
