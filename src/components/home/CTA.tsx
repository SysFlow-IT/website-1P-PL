import React from 'react'
import { CONTACT } from '@constants'
import styles from './CTA.module.css'

export const CTA: React.FC = () => {
  return (
    <section id="cta" className={`${styles.section} section section--dark`}>
      <div className="container">
        <h2 className={`section-title ${styles.title}`}>Zacznij Transformację Już Dziś</h2>
        <p className={styles.description}>
          Czy Twoja firma jest gotowa na kolejny poziom efektywności? Niezależnie od tego, czy interesuje Cię
          kompleksowe szkolenie zespołu, czy wdrożenie zaawansowanego systemu automatyzacji - jesteśmy tutaj, aby pomóc.
        </p>

        <div className={`${styles.steps} ${styles.visible}`}>
          <h3>Następne Kroki:</h3>
          <ol className={styles.stepsList}>
            <li><strong>Umów bezpłatną konsultację</strong> - porozmawiajmy o Twoich potrzebach</li>
            <li><strong>Otrzymaj spersonalizowaną propozycję</strong> - dostosowaną do Twojej firmy</li>
            <li><strong>Rozpocznij transformację</strong> - zacznij oszczędzać czas już teraz</li>
          </ol>
        </div>

        <div className={styles.buttons}>
          <a
            href={CONTACT.calendlyLink}
            className={styles.primary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Umów spotkanie
          </a>
          <a
            href={CONTACT.phoneLink}
            className={styles.secondary}
          >
            Zadzwoń
          </a>
        </div>
      </div>
    </section>
  )
}
