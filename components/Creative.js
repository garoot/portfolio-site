import React from 'react';
import Image from 'next/image';
import { Play, ArrowUpRight } from 'lucide-react';
import { SectionLabel } from './ui/Primitives';
import { CREATIVE_WORKS } from './data/work';
import s from '../styles/creative.module.css';

function Card({ item, featured }) {
  return (
    <article className={featured ? s.featured : s.small}>
      <a
        className={s.cardLink}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch on Vimeo — ${item.title}`}
      >
        <div className={featured ? s.mediaFeatured : s.media}>
          <Image
            className={s.still}
            src={item.image}
            alt={item.imageAlt}
            width={featured ? 960 : 460}
            height={featured ? 540 : 259}
            sizes={featured ? '(max-width: 1000px) 100vw, 58vw' : '(max-width: 1000px) 100vw, 30vw'}
            loading="lazy"
          />
          <span className={s.scrim} aria-hidden="true" />
          <span className={s.play} aria-hidden="true">
            <Play size={featured ? 26 : 18} fill="currentColor" strokeWidth={0} />
          </span>
        </div>

        <div className={featured ? s.metaFeatured : s.meta}>
          <div className={s.metaText}>
            <div className={s.metaHead}>
              <h3 className={featured ? s.titleFeatured : s.title}>
                {item.title}
              </h3>
              <span className={s.tag}>
                {item.year} · {item.format}
              </span>
            </div>
            <p className={s.desc}>{item.description}</p>
          </div>

          <span className={s.watch} aria-hidden="true">
            Watch on Vimeo
            <ArrowUpRight size={14} />
          </span>
        </div>
      </a>
    </article>
  );
}

export default function Creative() {
  const featured = CREATIVE_WORKS.find((w) => w.featured);
  const rest = CREATIVE_WORKS.filter((w) => !w.featured);

  return (
    <section
      id="creative"
      className={s.section}
      aria-labelledby="creative-title"
    >
      <SectionLabel>Beyond Systems</SectionLabel>

      <h2 id="creative-title" className={s.heading}>
        Stories in motion
      </h2>
      <p className={s.lead}>
        Visual storytelling through motion, culture, and technical explanation.
      </p>

      <div className={s.grid}>
        <Card item={featured} featured />
        <div className={s.column}>
          {rest.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
