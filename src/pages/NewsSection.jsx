import React, { useState } from "react";
import styles from "./NewsSection.module.css";

export default function NewsSection() {
  const newsList = [
    {
      title: "Modulo Daggerheart SRD in italiano per Foundry VTT",
      content:
        "Disponibile il Modulo Compendio con tutte le regole, avversari, ambienti, abilità, SRD, tutto tradotto in italiano utilizzando il materiale presente in questo sito.",
    },
    {
      title: "Traduzione Daggerheart SRD",
      content:
        "Traduzione rivista e corretta, sono state aggiornate le sezioni degli ambienti ",
    },
  ];

  return (
    <section className={styles.newsContainer}>
      <h2 className={styles.newsTitle}>News del momento</h2>

      {newsList.map((news, index) => (
        <ExpandableNews key={index} news={news} />
      ))}
    </section>
  );
}

function ExpandableNews({ news }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.newsItem}>
      <button
        className={`${styles.newsHeader} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}
      >
        <h3>{news.title}</h3>
        <span className={styles.arrow} />
      </button>

      <div
        className={`${styles.newsContent} ${open ? styles.open : ""}`}
      >
        <p>{news.content}</p>
      </div>
    </div>
  );
}
