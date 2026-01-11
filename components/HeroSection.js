import styles from '../styles/hero.module.css';
import Image from 'next/image';
import React from 'react';
import TypewriterText from './animation/TypewriterText';

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>

        {/* Avatar */}
        <div className={styles.avatar}>
          <Image
            src="/character9.png"
            alt="Avatar illustration"
            width={160}
            height={230}
            priority
          />
        </div>

        {/* Focus / terminal panel */}
        <div className={styles.focusPanel}>
          <p>
            <TypewriterText
              text="I  build and ship end-to-end software systems, with depth in backend architecture and production AI integration."
              speed={10}
              cursorClass={styles.cursor}
              cursorBlinkClass={styles.cursorBlink}
            />
          </p>

          <div className={styles.buttons}>
            <a href="#bio" className={styles.primaryBtn}>
              About Me
            </a>
            <a href="#work" className={styles.secondaryBtn}>
              Hit Me Up
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
