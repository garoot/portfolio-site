import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Lock, Github, ChevronDown } from 'lucide-react';
import { SectionLabel, Chip, Button } from './ui/Primitives';
import { WORK_PROJECTS } from './data/work';
import s from '../styles/work.module.css';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);

    update();
    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, [query]);

  return matches;
}

function Actions({ actions }) {
  return (
    <div className={s.actions}>
      {actions.map((a) =>
        a.variant === 'disabled' ? (
          <span key={a.label} className={s.private}>
            <Lock size={14} aria-hidden="true" />
            {a.label}
          </span>
        ) : (
          <Button key={a.label} href={a.href} variant={a.variant} size="sm">
            {a.variant === 'light' ? (
              <Github size={14} aria-hidden="true" />
            ) : null}
            {a.label}
            {a.variant === 'dark' ? (
              <ArrowUpRight size={14} aria-hidden="true" />
            ) : null}
          </Button>
        )
      )}
    </div>
  );
}

function Rail({ project, isMobile, expanded, onToggle }) {
  const primary = project.lenses.filter((lens) => lens.primary);
  const secondary = project.lenses.filter((lens) => !lens.primary);
  const detailsId = `project-details-${project.id}`;

  return (
    <div className={s.rail}>
      <div className={s.railHead}>
        <h3
          className={`${s.projTitle} ${project.logo ? s.projTitleLogo : ''}`}
        >
          {project.logo ? (
            <>
              <span className="srOnly">{project.title}</span>
              <Image
                className={s.projectLogo}
                src={project.logo}
                alt=""
                width={1195}
                height={316}
                aria-hidden="true"
              />
            </>
          ) : (
            project.title
          )}
        </h3>
        <Chip tone={project.statusTone || 'live'}>{project.status}</Chip>
      </div>

      <p className={s.tagline}>{project.tagline}</p>
      <p className={s.period}>{project.period}</p>

      <hr className={s.rule} />

      <dl className={s.lenses}>
        {primary.map((l) => (
          <div key={l.k}>
            <dt className={s.lensKey}>{l.k}</dt>
            <dd className={s.lensText}>{l.t}</dd>
          </div>
        ))}
      </dl>

      {secondary.length ? (
        <>
          <button
            type="button"
            className={s.detailsToggle}
            aria-expanded={isMobile ? expanded : true}
            aria-controls={detailsId}
            onClick={onToggle}
          >
            {expanded ? 'Hide technical details' : 'View technical details'}
            <ChevronDown
              size={15}
              className={expanded ? s.chevronOpen : undefined}
              aria-hidden="true"
            />
          </button>

          <dl
            id={detailsId}
            className={`${s.lenses} ${s.secondaryLenses} ${expanded ? s.secondaryOpen : ''}`}
            hidden={isMobile && !expanded}
          >
            {secondary.map((l) => (
              <div key={l.k}>
                <dt className={s.lensKey}>{l.k}</dt>
                <dd className={s.lensText}>{l.t}</dd>
              </div>
            ))}
          </dl>
        </>
      ) : null}

      {project.highlight ? (
        <p className={s.highlight}>
          {project.highlight.prefix}{' '}
          <span className={s.figure}>{project.highlight.figure}</span>{' '}
          {project.highlight.suffix}
        </p>
      ) : null}

      {project.actions?.length ? <Actions actions={project.actions} /> : null}
    </div>
  );
}

function Stage({ project, priority, tall, reducedMotion }) {
  const [raised, setRaised] = useState(false);
  const showVideo = project.video && reducedMotion === false;
  const canRaise = Boolean(showVideo);
  const showNotice =
    project.imageNotice && (!project.video || reducedMotion === true);

  const handleKeyDown = (event) => {
    if (!canRaise) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setRaised((current) => !current);
    }

    if (event.key === 'Escape') {
      setRaised(false);
    }
  };

  return (
    <div
      className={`${s.stage} ${tall ? s.stageTall : ''} ${project.video ? s.stageVideo : ''} ${raised ? s.stageRaised : ''}`}
      role={canRaise ? 'button' : undefined}
      tabIndex={canRaise ? 0 : undefined}
      aria-pressed={canRaise ? raised : undefined}
      aria-label={
        canRaise
          ? `${raised ? 'Return' : 'Bring'} ${project.title} preview ${raised ? 'behind' : 'in front of'} project details`
          : undefined
      }
      onClick={canRaise ? () => setRaised((current) => !current) : undefined}
      onKeyDown={handleKeyDown}
      onBlur={canRaise ? () => setRaised(false) : undefined}
    >
      {showVideo ? (
        <video
          className={`${s.shot} ${s.videoShot} ${
            project.id === 'mouja' ? s.moujaVideoShot : ''
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={project.image}
          aria-hidden="true"
        >
          <source src={project.video} type="video/mp4" />
        </video>
      ) : (
        <Image
          className={s.shot}
          src={project.image}
          alt={project.imageAlt}
          width={880}
          height={tall ? 560 : 520}
          sizes="(max-width: 900px) 100vw, 60vw"
          loading={priority ? 'eager' : 'lazy'}
          priority={priority}
        />
      )}
      {showNotice ? (
        <span className={s.notice}>{project.imageNotice}</span>
      ) : null}
    </div>
  );
}

export default function Work() {
  const [learnshift, mouja, rokn] = WORK_PROJECTS;
  const [expanded, setExpanded] = useState({});
  const isMobile = useMediaQuery('(max-width: 640px)');
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const rail = (project) => (
    <Rail
      project={project}
      isMobile={isMobile}
      expanded={Boolean(expanded[project.id])}
      onToggle={() =>
        setExpanded((current) => ({
          ...current,
          [project.id]: !current[project.id],
        }))
      }
    />
  );

  return (
    <section id="work" className={s.section} aria-labelledby="work-title">
      <SectionLabel>Work</SectionLabel>
      <h2 id="work-title" className={s.title}>
        Selected systems
      </h2>

      {/* Mouja.ai — rail left, image right (mirrored) */}
      <article className={`${s.case} ${s.caseMirror}`}>
        {rail(mouja)}
        <Stage project={mouja} tall reducedMotion={reducedMotion} />
      </article>

      {/* LearnShift — image left, rail overlapping right */}
      <article className={s.case}>
        <Stage project={learnshift} reducedMotion={reducedMotion} />
        {rail(learnshift)}
      </article>

      {/* Rokn.ai — paused product R&D, rail left and preview right */}
      <article className={`${s.case} ${s.caseMirror}`}>
        {rail(rokn)}
        <Stage project={rokn} tall reducedMotion={reducedMotion} />
      </article>
    </section>
  );
}
