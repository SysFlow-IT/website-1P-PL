import React from 'react'
import { CONTACT } from '@constants'
import styles from './CTA.module.css'

export const CTA: React.FC = () => {
  return (
    <section id="cta" className={`${styles.section} section section--dark`}>
      <div className="container">
        <h2 className={`section-title ${styles.title}`}>Zacznij Transformacje Juz Dzis</h2>
        <p className={styles.description}>
          Czy Twoja firma jest gotowa na kolejny poziom efektywnosci? Niezaleznie od tego, czy interesuje Cie
          kompleksowe szkolenie zespolu, czy wdrozenie zaawansowanego systemu automatyzacji - jestesmy tutaj, aby pomoc.
        </p>

        <div className={`${styles.steps} ${styles.visible}`}>
          <h3>Nastepne Kroki:</h3>
          <ol className={styles.stepsList}>
            <li><strong>Umow bezplatna konsultacje</strong> - porozmawiajmy o Twoich potrzebach</li>
            <li><strong>Otrzymaj spersonalizowana propozycje</strong> - dostosowana do Twojej firmy</li>
            <li><strong>Rozpocznij transformacje</strong> - zacznij oszczedzac czas juz teraz</li>
          </ol>
        </div>

        <div className={styles.buttons}>
          <a
            href={CONTACT.calendlyLink}
            className={styles.primary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Umow spotkanie
          </a>
          <a
            href={CONTACT.phoneLink}
            className={styles.secondary}
          >
            Zadzwon
          </a>
        </div>
      </div>
    </section>
  )
}
