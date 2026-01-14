import React from "react";
import { CONTACT } from "@constants";
import styles from "./Hero.module.css";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <video
        className={styles.heroVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={`${import.meta.env.BASE_URL}video/hero.mp4`} type="video/mp4" />
      </video>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroGradientTop}></div>
      <div className={styles.heroGradientBottom}></div>
      <div className={styles.heroInner}>
        <p className={styles.serviceLabel}>SysFlow /</p>
        <h1 className={styles.title}>
          Automatyzacja, AI, bezpieczeństwo i systemy zarządzania danymi
        </h1>
        <p className={styles.subtitle}>
          SysFlow.One to software house, który przekształca sposób pracy firm
          poprzez automatyzację, AI, bezpieczeństwo i systemy zarządzania danymi.
        </p>
        <div className={styles.heroActions}>
          <a
            href={CONTACT.calendlyLink}
            className={styles.primaryAction}
            target="_blank"
            rel="noopener noreferrer"
          >
            Umów spotkanie
          </a>
          <a
            href="#flowone"
            className={styles.secondaryAction}
          >
            Zobacz projekty
          </a>
        </div>
      </div>
    </section>
  );
};
