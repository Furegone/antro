// GridPage.js aggiornato con baseUrl '/antro/'

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function GridPage() {
  const columns = [
    [
      {
        title: 'Classi',
        text: 'Esplora le classi disponibili...',
        background: '#0f3164ff',
        links: [
          { label: 'BARDO', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/CLASSI/BARDO' },
          { label: 'DRUIDO', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/CLASSI/DRUIDO' },
          { label: 'GUARDIANO', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/CLASSI/GUARDIANO' },
          { label: 'GUERRIERO', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/CLASSI/GUERRIERO' },
          { label: 'LADRO', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/CLASSI/LADRO' },
          { label: 'MAGO', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/CLASSI/MAGO' },
          { label: 'RANGER', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/CLASSI/RANGER' },
          { label: 'SERAFINO', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/CLASSI/SERAFINO' },
          { label: 'STREGONE', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/CLASSI/STREGONE' },
        ],
      },
      {
        title: 'Comunità',
        text: 'Panoramica delle Comunità...',
        background: '#143f27ff',
        links: [
          { label: 'HIGHBORNE', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/COMUNITA/HIGHBORNE' },
          { label: 'LOREBORNE', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/COMUNITA/LOREBORNE' },
          { label: 'ORDERBORNE', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/COMUNITA/ORDERBORNE' },
          { label: 'RIDGEBORNE', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/COMUNITA/RIDGEBORNE' },
          { label: 'SEABORNE', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/COMUNITA/SEABORNE' },
          { label: 'SLYBORNE', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/COMUNITA/SLYBORNE' },
          { label: 'UNDERBORNE', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/COMUNITA/UNDERBORNE' },
          { label: 'WANDERBORNE', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/COMUNITA/WANDERBORNE' },
          { label: 'WILDBORNE', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/COMUNITA/WILDBORNE' },
        ],
      },
    ],
    [
      {
        title: 'Ascendenze',
        text: 'Dettagli sulle Ascendenze...',
        background: '#3b0a0a',
        links: [
          { label: 'DRAKONA', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/DRAKONA' },
          { label: 'DWARF', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/DWARF' },
          { label: 'ELF', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/ELF' },
          { label: 'FAERIE', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/FAERIE' },
          { label: 'FAUN', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/FAUN' },
          { label: 'FIRBOLG', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/FIRBOLG' },
          { label: 'FUNGRIL', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/FUNGRIL' },
          { label: 'GALAPA', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/GALAPA' },
          { label: 'GIANT', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/GIANT' },
          { label: 'GOBLIN', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/GOBLIN' },
          { label: 'HALFLING', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/HALFLING' },
          { label: 'HUMAN', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/HUMAN' },
          { label: 'INFERNIS', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/INFERNIS' },
          { label: 'KATARI', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/KATARI' },
          { label: 'ORC', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/ORC' },
          { label: 'RIBBET', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/RIBBET' },
          { label: 'SIMIAH', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/SIMIAH' },
          { label: 'ASCENDENZA MISTA', to: '/antro/docs/SRD/MATERIALI%20FONDAMENTALI/ASCENDENZE/ASCENDENZA%20MISTA' },
        ],
      },
    ],
    [
      {
        title: 'Avversari',
        text: 'Consulta la lista degli Avversari.',
        background: '#512f3f',
        links: [
          { label: 'AVVERSARI TIER1', to: '/antro/docs/SRD/GESTIRE%20UN%20AVVENTURA/AVVERSARI/AVVERSARI%20TIER%201' },
          { label: 'AVVERSARI TIER2', to: '/antro/docs/SRD/GESTIRE%20UN%20AVVENTURA/AVVERSARI/AVVERSARI%20TIER%202' },
          { label: 'AVVERSARI TIER3', to: '/antro/docs/SRD/GESTIRE%20UN%20AVVENTURA/AVVERSARI/AVVERSARI%20TIER%203' },
          { label: 'AVVERSARI TIER4', to: '/antro/docs/SRD/GESTIRE%20UN%20AVVENTURA/AVVERSARI/AVVERSARI%20TIER%204' },
        ],
      },
      {
        title: 'Ambienti',
        text: 'Sfoglia le liste degli Ambienti.',
        background: '#1c1327',
        links: [
          { label: 'AMBIENTI TIER1', to: '/antro/docs/SRD/GESTIRE%20UN%20AVVENTURA/AMBIENTI/AMBIENTI%20TIER%201' },
          { label: 'AMBIENTI TIER2', to: '/antro/docs/SRD/GESTIRE%20UN%20AVVENTURA/AMBIENTI/AMBIENTI%20TIER%202' },
          { label: 'AMBIENTI TIER3', to: '/antro/docs/SRD/GESTIRE%20UN%20AVVENTURA/AMBIENTI/AMBIENTI%20TIER%203' },
          { label: 'AMBIENTI TIER4', to: '/antro/docs/SRD/GESTIRE%20UN%20AVVENTURA/AMBIENTI/AMBIENTI%20TIER%204' },
        ],
      },
      {
        title: 'Carte Di Dominio',
        text: 'Liste complete delle carte.In Revisione',
        background: '#362847ff',
        links: [
          { label: 'ARCANO', to: '/antro/docs/SRD/APPENDICE/RIFERIMENTO%20CARTE%20DI%20DOMINIO#dominio-arcano' },
          { label: 'LAMA', to: '/antro/docs/SRD/APPENDICE/RIFERIMENTO%20CARTE%20DI%20DOMINIO#dominio-lama' },
          { label: 'OSSA', to: '/antro/docs/SRD/APPENDICE/RIFERIMENTO%20CARTE%20DI%20DOMINIO#dominio-ossa' },
          { label: 'CODICE', to: '/antro/docs/SRD/APPENDICE/RIFERIMENTO%20CARTE%20DI%20DOMINIO#dominio-codice' },
          { label: 'GRAZIA', to: '/antro/docs/SRD/APPENDICE/RIFERIMENTO%20CARTE%20DI%20DOMINIO#dominio-grazia' },
          { label: 'OSCURITA', to: '/antro/docs/SRD/APPENDICE/RIFERIMENTO%20CARTE%20DI%20DOMINIO#dominio-oscurita' },
          { label: 'SAGGIO', to: '/antro/docs/SRD/APPENDICE/RIFERIMENTO%20CARTE%20DI%20DOMINIO#dominio-saggio' },
          { label: 'SPLENDORE', to: '/antro/docs/SRD/APPENDICE/RIFERIMENTO%20CARTE%20DI%20DOMINIO#dominio-splendore' },
          { label: 'VALORE', to: '/antro/docs/SRD/APPENDICE/RIFERIMENTO%20CARTE%20DI%20DOMINIO#dominio-valore' },
        ],
      },
    ],
  ];

  return (
    <Layout title="Griglia Dark" description="Layout a 3 colonne con contenitori per tema scuro.">
      <main className="grid-container">
        <div className="grid-wrapper">
          {columns.map((col, ci) => (
            <div key={ci} className="grid-column">
              {col.map((item, idx) => (
                <ContentBox key={idx} {...item} />
              ))}
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

function ContentBox({ title, text, background, links }) {
  return (
    <div className="content-box" style={{ background }}>
      <h3 className="content-box-title">{title}</h3>
      <p className="content-box-text">{text}</p>
      <ul className="content-box-links">
        {links?.map((link, i) => (
          <li key={i}>
            <Link className="content-box-link" to={link.to}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}