import React from 'react';
import Image from 'next/image';
import {
  Briefcase,
  GraduationCap,
  BadgeCheck,
  Wrench,
  BookOpen,
  ArrowUpRight,
} from 'lucide-react';
import { SectionLabel, Chip } from './ui/Primitives';
import { TIMELINE_ITEMS } from './data/timeline';
import s from '../styles/timeline.module.css';

const ICONS = {
  EXPERIENCE: Briefcase,
  EDUCATION: GraduationCap,
  CERTIFICATION: BadgeCheck,
  TRAINING: Wrench,
  PREP: BookOpen,
};

const CAT_LABEL = {
  EXPERIENCE: 'EXPERIENCE',
  EDUCATION: 'EDUCATION',
  CERTIFICATION: 'CERTIFICATION',
  TRAINING: 'TRAINING',
  PREP: 'IN PROGRESS',
};

const TONE = {
  EXPERIENCE: 'experience',
  EDUCATION: 'education',
  CERTIFICATION: 'certification',
  TRAINING: 'training',
  PREP: 'prep',
};

const CHIP_TONE = {
  EARNED: 'earned',
  CURRENT: 'current',
  'IN PROGRESS': 'prep',
};

const LEGEND = [
  { tone: 'experience', text: 'EXPERIENCE' },
  { tone: 'education', text: 'EDUCATION' },
  { tone: 'certification', text: 'CERTIFICATION — EARNED' },
  { tone: 'training', text: 'TRAINING' },
  { tone: 'prep', text: 'IN PROGRESS / IN PREPARATION' },
];

function fmt({ month, year }) {
  return `${String(month).padStart(2, '0')}/${year}`;
}

function range(item) {
  const start = fmt(item.start);
  if (!item.end) return `${start} – Present`;
  const end = fmt(item.end);
  return start === end ? start : `${start} – ${end}`;
}

export default function Timeline() {
  const items = [...TIMELINE_ITEMS].sort((a, b) =>
    a.start.year !== b.start.year
      ? a.start.year - b.start.year
      : a.start.month - b.start.month
  );

  return (
    <section id="timeline" className={s.section} aria-labelledby="timeline-title">
      <div className={s.head}>
        <div>
          <SectionLabel>Timeline</SectionLabel>
          <h2 id="timeline-title" className={s.title}>
            The full career story
          </h2>
          <p className={s.lead}>
            Eleven milestones in order, 01 → 11 — three currently running.
          </p>
        </div>

        <Image
          className={s.mascot}
          src="/character9.png"
          alt=""
          aria-hidden="true"
          width={96}
          height={137}
          sizes="96px"
        />
      </div>

      <ul className={s.legend}>
        {LEGEND.map((l) => (
          <li key={l.text} className={`${s.legendChip} ${s[`lg_${l.tone}`]}`}>
            <span className={s.legendDot} aria-hidden="true" />
            {l.text}
          </li>
        ))}
      </ul>

      <ol className={s.grid}>
        {items.map((item, i) => {
          const Icon = ICONS[item.category];
          const tone = TONE[item.category];
          const num = String(i + 1).padStart(2, '0');
          const org = item.location ? `${item.org} · ${item.location}` : item.org;

          return (
            <li key={item.id} className={s.cell}>
              <span className={s.connector} aria-hidden="true" />
              <span className={`${s.node} ${s[`node_${tone}`]}`} aria-hidden="true" />
              <span className={s.num}>{num}</span>

              <article className={`${s.card} ${s[`card_${tone}`]}`}>
                <p className={s.dates}>{range(item)}</p>

                <p className={s.cat}>
                  <Icon size={13} strokeWidth={1.9} aria-hidden="true" />
                  {CAT_LABEL[item.category]}
                </p>

                <h3 className={s.cardTitle}>{item.title}</h3>
                <p className={s.org}>{org}</p>
                <p className={s.desc}>{item.description}</p>

                {(item.status || item.link) && (
                  <p className={s.meta}>
                    {item.status ? (
                      <Chip tone={CHIP_TONE[item.status] || 'neutral'}>
                        {item.status}
                      </Chip>
                    ) : null}

                    {item.link ? (
                      <a
                        className={s.link}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.linkLabel || 'Visit'}
                        <ArrowUpRight size={11} aria-hidden="true" />
                      </a>
                    ) : null}
                  </p>
                )}
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
