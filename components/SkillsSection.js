import { useState } from 'react';
import styles from '../styles/skills.module.css';
import React from 'react';
import useRevealOnView from './animation/useRevealOnView';

const SKILL_GROUPS = [
  {
    label: 'Backend & System Design',
    skills: [
      'Node.js',
      'RESTful API Design',
      'Authentication & Authorization',
      'Async Processing & Queues',
      'System Design Tradeoffs',
    ],
  },
  {
    label: 'Production AI Integration',
    skills: [
      'LLM APIs',
      'Retrieval-Augmented Generation (RAG)',
      'Prompt Design & Evaluation',
      'Latency & Cost Optimization',
      'Failure & Hallucination Handling',
    ],
  },
  {
    label: 'Data & Storage',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Data Modeling',
      'Indexing & Query Optimization',
      'Embedding Storage',
    ],
  },
  {
    label: 'Infrastructure & Reliability',
    skills: [
      'Docker',
      'Cloud Deployment',
      'Environment Configuration',
      'Logging & Observability',
      'Basic CI/CD Pipelines',
    ],
  },
  {
    label: 'Engineering Practice',
    skills: [
      'Git & Version Control',
      'Code Reviews',
      'Technical Documentation',
      'Debugging Production Issues',
      'Incremental Delivery',
    ],
  },
];

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

        {/* Index */}
        <div className={styles.index}>
          <span>02</span>
        </div>

        {/* DESKTOP NAV */}
        <div className={styles.nav}>
          {SKILL_GROUPS.map((group, i) => (
            <button
              key={group.label}
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

          <ul key={activeIndex} className={styles.skillList}>
            {SKILL_GROUPS[activeIndex].skills.map((skill, i) => (
              <li
                key={skill}
                style={{ '--delay': `${i * 90}ms` }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE STACKED GROUPS */}
        <div className={styles.mobileGroups}>
          <div className={styles.header}>
            <h1>Skills</h1>
            <p className={styles.subtitle}>
              Depth in systems, clarity in tradeoffs, focus on production
            </p>
          </div>

          {SKILL_GROUPS.map((group, gi) => (
            <div
              key={group.label}
              className={styles.mobileGroup}
              style={{ '--group-delay': `${gi * 180}ms` }}
            >
              <h3 className={styles.groupTitle}>{group.label}</h3>

              <ul className={styles.skillList}>
                {group.skills.map((skill, si) => (
                  <li
                    key={skill}
                    style={{ '--delay': `${si * 80}ms` }}
                  >
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
