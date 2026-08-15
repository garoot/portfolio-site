import React from 'react';
import Image from 'next/image';
import { ArrowRight, Download, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Primitives';
import s from '../styles/hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={s.hero} aria-labelledby="hero-title">
      <div className={s.inner}>
        <div className={s.copy}>
          <span className={s.eyebrow}>
            <span className={s.eyebrowDot} aria-hidden="true" />
            <span className={s.eyebrowText}>AI SYSTEMS · CLOUD · RELIABILITY</span>
          </span>

          <h1 id="hero-title" className={s.title}>
            I build and operate production AI systems
          </h1>

          <p className={s.sub}>
            — where control, reliability, and execution matter.
          </p>

          <div className={s.actions}>
            <Button href="#work" variant="dark">
              View Work
              <ArrowRight size={16} aria-hidden="true" />
            </Button>

            <Button href="/Abdulmajeed_Garoot_CV.pdf" variant="light">
              <Download size={16} aria-hidden="true" />
              Download CV
            </Button>

            <Button
              href="https://linkedin.com/in/abdulmajeed-garoot"
              variant="text"
            >
              LinkedIn
              <ArrowUpRight size={15} aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className={s.stage}>
          <div className={s.tile} aria-hidden="true" />
          <Image
            className={s.mascot}
            src="/character9.png"
            alt="Pixel-art mascot of Abdulmajeed: sunglasses, blue and yellow jacket"
            width={330}
            height={470}
            priority
            sizes="(max-width: 900px) 210px, 330px"
          />
          <span className={s.place}>RIYADH · SAUDI ARABIA</span>
        </div>
      </div>
    </section>
  );
}
