import React from 'react';
import styles from './HomepageFeatures/styles.module.css';

const projects = [
  { name: 'Traduzione SRD', progress: 85 },
  { name: 'Strumenti GM', progress: 20 },
  { name: 'Void', progress: 10 },
  { name: 'GM Screen', progress: 0 },
  { name: 'Altro Materiale', progress: 0 },
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
