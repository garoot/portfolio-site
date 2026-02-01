import React, { useEffect, useRef, useState, useMemo } from 'react';
import Image from 'next/image';

import styles from '../styles/work.module.css';
import useRevealOnView from './animation/useRevealOnView';
import PdfModal from './PdfModal';

import {
  WORK_PROJECTS,
  CREATIVE_WORKS,
} from './data/work';

import {
  Github,
  ExternalLink,
  Briefcase,
  Code2,
  Sparkles,
  FileText,
  PlayCircle
} from 'lucide-react';

/* ─────────────────────────────────────────────
   PROJECT ROW (TECH)
───────────────────────────────────────────── */
function ProjectRow({ project }) {
  const rowRef = useRef(null);
  const [active, setActive] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  const lenses = useMemo(
    () => (project?.lenses ? Object.keys(project.lenses) : []),
    [project]
  );

  const [activeLens, setActiveLens] = useState(lenses[0]);

  useEffect(() => {
    if (lenses.length > 0) {
      setActiveLens(lenses[0]);
    }
  }, [lenses]);

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
            <p className={styles.tagline}>{project.tagline}</p>
          </div>

          <div className={styles.icons}>
  {project.links?.github ? (
    <a
      href={project.links.github}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.iconLink}
      aria-label="GitHub Repository"
    >
      <Github size={16} />
    </a>
  ) : (
    <span
      className={`${styles.iconLink} ${styles.iconDisabled}`}
      aria-label="GitHub (private)"
    >
      <Github size={16} />
    </span>
  )}

  {project.links?.external ? (
    <a
      href={project.links.external}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.iconLink}
      aria-label="Live Site"
    >
      <ExternalLink size={16} />
    </a>
  ) : (
    <span
      className={`${styles.iconLink} ${styles.iconDisabled}`}
      aria-label="Live Site (private)"
    >
      <ExternalLink size={16} />
    </span>
  )}
</div>

        </div>

        <div className={styles.lenses}>
          {lenses.map((lens, i) => (
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
  );
}

/* ─────────────────────────────────────────────
   WORK SECTION
───────────────────────────────────────────── */
export default function WorkSection() {
  const [sectionRef] = useRevealOnView();
  const [activeTab, setActiveTab] = useState('tech');
  const [activePdf, setActivePdf] = useState(null);

  return (
    <>
      <section
        id="work"
        ref={sectionRef}
        className={`${styles.workSection} ${styles.workScope}`}
      >
        <div className={styles.container}>

          {/* Index */}
          <div className={styles.index}>
            <span>04</span>
          </div>


          {/* Content rail */}
          <div className={styles.content}>

            {/* Header */}
            <div className={styles.header}>
              <h1>
                <span>Work</span>
                <Briefcase size={18} className={styles.headerIcon} />
              </h1>
              <p className={styles.subtitle}>
                Systems I’ve designed, shipped, and evolved
              </p>
            </div>

            {/* Tabs */}
            <div className={styles.tabs}>
              <button
                className={activeTab === 'tech' ? styles.activeTab : ''}
                onClick={() => setActiveTab('tech')}
              >
                <Code2 size={14} className={styles.tabIcon} data-type="tech" />
                <span>Technical</span>
              </button>

              <button
                className={activeTab === 'creative' ? styles.activeTab : ''}
                onClick={() => setActiveTab('creative')}
              >
                <Sparkles size={14} className={styles.tabIcon} data-type="creative" />
                <span>Creative</span>
              </button>

              <span
                className={styles.tabIndicator}
                data-tab={activeTab}
              />
            </div>

            {/* Content */}
            <div className={styles.tabContent}>
              {activeTab === 'tech' && (
                <div className={styles.techStack}>
                  {WORK_PROJECTS.map(project => (
                    <ProjectRow key={project.id} project={project} />
                  ))}
                </div>
              )}

              {activeTab === 'creative' && (
                <div className={styles.creativeStage}>
                  {CREATIVE_WORKS.map(work => (
                    <div
                      key={work.id}
                      className={styles.creativeItem}
                      data-type={work.type}
                    >
                      <div className={styles.creativeHeader}>
                        <div className={styles.creativeIcon}>
                          {work.type === 'pdf'
                            ? <FileText size={18} />
                            : <PlayCircle size={18} />}
                        </div>
                        <span className={styles.creativeType}>
                          {work.type === 'pdf' ? 'PDF Deck' : 'Video'}
                        </span>
                      </div>

                      <div className={styles.creativeBody}>
                        <h3>{work.title}</h3>
                        <p>{work.subtitle}</p>
                      </div>

                      <div className={styles.creativeFooter}>
                        {work.type === 'pdf' && (
                          <button
                            className={styles.creativeAction}
                            onClick={() =>
                              setActivePdf({
                                src: work.src,
                                title: work.title,
                              })
                            }
                          >
                            View Deck →
                          </button>
                        )}

                        {work.type === 'video' && (
                          <a
                            href={`${work.youtubeId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.creativeAction}
                          >
                            Watch Video →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      <PdfModal
        src={activePdf?.src}
        title={activePdf?.title}
        onClose={() => setActivePdf(null)}
      />
    </>
  );
}

