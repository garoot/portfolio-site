import { useState } from 'react';
import React from 'react';
import styles from '../styles/skills.module.css';
import useRevealOnView from './animation/useRevealOnView';
import { SKILL_GROUPS } from './data/skills';

export default function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionRef, revealed] = useRevealOnView();

  return (
    <section
      id="skills"
      ref={sectionRef}
      data-revealed={revealed}
      className={`${styles.skillsSection} ${revealed ? styles.revealed : ''}`}
    >
      <div className={styles.container}>

        <div className={styles.index}>
          <span>03</span>
        </div>

        {/* DESKTOP NAV */}
        <div className={styles.nav}>
          {SKILL_GROUPS.map((group, i) => (
            <button
              key={group.id}
              className={i === activeIndex ? styles.active : ''}
              onClick={() => setActiveIndex(i)}
            >
              {group.label}
            </button>
          ))}
        </div>

        {/* DESKTOP CONTENT */}
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Skills</h1>
            <p className={styles.subtitle}>
              Depth in systems, clarity in tradeoffs, focus on production
            </p>
          </div>

          <ul key={SKILL_GROUPS[activeIndex].id} className={styles.skillList}>
            {SKILL_GROUPS[activeIndex].items.map((skill, i) => (
              <li key={skill} style={{ '--delay': `${i * 90}ms` }}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE STACK */}
        <div className={styles.mobileGroups}>
          <div className={styles.header}>
            <h1>Skills</h1>
            <p className={styles.subtitle}>
              Depth in systems, clarity in tradeoffs, focus on production
            </p>
          </div>

          {SKILL_GROUPS.map((group, gi) => (
            <div
              key={group.id}
              className={styles.mobileGroup}
              style={{ '--group-delay': `${gi * 180}ms` }}
            >
              <h3 className={styles.groupTitle}>{group.label}</h3>

              <ul className={styles.skillList}>
                {group.items.map((skill, si) => (
                  <li key={skill} style={{ '--delay': `${si * 80}ms` }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
