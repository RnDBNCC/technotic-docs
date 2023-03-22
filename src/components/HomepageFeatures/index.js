import React from 'react';
import styles from './styles.module.css';
import Contributors from '../Contributors/index';
import ContributorStyle from '../Contributors/styles.contributors.css';

const FeaturesList = [
  {
    image: '/img/docusaurus.png',
    feature: 'Configuration',
    description: (
      <>
        Lorem Ipsum
      </>
    ),
    link: '/docs/Configuration'
  },
  {
    image: '/img/docusaurus.png',
    feature: 'Components',
    description: (
      <>
        Lorem Ipsum
      </>
    ),
    link: '/docs/Configuration'
  },
  {
    image: '/img/docusaurus.png',
    feature: 'Deployment',
    description: (
      <>
        Lorem Ipsum
      </>
    ),
    link: '/docs/Deployment'
  },
]

function Features({image,feature,description,link}){
  return(
    <div className={styles.card_item}>
      <div className={styles.card_inner}>
        <img src={image} alt="img"/>
        <div className={styles.featureName}>{feature}</div>
        <div className={styles.description}>{description}</div>
        <form action={link}>
          <button type='submit' className={styles.card}>{feature}</button>
        </form>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className={styles.homepage}>
      <section className={styles.technotic}>
          <div className="container">
            <h1>What's Technotic?</h1>
            <img src='./img/logo.svg' alt='logo' />
            <h2>Taken from several BNCC event names such as BNCC Techno Talk and BNCC Technoscape.</h2>
            <p>Technotic means learning about technology and means to understand how computers work as well as identifying and utilizing computer components for further development in their approach towards users.</p>
          </div>
      </section>

      <section>
        <div className={styles.contributor_container}>
            <h1 className="text--center">Features</h1>
            <div className="row">
              {FeaturesList.map((props, idx) => (
                <Features key={idx} {...props} />
              ))}
            </div>
        </div>
      </section>

      <section className={styles.contributors}>
        <div className="container">
          <h1 className="text--center">Contributors</h1>
          <div className="row">
            <Contributors className={ContributorStyle}/>
          </div>
        </div>
      </section>
    </div>
  );
}
