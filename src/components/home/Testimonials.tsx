import React from 'react';
import { TESTIMONIALS } from '@constants';
import styles from './Testimonials.module.css';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className={`${styles.section} section`}>
      <div className="container">
        <h2 className="section-title">Co mowia nasi klienci</h2>
        <div className={styles.testimonialGrid}>
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              {testimonial.image && (
                <div className={styles.imageWrapper}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className={styles.image}
                  />
                </div>
              )}
              <p className={styles.quote}>
                "{testimonial.content}"
              </p>
              <div className={styles.author}>
                <span className={styles.name}>{testimonial.author}</span>
                <span className={styles.role}>
                  {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
