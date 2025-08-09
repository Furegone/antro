import React from 'react';
import styles from './HomepageFeatures/styles.module.css';

const projects = [
  { name: 'Traduzione SRD', progress: 100 },
  { name: 'Revisione Carte', progress: 100 },
  { name: 'Traduzione Homebrew', progress: 90 },
  { name: 'Traduzione Void', progress: 10 },
];

function getColor(progress) {
  const factor = 0.8; // Più basso = più scuro
  const r = Math.floor((255 - (progress * 2.55)) * factor);
  const g = Math.floor((progress * 2.55) * factor);
  return `rgb(${r},${g},0)`;
}

export default function ProgressBars() {
  return (
    <div className={styles.progressBars}>
      {projects.map(({ name, progress }) => (
        <div key={name} className={styles.progressBarContainer}>
          <div className={styles.projectName}>{name}</div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%`, backgroundColor: getColor(progress) }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              role="progressbar"
            />
          </div>
          <div className={styles.progressPercent}>{progress}%</div>
        </div>
      ))}
    </div>
  );
}
