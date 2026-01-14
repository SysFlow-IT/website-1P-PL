import React from "react";
import { WHY_CHOOSE_ITEMS } from "@constants";
import styles from "./WhyChoose.module.css";

export const WhyChoose: React.FC = () => {
  return (
    <section id="why-choose" className={`${styles.section} section section--darker`}>
      <div className="container">
        <h2 className="section-title">Dlaczego wybrać?</h2>
        <div className={styles.list}>
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <article
              key={index}
              className={`${styles.card} ${styles.visible}`}
            >
              <div className={styles.cardContent}>
                <span className={styles.cardIndex}>
                  {String(index + 1).padStart(2, "0")} /
                </span>
                <div className={styles.copy}>
                  <h4 className={styles.titleLine}>{item.title}</h4>
                  <p className={styles.descriptionLine}>{item.description}</p>
                </div>
              </div>
              <div className={styles.cardPreview}>
                <div className={styles.previewInner}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.previewImage}
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`${styles.philosophy} ${styles.visible}`}>
          <h3>Nasza Filozofia</h3>
          <p>
            Wierzymy, że technologia powinna służyć ludziom, a nie na odwrót.
            Dlatego projektujemy systemy intuicyjne, które realnie oszczędzają
            czas i redukują frustrację.
          </p>
        </div>
      </div>
    </section>
  );
};
