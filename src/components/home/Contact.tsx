import React from "react";
import { CONTACT } from "@constants";
import styles from "./Contact.module.css";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className={`${styles.section} section section--darker`}>
      <div className="container">
        <h2 className="section-title">Skontaktuj sie z nami</h2>
        <p className={styles.description}>
          Gotowy na transformacje swojego biznesu? Skontaktuj sie z nami.
        </p>
        <div className={styles.contactInfo}>
          <a href={`mailto:${CONTACT.email}`} className={styles.contactLink}>
            {CONTACT.email}
          </a>
          <a href={CONTACT.phoneLink} className={styles.contactLink}>
            {CONTACT.phone}
          </a>
          <a
            href={CONTACT.calendlyLink}
            className={styles.bookMeeting}
            target="_blank"
            rel="noopener noreferrer"
          >
            Umow spotkanie
          </a>
        </div>
      </div>
    </section>
  );
};
