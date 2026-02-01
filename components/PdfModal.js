import styles from '../styles/PdfModal.module.css';
import React from 'react';

export default function PdfModal({ src, title, onClose }) {
    if (!src) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
        <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
        >
            <div className={styles.header}>
            <span>{title}</span>
            <button onClick={onClose}>×</button>
            </div>

            <iframe
            src={src}
            title={title}
            className={styles.iframe}
            />
        </div>
        </div>
    );
}
