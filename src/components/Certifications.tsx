import React from 'react';
import CertificationCard from './CertificationCard';
import styles from './Certifications.module.css';

// Import images directly
import teach2giveImage from '../assets/images/teach2give.jpg';
import zidioImage from '../assets/images/india.jpg';

const Certifications: React.FC = () => {
  return (
    <div className={styles.certifications}>
      <CertificationCard
        title="Teach2Give Certified Software Developer"
        organization="Teach2Give"
        description="Certified in software development after an intensive three-month training program. Gained proficiency in frontend and backend technologies."
        skills={["React.js", "Redux", "TypeScript", "JavaScript", "HTML", "CSS", "Node.js", "Hono.js", "Drizzle ORM", "PostgreSQL"]}
        image={teach2giveImage}
        isReversed={false} // For alternating layout
      />
      <CertificationCard
        title="Web Development Specialist"
        organization="Zidio Development"
        description="Specialized in web development with a focus on teamwork and project management as a team lead. Gained skills in frontend and backend technologies while working collaboratively."
        skills={["React.js", "TypeScript", "JavaScript", "Team Leadership", "Collaboration"]}
        image={zidioImage}
        isReversed={true} // For alternating layout
      />
    </div>
  );
};

export default Certifications;
