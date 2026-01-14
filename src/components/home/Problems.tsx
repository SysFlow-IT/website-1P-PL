import React from "react";
import { PROBLEMS } from "@constants";
import styles from "./Problems.module.css";

export const Problems: React.FC = () => {
  return (
    <section id="problems" className={`${styles.section} section section--dark`}>
      <div className="container">
        <h2 className="section-title">Czy w firmie w której pracujesz...</h2>
        <div className={styles.list}>
          {PROBLEMS.map((problem, index) => (
            <article
              key={index}
              className={`${styles.card} ${styles.visible}`}
            >
              <div className={styles.cardContent}>
                <span className={styles.cardIndex}>
                  {String(index + 1).padStart(2, "0")} /
                </span>
                <div className={styles.copy}>
                  <div className={styles.titleLine}>{problem.text}</div>
                </div>
              </div>
              <div className={styles.cardPreview}>
                <div className={styles.previewInner}>
                  <img
                    src={problem.image}
                    alt=""
                    className={styles.previewImage}
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
