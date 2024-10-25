import React from 'react';
import styles from './Services.module.css';

const Services: React.FC = () => {
  // Replace these URLs with your actual GitHub repository links for each service
  const serviceLinks = [
    'https://tech-assessment-rosy.vercel.app/',
    'https://car-rental-frontend-git-master-christine-nyambwaris-projects.vercel.app/',
    'https://api-vehiclebackend.onrender.com',
    'https://riyanhotel.azurewebsites.net/',
  ];

  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.title}>Services</h2>
      <div className={styles.servicesGrid}>
        {serviceLinks.map((link, index) => (
          <div key={index} className={styles.service}>
            <div className={styles.icon}>
              <i className={`fas fa-${index === 0 ? 'laptop-code' : index === 1 ? 'mobile-alt' : index === 2 ? 'server' : 'plug'}`}></i>
            </div>
            <h3>{index === 0 ? 'Web Development' : index === 1 ? 'Frontend Development' : index === 2 ? 'Backend Development' : 'API Integration'}</h3>
            <p>
              {index === 0
                ? 'Building responsive and dynamic websites using modern frontend and backend technologies like React.js, Node.js and PostgreSQL.'
                : index === 1
                ? 'Creating cross-platform with detailed UI/UX that provide seamless experiences for users.'
                : index === 2
                ? 'Designing and developing robust backend solutions using Hono.js, Drizzle ORM, and PostgreSQL.'
                : 'Integrating external services and APIs into applications for enhanced functionality. Restaurant API'}
            </p>
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>
              View My Service
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
