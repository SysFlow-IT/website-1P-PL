import React from "react";
import { PROCESS_STEPS, AUTOMATION_AREAS } from "@constants";
import styles from "./FlowOne.module.css";

export const FlowOne: React.FC = () => {
  return (
    <section id="flowone" className="section section--darker">
      <div className="container">
        <h2 className={`section-title ${styles.titleText}`}>
          FlowOne SYSTEM: Inteligentne Centrum Danych
        </h2>
        <p className={`section-description ${styles.descriptionText}`}>
          FlowOne SYSTEM to kompleksowe rozwiązanie, które centralizuje dane z
          wszystkich systemów firmowych i automatyzuje kluczowe procesy.
          Wykorzystujemy technologie AI oraz platformy Low-Code/No-Code, aby
          dostarczyć system idealnie dopasowany do Twojej firmy.
        </p>

        <div className={`${styles.goal} ${styles.visible}`}>
          <h3>Cel wdrożenia</h3>
          <p>
            Usprawnienie pracy poprzez automatyzację powtarzalnych zadań i
            scentralizowanie danych w jednym, intuicyjnym systemie. Koniec z
            przeskakiwaniem między dziesiątkami aplikacji - wszystko w jednym
            miejscu.
          </p>
          <div className={styles.billingModel}>
            <strong>Model rozliczeniowy:</strong> FTE/success fee
          </div>
        </div>

        <div className={styles.processSection}>
          <h3 className={styles.processTitle}>Proces Wdrożenia FlowOne SYSTEM</h3>
          <div className={styles.processStepsContainer}>
            <div className={styles.processStepsStatic}>
              {PROCESS_STEPS.map((step, index) => (
                <div
                  key={index}
                  className={`${styles.processStepStatic} ${styles.visible}`}
                >
                  <div className={styles.stepImageWrapper}>
                    <img
                      src={step.image}
                      alt={step.title}
                      className={styles.stepImage}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.stepContent}>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.areasSection}>
          <h3 className={styles.areasTitle}>Przykładowe Obszary Automatyzacji</h3>
          <p className={styles.areasSubtitle}>
            FlowOne SYSTEM można dostosować do niemal każdego procesu biznesowego.
            Oto najczęściej automatyzowane obszary:
          </p>

            <div className={styles.automationAreas}>
            {AUTOMATION_AREAS.map((area, index) => (
              <div
                key={index}
                className={`${styles.areaCard} ${styles.visible}`}
              >
                {area.image && (
                  <div className={styles.areaCardImageWrapper}>
                    <img
                      src={area.image}
                      alt={area.title}
                      className={styles.areaCardImage}
                      loading="lazy"
                    />
                  </div>
                )}
                <h4>{area.title}</h4>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
