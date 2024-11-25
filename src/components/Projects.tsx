import React from 'react';
import styles from './Projects.module.css';
import vehicle from '../assets/images/vehicle.png';
import ToDo from '../assets/images/To Do.png'; 
import APPP2 from '../assets/images/APPP2.png';
import health from '../assets/images/health.png'
import dream from '../assets/images/dream.png'
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Dream Dealer System",
    description: "Dream Dealer: Dream Dealer is a vehicle rental company that provides a wide range of rental options, from luxurious four-wheelers to efficient two-wheelers, catering to individuals and businesses. With a focus on convenience and affordability, Dream Dealer ensures a seamless booking process, excellent customer service, and well-maintained vehicles for every journey.",
    image: dream,
    link: "https://dream-dealer-1dol.vercel.app/",
  },
  {
    title: "Mental Health Chatbot",
    description: " The Mental Health Chatbot is an AI-driven platform designed to support mental and physical wellness. Leveraging GPT-3, it provides empathetic conversations, mental health resources, and wellness tips. It connects users to professional help when needed, ensuring a personalized and confidential experience for anyone seeking mental health support",
    image: health,
    link: "https://health-tyak.vercel.app/",
  },
  {
    title: "TO DO",
    description: " The To-Do App is a productivity-focused tool designed to help users manage their daily tasks efficiently. It features task categorization, reminders, priority settings, and a user-friendly interface, making it easier to stay organized and achieve goals. Whether for personal use or team collaboration, this app simplifies task management.",
    image: ToDo,
    link: "https://to-do-app-eight-mocha.vercel.app/",
  },
  {
    title: "Vehicle Rental Management System",
    description: " vehicle rental company that provides a wide range of rental options, from luxurious four-wheelers to efficient two-wheelers, catering to individuals and businesses. With a focus on convenience and affordability, Dream Dealer ensures a seamless booking process, excellent customer service, and well-maintained vehicles for every journey",
    image: vehicle,
    link: "https://car-rental-frontend-liard.vercel.app/",
  },
  {
    title: "Restaurant API",
    description: " The Restaurant API is a cloud-hosted solution built on Azure that streamlines restaurant operations. It supports functionalities like menu management, reservation booking, order tracking, and customer feedback. Scalable and secure, this API enables restaurants to enhance customer satisfaction and operational efficiency",
    image: APPP2,
    link: "https://riyanhotel.azurewebsites.net/",
  },

 
];

const Portfolio: React.FC = () => {
  return (
    <section className={styles.portfolioSection}>
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.tabMenu}>
  <a href="https://riyanhotel.azurewebsites.net/" target="_blank" rel="noopener noreferrer">
    <button>Backend Developer</button>
  </a>
  <a href="https://health-tyak.vercel.app/" target="_blank" rel="noopener noreferrer">
    <button>Frontend Developer</button>
  </a>
  <a href="https://car-rental-frontend-liard.vercel.app/" target="_blank" rel="noopener noreferrer">
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
