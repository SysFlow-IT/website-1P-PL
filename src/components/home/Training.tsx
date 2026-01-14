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
          Szkolenie: Przekształć Sposób Pracy Zespołu
        </h2>
        <p
          className={`section-description ${styles.descriptionText}`}
          style={{ color: "#fff" }}
        >
          Nasze kompleksowe szkolenie to 8 spotkań, które wyposaża Twój zespół w
          praktyczną wiedzę i narzędzia do natychmiastowego zastosowania. Każde
          spotkanie trwa 60 minut i kończy się konkretnymi wskazówkami
          implementacyjnymi. Celem jest znaczący efekt po każdym spotkaniu.
        </p>

        <div className={styles.features}>
          <h3>Co wyróżnia nasze szkolenie?</h3>
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
            Niektóre prezentowane aplikacje są płatne - decyzja o ich zakupie
            należy do uczestników.
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
          agenda obejmuje następujące moduły:
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
