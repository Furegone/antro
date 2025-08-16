import React, { useState } from "react";
import styles from "./NewsSection2.module.css";

export default function NewsSection2() {
  const newsList = [
    {
      title: "Versione 1.0.0",
      content:
        "Versione Iniziale, in anteprima esclusiva per Daggerheat Italia.",
    },
  ];

  return (
    <section className={styles.newsContainer}>
      <h2 className={styles.newsTitle}>Releases</h2>

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
