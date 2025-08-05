import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Benvenuto nella home di Docusaurus">
      
      <main className={styles.mainContainer}>
        {/* Le due colonne (affiancate su desktop, verticali su mobile) */}
        <section className={styles.columnsContainer}>

<div className={styles.authorColumn}>
  <h2>Chi sono</h2>
  <p>
    Ciao! La mia avventura nel mondo dei giochi di ruolo è iniziata negli anni Ottanta, con la leggendaria scatola rosa di Dungeons & Dragons. Da allora, il suono dei dadi è diventato una costante: nel corso del tempo ho esplorato un’infinità di sistemi, ricoprendo con entusiasmo i ruoli sia di Master che di giocatore.
  </p>
  <p>
    Amo progettare strumenti – digitali e cartacei – che rendano l’esperienza al tavolo più scorrevole e intuitiva. Che si tratti di semplificare una scheda, riorganizzare una tabella o adattare una regola, metto volentieri mano a tutto ciò che può alleggerire il lavoro dietro lo schermo (e non solo).
  </p>
  <p>
Sono anche un grande appassionato di informatica, tecnologia e cultura nerd in generale. Mi auguro che le risorse che condivido possano rivelarsi utili durante le vostre sessioni… magari aiutando qualche Master a cavarsela nei momenti più imprevedibili.
  </p>
  <p>
    Buon gioco a tutti!<br /><br />
    <h6><b>Furegone</b></h6>
  </p>
</div>

          <div className={styles.missionColumn}>
            <h2>Missione Editoriale</h2>
            <ul>
              <li>Tradurre in italiano il materiale disponibile nel sito ufficiale di <a href="https://www.daggerheart.com" target="_blank" rel="noopener noreferrer">Daggerheart</a>.</li>
              <li>Organizzare il materiale tradotto in un unico punto di riferimento, facilmente consultabile sia da computer che da dispositivi mobili.</li>
              <li>Fornire conversioni da unità imperiali a metriche inline per una migliore comprensione.</li>
            </ul>

            <h3>Obiettivi</h3>
            <ul>
              <li>Aggiornare costantemente la raccolta con le novità del <a href="https://www.daggerheart.com/srd/" target="_blank" rel="noopener noreferrer">Daggerheart SRD</a> e le Errata ufficiali.</li>
              <li>Aggiungere una sezione dedicata ai materiali tradotti di Void.</li>
              <li>Fornire una traduzione italiana dei sistemi e dei moduli SRD per Foundry VTT.</li>
              <li>Creare un Master screen in italiano, disponibile sia in formato digitale che in PDF stampabile.</li>
            </ul>
<p className={styles.editorNote}>
  Se ti va di supportare questo lavoro, puoi offrire un <a href="https://ko-fi.com/furegone" target="_blank" rel="noopener noreferrer">☕ Ko-fi a Furegone</a>!
</p>
<p className={styles.editorNote}>
  Se hai bisogno di contattarmi mi trovi su Telegram: <a href="https://t.me/Furegone" target="_blank" rel="noopener noreferrer">@Furegone</a>
</p>
          </div>

        </section>

        {/* Features */}
        <section>
          <HomepageFeatures />
        </section>

      </main>
    </Layout>
  );
}