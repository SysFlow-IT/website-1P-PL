import React from "react";
import { TRAINING_FEATURES, AGENDA_ITEMS, TRAINING_PRICE } from "@constants";
import styles from "./Training.module.css";

export const Training: React.FC = () => {
  return (
    <section id="training" className={`${styles.section} section section--dark`}>
      <div className={styles.videoBackground}>
        <video autoPlay loop muted playsInline className={styles.video}>
          <source
            src={`${import.meta.env.BASE_URL}video/video1.mp4`}
            type="video/mp4"
          />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>
      <div className="container">
        <h2
          className={`section-title ${styles.titleText}`}
          style={{ color: "#fff" }}
        >
          Szkolenie: Przeksztalc Sposob Pracy Zespolu
        </h2>
        <p
          className={`section-description ${styles.descriptionText}`}
          style={{ color: "#fff" }}
        >
          Nasze kompleksowe szkolenie to 8 spotkan, ktore wyposaża Twoj zespol w
          praktyczna wiedze i narzedzia do natychmiastowego zastosowania. Kazde
          spotkanie trwa 60 minut i konczy sie konkretnymi wskazowkami
          implementacyjnymi. Celem jest znaczacy efekt po kazdym spotkaniu.
        </p>

        <div className={styles.features}>
          <h3>Co wyrożnia nasze szkolenie?</h3>
          <div className={styles.featuresGrid}>
            {TRAINING_FEATURES.map((feature, index) => (
              <div
                key={index}
                className={`${styles.feature} ${styles.visible}`}
              >
                <span className={styles.featureIcon}>✓</span>
                <div>{feature}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.priceBox} ${styles.visible}`}>
          <h3>Koszt</h3>
          <div className={styles.price}>
            {TRAINING_PRICE.toLocaleString("pl-PL")} PLN
          </div>
          <p className={styles.priceNote}>
            Niektore prezentowane aplikacje sa platne - decyzja o ich zakupie
            nalezy do uczestnikow.
          </p>
        </div>

        <h3
          className={`${styles.agendaTitle} ${styles.agendaTitleText}`}
          style={{ color: "#fff" }}
        >
          Agenda Szkolenia
        </h3>
        <p
          className={`${styles.agendaSubtitle} ${styles.agendaSubtitleText}`}
          style={{ color: "#fff" }}
        >
          Program dostosowujemy do specyfiki Twojej firmy, ale standardowa
          agenda obejmuje nastepujace moduly:
        </p>

        <div className={styles.agendaGrid}>
          {AGENDA_ITEMS.map((item) => (
            <div
              key={item.number}
              className={`${styles.agendaItem} ${styles.visible}`}
            >
              <div className={styles.agendaNumber}>{item.number}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
