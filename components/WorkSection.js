import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

import styles from '../styles/work.module.css';
import useRevealOnView from './animation/useRevealOnView';
import { WORK_PROJECTS } from './data/work';

const LENSES = ['Problem', 'Solution', 'Trade-offs', 'Failure Modes', 'Evolution'];

const CREATIVE_WORKS = [
  {
    id: 'deck-1',
    type: 'pdf',
    title: 'Startup Pitch Deck',
    subtitle: 'Investor-facing narrative & visuals',
    src: '/creative/pitch-deck.pdf',
  },
  {
    id: 'video-1',
    type: 'video',
    title: 'Product Launch Animation',
    subtitle: 'Motion, pacing, storytelling',
    youtubeId: 'XXXXXXXXXXX',
  },
  {
    id: 'deck-2',
    type: 'pdf',
    title: 'Brand Strategy Deck',
    subtitle: 'Narrative structure & visual language',
    src: '/creative/brand-deck.pdf',
  },
  {
    id: 'video-2',
    type: 'video',
    title: 'Explainer Motion',
    subtitle: 'Timing, hierarchy, clarity',
    youtubeId: 'YYYYYYYYYYY',
  },
];

export default function WorkSection() {
  const [sectionRef] = useRevealOnView();
  const rowRef = useRef(null);

  const [active, setActive] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [activeLens, setActiveLens] = useState('Problem');
  const [activeTab, setActiveTab] = useState('tech');

  // For now you have one technical project — keep it simple and stable.
  const project = WORK_PROJECTS[0];

  useEffect(() => {
    if (!rowRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          setTimeout(() => setContentReady(true), 1800);
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
      className={`${styles.workSection} ${styles.workScope}`}
    >
      <div className={styles.container}>

        <div className={styles.index}>
          <span>04</span>
        </div>

        <div className={styles.content}>

          <div className={styles.header}>
            <h1>Work</h1>
            <p className={styles.subtitle}>
              Systems I’ve designed, shipped, and evolved
            </p>
          </div>

          <div className={styles.tabs}>
            <button
              className={activeTab === 'tech' ? styles.activeTab : ''}
              onClick={() => setActiveTab('tech')}
            >
              Technical
            </button>
            <button
              className={activeTab === 'creative' ? styles.activeTab : ''}
              onClick={() => setActiveTab('creative')}
            >
              Creative
            </button>
            <span className={styles.tabIndicator} data-tab={activeTab} />
          </div>

          <div className={styles.tabContent}>

            {activeTab === 'tech' && (
              <div
                ref={rowRef}
                className={styles.projectRow}
                data-active={active}
                data-ready={contentReady}
              >
                <span className={`${styles.border} ${styles.top}`} />
                <span className={`${styles.border} ${styles.right}`} />
                <span className={`${styles.border} ${styles.bottom}`} />
                <span className={`${styles.border} ${styles.left}`} />

                <div className={styles.surface}>
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={520}
                    height={360}
                    priority
                  />
                </div>

                <div className={styles.panel}>
                  <div className={styles.panelHeader}>
                    <div className={styles.textBlock}>
                      <h3>{project.title}</h3>
                      <p className={styles.tagline}>
                        {project.tagline}
                      </p>
                    </div>

                    <div className={styles.icons}>
                      <a
                        href={project.links?.github || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.links?.external || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <div className={styles.lenses}>
                    {LENSES.map((lens, i) => (
                      <button
                        key={lens}
                        style={{ '--i': i }}
                        className={activeLens === lens ? styles.active : ''}
                        onClick={() => setActiveLens(lens)}
                      >
                        <span className={styles.pillPulse} />
                        <span className={styles.pillLabel}>{lens}</span>
                      </button>
                    ))}
                  </div>

                  <div className={styles.explanation}>
                    <p>{project.lenses?.[activeLens] || ''}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'creative' && (
              <div className={styles.creativeStage}>
                {CREATIVE_WORKS.map(work => (
                  <div key={work.id} className={styles.creativeItem}>
                    <h3>{work.title}</h3>
                    <p>{work.subtitle}</p>

                    {work.type === 'pdf' && (
                      <a href={work.src} target="_blank" rel="noopener noreferrer">
                        View PDF
                      </a>
                    )}

                    {work.type === 'video' && (
                      <a
                        href={`https://youtube.com/watch?v=${work.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch Video
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
