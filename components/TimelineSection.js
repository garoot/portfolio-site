import styles from '../styles/timeline.module.css';
import React, { useState } from 'react';
import useRevealOnView from './animation/useRevealOnView';
import { TIMELINE_ITEMS } from './data/timeline';
import TimelineModal from './TimelineModal';

function formatRange(start, end) {
  const startStr = `${String(start.month).padStart(2, '0')}/${start.year}`;
  const endStr = end
    ? `${String(end.month).padStart(2, '0')}/${end.year}`
    : 'Present';
  return `${startStr} – ${endStr}`;
}

export default function TimelineSection() {
  const [sectionRef, revealed] = useRevealOnView({
    rootMargin: '-25% 0px -55% 0px',
  });

  const [activeItem, setActiveItem] = useState(null);

  const items = [...TIMELINE_ITEMS].sort(
    (a, b) =>
      a.start.year !== b.start.year
        ? a.start.year - b.start.year
        : a.start.month - b.start.month
  );

  return (
    <section
      id="timeline"
      ref={sectionRef}
      data-revealed={revealed}
      className={styles.timelineSection}
    >
      <div className={styles.container}>

        {/* INDEX — decorative overlay, NOT layout */}
        <div className={styles.index}>
          <span>02</span>
        </div>

        {/* CONTENT — TRUE CENTER */}
        <div className={styles.content}>

          <div className={styles.header}>
            <h1>Timeline</h1>
            <p className={styles.subtitle}>
              Education and experience over time
            </p>
          </div>

          <div className={styles.legend}>
            <span className={styles.legendLeft}>Education</span>
            <span className={styles.legendRight}>Experience</span>
          </div>

          <div className={styles.timelineContent}>
            <div className={styles.rail} />

            <div className={styles.rows}>
              {items.map((item, i) => (
                <div
                  key={item.id}
                  className={`${styles.row} ${styles[item.type]}`}
                  style={{ '--i': i }}
                  onClick={() => setActiveItem(item)}
                >
                  <div className={styles.side}>
                    {item.type === 'education' && (
                      <div className={styles.card}>
                        <p className={styles.range}>
                          {formatRange(item.start, item.end)}
                        </p>
                        <h4>{item.title}</h4>
                        <span className={styles.org}>{item.org}</span>
                      </div>
                    )}
                  </div>

                  <div className={styles.dotColumn}>
                    <span className={styles.dot} />
                  </div>

                  <div className={styles.side}>
                    {item.type === 'experience' && (
                      <div className={styles.card}>
                        <p className={styles.range}>
                          {formatRange(item.start, item.end)}
                        </p>
                        <h4>{item.title}</h4>
                        <span className={styles.org}>{item.org}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <TimelineModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </section>
  );
}
