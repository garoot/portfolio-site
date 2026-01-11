import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

import styles from '../styles/work.module.css';
import useRevealOnView from './animation/useRevealOnView';

const LENSES = [
  'Problem',
  'Solution',
  'Trade-offs',
  'Failure Modes',
  'Evolution',
];

export default function WorkSection() {
  const [sectionRef] = useRevealOnView();
  const rowRef = useRef(null);

  const [active, setActive] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [activeLens, setActiveLens] = useState('Problem');

  /* Activate project row once it enters view */
  useEffect(() => {
    if (!rowRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);

          // Unlock content AFTER border pulse finishes
          setTimeout(() => {
            setContentReady(true);
          }, 1800);

          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className={styles.workSection}
    >
      <div className={styles.container}>

        {/* Index */}
        <div className={styles.index}>
          <span>03</span>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Work</h1>
            <p className={styles.subtitle}>
              Systems I’ve designed, shipped, and evolved
            </p>
          </div>

          {/* Project */}
          <div
            ref={rowRef}
            className={styles.projectRow}
            data-active={active}
            data-ready={contentReady}
          >
            {/* Border pulses */}
            <span className={`${styles.border} ${styles.top}`} />
            <span className={`${styles.border} ${styles.right}`} />
            <span className={`${styles.border} ${styles.bottom}`} />
            <span className={`${styles.border} ${styles.left}`} />

            {/* Thumbnail */}
            <div className={styles.surface}>
              <Image
                src="/malakphoto.png"
                alt="Malak Photo"
                width={520}
                height={360}
                priority
              />
            </div>

            {/* Panel */}
            <div className={styles.panel}>

              {/* Header */}
              <div className={styles.panelHeader}>
                <div className={styles.textBlock}>
                  <h3>MalakPhoto</h3>
                  <p className={styles.tagline}>
                    Client-facing photo delivery system for professional photographers
                  </p>
                </div>

                {/* ICONS — lucide-react (RESTORED) */}
                <div className={styles.icons}>
                  <a
                    href="https://github.com/your-repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github size={16} strokeWidth={1.6} />
                  </a>

                  <a
                    href="https://malakphoto.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live site"
                  >
                    <ExternalLink size={16} strokeWidth={1.6} />
                  </a>
                </div>
              </div>

              {/* Lenses */}
              <div className={styles.lenses}>
                {LENSES.map((lens, i) => (
                  <button
                    key={lens}
                    style={{ '--i': i }}
                    className={activeLens === lens ? styles.active : ''}
                    onClick={() => setActiveLens(lens)}
                  >
                    {/* pulse layer */}
                    <span className={styles.pillPulse} />

                    {/* text layer */}
                    <span className={styles.pillLabel}>
                      {lens}
                    </span>
                  </button>
                ))}
              </div>

              {/* Explanation */}
              <div className={styles.explanation}>
                {activeLens === 'Problem' && (
                  <p>
                    Photographers manually curate hundreds of images per session,
                    often guessing which shots clients will like — costing time
                    and risking dissatisfaction.
                  </p>
                )}

                {activeLens === 'Solution' && (
                  <p>
                    A client-guided photo review flow where users evaluate blurred,
                    face-focused previews, reducing photographer selection effort
                    and increasing client satisfaction.
                  </p>
                )}

                {activeLens === 'Trade-offs' && (
                  <p>
                    Client control increases UX complexity and requires careful
                    performance handling, but significantly reduces manual curation.
                  </p>
                )}

                {activeLens === 'Failure Modes' && (
                  <p>
                    Handles slow connections, incomplete feedback, and partial
                    uploads without blocking delivery or corrupting state.
                  </p>
                )}

                {activeLens === 'Evolution' && (
                  <p>
                    Designed to support AI-assisted ranking, per-client preferences,
                    and automated delivery pipelines without architectural rewrites.
                  </p>
                )}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
