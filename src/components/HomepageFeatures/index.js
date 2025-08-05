import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ProgressBars from '@site/src/components/ProgressBars';

const FeatureList = [
  {
    title: 'Materiali per Daggerheart',
    Svg: require('@site/static/img/logos-10.svg').default,
    description: (
      <>
        Una raccolta di materiali per Daggerheart tradotti In italiano: SRD, Schede, etc..
      </>
    ),
  },
  {
    title: 'Consigli e Strumenti per Game Masters.',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Una raccolta di strumenti utili per Game Masters, per creare e gestire campagne.
      </>
    ),
  },
    {
    title: 'Progetti in corso',
    Svg: ProgressBars,    // invece di un SVG usiamo il componente ProgressBars
    //reverseOrder: true,
        description: (
      <>
        Stato dei lavori di traduzione e realizzazione dei mie progetti!
      </>
    ),
    // senza link e pulsante, ma puoi aggiungerli se vuoi
  },
];

function Feature({ Svg, title, description, link, linkLabel, badge, reverseOrder }) {
  return (
    <div className={clsx('col col--4')}>
      {reverseOrder ? (
        <>
          <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>

            {link && linkLabel && (
              <a href={link} className="button button--primary" target="_blank" rel="noopener noreferrer">
                {linkLabel}
              </a>
            )}

            {badge && <div className={styles.badge}>{badge}</div>}
          </div>

          <div className="text--center" style={{ marginTop: 20 }}>
            <Svg />
          </div>
        </>
      ) : (
        <>
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

            {badge && <div className={styles.badge}>{badge}</div>}
          </div>
        </>
      )}
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
