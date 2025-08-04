import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Landing() {
  return (
          <main className={styles.container}>
        <div className={styles.column}>
          <h1>Benvenuto al Progetto</h1>
          <p>
            Questo sito documenta l'iniziativa, raccoglie le risorse principali
            e guida il lettore attraverso i concetti fondamentali.
          </p>
        </div>
        <div className={styles.column}>
          <h2>Obiettivi</h2>
          <ul>
            <li>Fornire una guida chiara e aggiornata</li>
            <li>Promuovere la collaborazione e la trasparenza</li>
            <li>Documentare le best practice</li>
          </ul>
          <h2>Missione Editoriale</h2>
          <p>
            La nostra missione è offrire contenuti accurati, utili e accessibili
            per aiutare chiunque voglia approfondire questo progetto.
          </p>
        </div>
      </main>
  );
}
