import React from 'react';
import {
  GraduationCap,
  BadgeCheck,
  Wrench,
  BookOpen,
  ArrowDown,
  ArrowUpRight,
} from 'lucide-react';
import { SectionLabel, Chip, IconTile } from './ui/Primitives';
import { CREDENTIAL_GROUPS } from './data/credentials';
import s from '../styles/about.module.css';

const ICONS = {
  EDUCATION: GraduationCap,
  CERTIFICATION: BadgeCheck,
  TRAINING: Wrench,
  PREP: BookOpen,
};

const TONES = {
  EDUCATION: 'education',
  CERTIFICATION: 'certification',
  TRAINING: 'training',
  PREP: 'prep',
};

const CHIP_TONE = {
  EARNED: 'earned',
  TRAINING: 'training',
  'IN PREPARATION': 'prep',
};

function Row({ row, category }) {
  const Icon = ICONS[category];
  const tone = TONES[category];
  const inner = (
    <>
      <IconTile tone={tone}>
        <Icon size={17} strokeWidth={1.75} aria-hidden="true" />
      </IconTile>

      <span className={s.rowText}>
        <span className={s.rowTitle}>{row.title}</span>
        {row.sub ? <span className={s.rowSub}>{row.sub}</span> : null}
        {row.sub2 ? <span className={s.rowSub}>{row.sub2}</span> : null}
      </span>

      {row.status ? (
        <Chip tone={CHIP_TONE[row.status] || 'neutral'}>{row.status}</Chip>
      ) : null}

      {row.href ? (
        <ArrowUpRight
          size={15}
          className={s.rowArrow}
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  const cls = `${s.row} ${s[`row_${tone}`]}`;

  if (row.href) {
    return (
      <a
        className={cls}
        href={row.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }

  return <div className={cls}>{inner}</div>;
}

export default function About() {
  return (
    <section id="about" className={s.about} aria-labelledby="about-title">
      <div className={s.grid}>
        <div className={s.intro}>
          <SectionLabel>About</SectionLabel>

          <h2 id="about-title" className={s.title}>
            AI Systems Engineer translating business and technical requirements
            into reliable AI and cloud-native solutions.
          </h2>

          <p className={s.body}>
            Experienced in stakeholder-facing solution design, API and data
            integration, LLM orchestration, RAG, and the production controls
            needed to operate AI systems reliably: validation, observability,
            traceability, resiliency, and cost optimization.
          </p>

          <a className={s.jump} href="#timeline">
            The complete record — every role, program, and credential — lives in
            the Timeline
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>

        <div className={s.groups}>
          {CREDENTIAL_GROUPS.map((g) => (
            <div key={g.id}>
              <h3 className={s.groupLabel}>{g.label}</h3>
              <div className={s.rows}>
                {g.rows.map((r) => (
                  <Row key={r.title} row={r} category={g.category} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
