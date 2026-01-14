import React from "react";
import { TEAM_MEMBERS } from "@constants";
import styles from "./Team.module.css";

export const Team: React.FC = () => {
  return (
    <section id="team" className={`${styles.section} section section--dark`}>
      <div className="container">
        <h2 className="section-title">Zespol SysFlow</h2>
        <p className={`section-description ${styles.fullWidthDescription}`}>
          Za sukcesem firmy stoja doswiadczeni specjalisci z pasja do
          optymalizacji i automatyzacji.
        </p>

        <div className={styles.teamGrid}>
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className={`${styles.teamMember} ${styles.visible}`}
            >
              <div className={styles.memberAvatar}>
                {member.image ? (
                  <>
                    <img
                      src={member.image}
                      alt={member.name}
                      className={styles.memberImage}
                      loading="lazy"
                    />
                    <div className={styles.memberGradient}></div>
                  </>
                ) : (
                  <span>{member.initials}</span>
                )}
              </div>
              <div className={styles.teamMemberContent}>
                <h3>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
