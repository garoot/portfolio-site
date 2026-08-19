import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel, Chip } from './ui/Primitives';
import { EXPERIENCE_ITEMS } from './data/experience';
import s from '../styles/experience.module.css';

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function formatDate({ month, year }) {
  return `${MONTHS[month - 1]} ${year}`;
}

function range(item) {
  const start = formatDate(item.start);
  return item.end ? `${start} – ${formatDate(item.end)}` : `${start} – Present`;
}

export default function Experience() {
  const items = [...EXPERIENCE_ITEMS].sort((a, b) =>
    a.start.year !== b.start.year
      ? b.start.year - a.start.year
      : b.start.month - a.start.month
  );

  return (
    <section
      id="experience"
      className={s.section}
      aria-labelledby="experience-title"
    >
      <SectionLabel>Experience</SectionLabel>
      <h2 id="experience-title" className={s.heading}>
        Professional experience
      </h2>
      <p className={s.lead}>
        Recent work first — spanning AI systems, digital products, consulting,
        and end-to-end solution delivery.
      </p>

      <ol className={s.list}>
        {items.map((item, index) => {
          const org = item.location ? `${item.org} · ${item.location}` : item.org;

          return (
            <li key={item.id} className={s.item}>
              <article
                className={`${s.card} ${item.status === 'CURRENT' ? s.cardCurrent : ''}`}
              >
                <div className={s.identity}>
                  <span className={s.num} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className={s.dates}>{range(item)}</p>
                  <h3 className={s.title}>{item.title}</h3>
                  <p className={s.org}>{org}</p>
                </div>

                <div className={s.content}>
                  <div className={s.scopeRow}>
                    <p className={s.scope}>{item.scope}</p>
                    {item.status ? <Chip tone="current">{item.status}</Chip> : null}
                  </div>

                  {item.highlights.length ? (
                    <ul className={s.highlights}>
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  ) : null}

                  {(item.technologies || item.link) && (
                    <div className={s.footer}>
                      {item.technologies ? (
                        <p className={s.technologies}>{item.technologies}</p>
                      ) : null}
                      {item.link ? (
                        <a
                          className={s.link}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.linkLabel || 'Visit'}
                          <ArrowUpRight size={12} aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
