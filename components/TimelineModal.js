import styles from '../styles/timeline.module.css';
import React from 'react';

export default function TimelineModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{item.title}</h3>
        <p className={styles.modalOrg}>{item.org}</p>

        <div className={styles.modalBody}>
          {item.description}
        </div>
      </div>
    </div>
  );
}
