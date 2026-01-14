import React from "react";
import { ArrowRightIcon } from "@components/shared/Icons";
import styles from "./Solutions.module.css";

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="section section--darker">
      <div className="container">
        <h2 className="section-title">Nasze Rozwiazania</h2>
        <p className={`${styles.descriptionText} ${styles.visible}`}>
          Tez przez to przechodzilismy - i odpowiedz znalezlismy w technologiach
          oraz madrej automatyzacji. Poswiecilismy czas na analize narzedzi,
          przetestowalismy je w praktyce i zostawilismy tylko te, ktore realnie
          upraszczaja prace. Porzadkujemy procesy, laczymy systemy, wprowadzamy
          AI tam, gdzie ma sens - az w koncu ukladamy spojny, dzialajacy
          ekosystem pracy. Efekt? Mniej chaosu, szybsze decyzje i wiecej czasu
          na kluczowe zadania.
        </p>
        <h3 className={styles.heading}>Jak mozemy pomoc?</h3>
        <div className={styles.cards}>
          <div className={`${styles.card} ${styles.visible}`}>
            <div className={styles.cardImage}>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Szkolenie"
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.cardContent}>
              <h4>Szkolenie</h4>
              <p>
                Kompleksowy program edukacyjny z optymalizacji pracy,
                automatyzacji, bezpieczenstwa i prywatnosci oraz AI.
              </p>
              <a href="#training" className={styles.link}>
                Dowiedz sie wiecej <ArrowRightIcon size={20} />
              </a>
            </div>
          </div>
          <div className={`${styles.card} ${styles.visible}`}>
            <div className={styles.cardImage}>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="FlowOne SYSTEM"
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.cardContent}>
              <h4>FlowOne SYSTEM</h4>
              <p>
                Wdrozenie zaawansowanego systemu do zarzadzania danymi i
                automatyzacji procesow biznesowych przy wykorzystaniu narzedzi
                typu low-code.
              </p>
              <a href="#flowone" className={styles.link}>
                Dowiedz sie wiecej <ArrowRightIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
