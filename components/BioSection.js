import styles from '../styles/bio.module.css';
import Image from 'next/image';
import React from 'react';
import useRevealOnView from './animation/useRevealOnView';

export default function BioSection() {
  const [contentRef, revealed] = useRevealOnView();

  return (
    <section
      id="bio"
      data-revealed={revealed}
      className={styles.bioSection}
    >
      <div className={styles.container}>

        {/* Index */}
        <div className={styles.index}>
          <span>01</span>
        </div>

        {/* Scan line */}
        <div
          className={`${styles.scanLine} ${revealed ? styles.scanActive : ''}`}
        />

        {/* Content */}
        <div
          ref={contentRef}
          className={styles.content}
        >
          <div className={styles.header}>
            <h1>About Me</h1>
            <p className={styles.subtitle}>
              Building production AI systems, not demos
            </p>
          </div>

          <p className={styles.introduction}>
            I’m Majeed — an AI Software Engineer focused on backend and
            product systems.
          </p>

          <p className={styles.body}>
            I build and ship reliable software that integrates AI models
            into real products. My work focuses on backend architecture,
            data pipelines, and production AI workflows — including
            retrieval-augmented generation, async processing, and
            cost-aware inference.
            <br /><br />
            I’ve worked across startups, teaching, and professional roles,
            building systems end-to-end and learning firsthand how design
            decisions, tradeoffs, and failure handling matter in production.
            Today, my priority is applying that experience to a stable
            engineering role and continuing to compound through real-world
            software delivery.
          </p>

          {/* Credentials */}
          <div className={styles.credentials}>

            <div className={styles.group}>
              <p className={styles.groupLabel}>Formal Education</p>

              <div className={styles.credential}>
                <span>Master of Data Science</span>
                <Image src="/deakin.png" alt="" width={28} height={28} />
              </div>

              <div className={styles.credential}>
                <span>Bachelor of Computer Science</span>
                <Image src="/uvic.png" alt="" width={28} height={28} />
              </div>
            </div>

            <div className={styles.groupSecondary}>
              <p className={styles.groupLabel}>Professional Training</p>

              <div className={styles.credential}>
                <span>Full-Stack Software Development</span>
                <Image src="/codingdojo.png" alt="" width={44} height={18} />
              </div>
            </div>

          </div>
        </div>

        {/* Avatar */}
        <div className={styles.avatar}>
          <Image
            src="/character9.png"
            alt="Avatar"
            width={90}
            height={140}
          />
        </div>

      </div>
    </section>
  );
}
