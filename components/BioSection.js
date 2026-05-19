import styles from '../styles/bio.module.css';
import Image from 'next/image';
import React, { useState } from 'react';
import useRevealOnView from './animation/useRevealOnView';
import PdfModal from './PdfModal';
import {
  User,
  GraduationCap,
  Award,
  Cpu,
  FileText,
} from 'lucide-react';

export default function BioSection() {
  const [contentRef, revealed] = useRevealOnView();
  const [activePdf, setActivePdf] = useState(null);

  return (
    <section
      id="bio"
      data-revealed={revealed}
      className={styles.bioSection}
    >
      <div className={styles.container}>

        {/* Index */}
        <div className={styles.index}>
          <span>01</span>
        </div>

        {/* Scan line */}
        <div
          className={`${styles.scanLine} ${revealed ? styles.scanActive : ''}`}
        />

        {/* Content */}
        <div
          ref={contentRef}
          className={styles.content}
        >
          <div className={styles.header}>
            <h1>
              <span>About Me</span>
              <User size={18} className={styles.headerIcon} />
            </h1>
            <p className={styles.subtitle}>
              AI engineering, backend systems, and reliable LLM workflows
            </p>
          </div>

          <p className={styles.introduction}>
            I’m Majeed — an AI Engineer focused on backend services, LLM workflows, RAG pipelines, and reliable AI features.
          </p>

          <p className={styles.body}>
            I build backend services and AI-powered workflows that connect LLMs with real product features.
            My work includes retrieval-augmented generation, embeddings, structured prompts, API integration,
            and response validation for AI systems.
            <br /><br />
            I focus on making AI features more reliable through clear context handling, retries, fallback logic,
            cost awareness, and human review where needed.
            <br /><br />
            My background combines Computer Science, Data Science, backend engineering, and hands-on AI project work
            across chatbot systems, learning platforms, and multi-step LLM workflows.
          </p>

          {/* Credentials */}
          <div className={styles.credentials}>

            <div className={styles.group}>
              <p className={styles.groupLabel}>
                Formal Education
              </p>

              <div
                className={styles.credential}
                onClick={() =>
                  setActivePdf({
                    src: '/certificates/msc-datascience.pdf',
                    title: 'Master of Data Science — Deakin University',
                  })
                }
              >
                <FileText size={14} className={styles.credentialIcon} />
                <span>
                  Master of Data Science
                  <small className={styles.subNote}>
                    Deakin University (Australia) · 2025
                  </small>
                </span>
                <Image src="/deakin.png" alt="Deakin University" width={28} height={28} />
              </div>

              <div
                className={styles.credential}
                onClick={() =>
                  setActivePdf({
                    src: '/certificates/bsc-compsci.pdf',
                    title: 'Bachelor of Computer Science — University of Victoria',
                  })
                }
              >
                <FileText size={14} className={styles.credentialIcon} />
                <span>
                  Bachelor of Computer Science
                  <small className={styles.subNote}>
                    University of Victoria (Canada) · 2019
                  </small>
                </span>
                <Image src="/uvic.png" alt="University of Victoria" width={28} height={28} />
              </div>
            </div>

            <div className={styles.groupSecondary}>
              <p className={styles.groupLabel}>
                Professional Training & Certifications
              </p>

              <div
                className={styles.credential}
                onClick={() =>
                  setActivePdf({
                    src: '/certificates/azure-ai-900.pdf',
                    title: 'Microsoft Azure AI-900 — Azure AI Fundamentals',
                  })
                }
              >
                <Cpu size={14} className={styles.credentialIcon} />
                <span>
                  Microsoft Azure AI-900 — Azure AI Fundamentals
                  <small className={styles.subNote}>
                    Microsoft Azure · May 2024
                  </small>
                </span>
                <Image src="/azure.png" alt="Microsoft Azure" width={28} height={28} />
              </div>

              <div
                className={styles.credential}
                onClick={() =>
                  setActivePdf({
                    src: '/certificates/crmo_certificate.pdf',
                    title: 'Certified Risk Management Officer — CRMO',
                  })
                }
              >
                <Award size={14} className={styles.credentialIcon} />
                <span>
                  Certified Risk Management Officer — CRMO
                  <small className={styles.subNote}>
                    Apr 2026
                  </small>
                </span>
                <Image src="/agrc.png" alt="CRMO" width={28} height={28} />
              </div>

              <div
                className={styles.credential}
                onClick={() =>
                  setActivePdf({
                    src: '/certificates/misk-launchpad-8.pdf',
                    title: 'MISK Launchpad 8.0 — Product & Technology Program',
                  })
                }
              >
                <Award size={14} className={styles.credentialIcon} />
                <span>
                  MISK Launchpad 8.0 — Product & Technology Program
                  <small className={styles.subNote}>
                    MISK Foundation × 2080 Ventures · Aug 2025
                  </small>
                </span>
                <Image
                  src="/2080-Ventures.png"
                  alt="MISK Foundation & 2080 Ventures"
                  width={28}
                  height={28}
                />
              </div>

              <div
                className={styles.credential}
                onClick={() =>
                  setActivePdf({
                    src: '/certificates/coding-dojo-fullstack.pdf',
                    title: 'Full-Stack Software Development — Coding Dojo',
                  })
                }
              >
                <Award size={14} className={styles.credentialIcon} />
                <span>
                  Full-Stack Software Development
                  <small className={styles.subNote}>
                    Coding Dojo · Jul 2021
                  </small>
                </span>
                <Image src="/codingdojo.png" alt="Coding Dojo" width={44} height={18} />
              </div>
            </div>

          </div>
        </div>

        {/* Avatar */}
        <div className={styles.avatar}>
          <Image
            src="/character9.png"
            alt="Avatar"
            width={90}
            height={140}
          />
        </div>

      </div>

      {/* PDF Modal */}
      <PdfModal
        src={activePdf?.src}
        title={activePdf?.title}
        onClose={() => setActivePdf(null)}
      />
    </section>
  );
}
