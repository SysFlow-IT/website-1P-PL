import React from "react";
import { ArrowRightIcon } from "@components/shared/Icons";
import styles from "./Solutions.module.css";

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="section section--darker">
      <div className="container">
        <h2 className="section-title">Nasze Rozwiązania</h2>
        <p className={`${styles.descriptionText} ${styles.visible}`}>
          Też przez to przechodziliśmy - i odpowiedź znaleźliśmy w technologiach
          oraz mądrej automatyzacji. Poświęciliśmy czas na analizę narzędzi,
          przetestowaliśmy je w praktyce i zostawiliśmy tylko te, które realnie
          upraszczają pracę. Porządkujemy procesy, łączymy systemy, wprowadzamy
          AI tam, gdzie ma sens - aż w końcu układamy spójny, działający
          ekosystem pracy. Efekt? Mniej chaosu, szybsze decyzje i więcej czasu
          na kluczowe zadania.
        </p>
        <h3 className={styles.heading}>Jak możemy pomóc?</h3>
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
                automatyzacji, bezpieczeństwa i prywatności oraz AI.
              </p>
              <a href="#training" className={styles.link}>
                Dowiedz się więcej <ArrowRightIcon size={20} />
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
                Wdrożenie zaawansowanego systemu do zarządzania danymi i
                automatyzacji procesów biznesowych przy wykorzystaniu narzędzi
                typu low-code.
              </p>
              <a href="#flowone" className={styles.link}>
                Dowiedz się więcej <ArrowRightIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
