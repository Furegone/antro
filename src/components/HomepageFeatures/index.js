import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Materiali per Daggerheart',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Una raccolta di materiali per Daggerheart tradotti In italiano: SRD, Schede, Fogli Extra, Carte di Dominio, Materiali di Void.
      </>
    ),
    link: '/docs/materiali',           // qui la URL dove vuoi mandare
    linkLabel: 'Vai ai materiali',     // testo del pulsante
  },
  {
    title: 'Consigli e Strumenti per Game Masters.',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Una raccolta di strumenti utili per Game Masters, per creare e gestire campagne.
      </>
    ),
    link: '/docs/strumenti',
    linkLabel: 'Scopri di più',
  },
  {
    title: 'Regole e Homebrew',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Nuove Regole, Ambientazioni, Spunti, e Work in Progress. Sia per Daggerheart che per altri Sistemi.
      </>
    ),
    badge: 'Work in Progress',
    // senza link → nessun pulsante mostrato
  },
];

function Feature({Svg, title, description, link, linkLabel, badge}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {link && linkLabel && (
          <a href={link} className="button button--primary" target="_blank" rel="noopener noreferrer">
            {linkLabel}
          </a>
        )}
        {badge && (
          <div className={styles.badge}>{badge}</div>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
