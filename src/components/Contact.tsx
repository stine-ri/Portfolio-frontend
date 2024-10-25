import React from 'react';
import styles from './Contact.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Contact: React.FC = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h2>Drop Me a Message</h2>
          <p>
            Feel free to reach out to me using any of the contact details below. I'm available for any inquiries or collaborations.
          </p>
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <i className="fa fa-phone"></i>Phone:
              <span>+254705912632</span>
            </div>
            <div className={styles.detailItem}>
              <i className="fa fa-envelope"></i>Email:
              <span>christinenyambwari@gmail.com</span>
            </div>
            <div className={styles.detailItem}>
              <i className="fa fa-map-marker"></i>Address:
              <span>1950, Nakuru, Kenya</span>
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <div className={styles.footer}>
  <span>© 2024 Stine Portfolio. All rights reserved.</span>
  <div className={styles.socialIcons}>
    <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook"></i>
    </a>
    <a href="https://www.linkedin.com/in/christine-nyambwari-8b465b2a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/stine-ri" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i>
    </a>
    <a href="https://www.behance.net/your-profile" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-behance"></i>
    </a>
  </div>
</div>

    </section>
  );
};

export default Contact;
