import React from 'react';
import styles from './Certifications.module.css';

interface CertificationCardProps {
  title: string;
  organization: string;
  description: string;
  skills: string[];
  image: string;
  isReversed?: boolean;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  organization,
  description,
  skills,
  image,
  isReversed = false,
}) => {
  return (
    <div className={`${styles.certificationCard} ${isReversed ? styles.reversed : ''}`}>
      <img src={image} alt={`${title} certification`} className={`${styles.image} ${isReversed ? styles.imageReversed : ''}`} />
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.organization}>{organization}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.skill}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
