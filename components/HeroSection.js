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
            <div className={styles.terminalTitle}>
    Ask Majeed
  </div>
          <p>
            <TypewriterText
              text="I  build and operate end-to-end systems where technical depth and execution matter. Curious? Ask me anything about my work!"
              speed={10}
              cursorClass={styles.cursor}
              cursorBlinkClass={styles.cursorBlink}
            />
          </p>

          <div className={styles.buttons}>
            {/* <a href="#bio" className={styles.primaryBtn}>
              About Me
            </a> */}
            <a href="#" className={styles.secondaryBtn}>
              Coming soon!
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
