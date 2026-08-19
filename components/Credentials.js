import React from 'react';
import {
  GraduationCap,
  BadgeCheck,
  Wrench,
  BookOpen,
  ArrowUpRight,
} from 'lucide-react';
import { SectionLabel, Chip, IconTile } from './ui/Primitives';
import { CREDENTIAL_GROUPS } from './data/credentials';
import s from '../styles/credentials.module.css';

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
  COMPLETED: 'training',
  'IN PROGRESS': 'prep',
  'IN PREPARATION': 'prep',
};

function Row({ row, category }) {
  const Icon = ICONS[category];
  const tone = TONES[category];
  const content = (
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
        <ArrowUpRight size={15} className={s.rowArrow} aria-hidden="true" />
      ) : null}
    </>
  );

  const className = `${s.row} ${s[`row_${tone}`]}`;

  return row.href ? (
    <a
      className={className}
      href={row.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}

export default function Credentials() {
  return (
    <section
      id="credentials"
      className={s.section}
      aria-labelledby="credentials-title"
    >
      <SectionLabel>Credentials</SectionLabel>
      <h2 id="credentials-title" className={s.heading}>
        Education &amp; credentials
      </h2>
      <p className={s.lead}>
        Earned qualifications, current professional development, and planned
        certifications — clearly distinguished.
      </p>

      <div className={s.grid}>
        {CREDENTIAL_GROUPS.map((group) => (
          <section key={group.id} className={s.group} aria-labelledby={`${group.id}-title`}>
            <h3 id={`${group.id}-title`} className={s.groupLabel}>
              {group.label}
            </h3>
            <div className={s.rows}>
              {group.rows.map((row) => (
                <Row key={row.title} row={row} category={group.category} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
