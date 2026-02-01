import styles from '../styles/hero.module.css';
import Image from 'next/image';
import React from 'react';
import TypewriterText from './animation/TypewriterText';
import { TerminalSquare, MessageCircle } from 'lucide-react';

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
            <TerminalSquare
              size={12}
              className={styles.terminalIcon}
            />
            <span>Ask Majeed</span>
          </div>

          <p>
            <TypewriterText
              text="I  build and operate end-to-end systems where technical depth and execution matter."
              speed={10}
              cursorClass={styles.cursor}
              cursorBlinkClass={styles.cursorBlink}
            />
          </p>

          {/* <div className={styles.buttons}>
            <a href="#" className={styles.secondaryBtn}>
              <MessageCircle
                size={14}
                className={styles.chatIcon}
              />
              <span>Chatbot coming soon</span>
            </a>
          </div> */}

        </div>

      </div>
    </section>
  );
}
