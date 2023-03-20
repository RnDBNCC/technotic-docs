import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// const FeatureList = [
//   {
//     title: 'Easy to Use',
//     Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//     description: (
  //       <>
  //         Extend or customize your website layout by reusing React. Docusaurus can
  //         be extended while reusing the same header and footer.
  //       </>
  //     ),
  //   },
  // ];
  
  const Technotic = [
    
  ]
  
  const ContributorsList = [
    {
      name: 'Randi Adiel Gianufian',
      Svg: require('@site/static/img/RandiAdiel.svg').default,
      description: (
        <>
          Chief Product Officer 31
        </>
      ),
    },
    {
      name: 'Jonathan Christian',
      Svg: require('@site/static/img/JonathanChristian.svg').default,
    description: (
      <>
        Research and Development 34 Manager
      </>
    ),
  },
  {
    name: 'Joshua Jevon Irawan',
    Svg: require('@site/static/img/JoshuaJevonIrawan.svg').default,
    description: (
      <>
        Research and Development 34 Staff
      </>
    ),
  },
  {
    name: 'Rifian Fernando',
    Svg: require('@site/static/img/RifianFernando.svg').default,
    description: (
      <>
        Research and Development 34 Staff
      </>
    ),
  },
  {
    name: 'Defario Fitriano',
    Svg: require('@site/static/img/DefarioFitriano.svg').default,
    description: (
      <>
        Research and Development 34 Staff
      </>
    ),
  },
  {
    name: 'Christopher Nathanael Tessy',
    Svg: require('@site/static/img/ChristopherNathanael.svg').default,
    description: (
      <>
        FAVE 34 Manager
      </>
    ),
  },
];

// function Feature({Svg, title, description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }



function Contributors({Svg, name, description}){
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.contributorsSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{name}</h3>
        <p>{description}</p>
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
            <img src={require("@site/static/img/favicon.png")}/>
            <h2>Taken from several BNCC event names such as BNCC Techno Talk and BNCC Technoscape.</h2>
            <p>Technotic means learning about technology and means to understand how computers work as well as identifying and utilizing computer components for further development in their approach towards users.</p>
          </div>
      </section>

      <section>
        <div className="container">
          <div className={styles.cardLayout}>
            <Link to="/docs/intro" className={styles.card}>
              Let's Get Started!
            </Link>

            <Link to="/docs/Configuration"className={styles.card}>
              Configuration
            </Link>

            <Link to="/docs/Deployment" className={styles.card}>
              Deployment
            </Link>

            <Link to="/docs/Components/Button" className={styles.card}>
              Components
            </Link>
          </div>
          
        </div>
      </section>

      <section className={styles.contributors}>
        <div className="container">
          <h1 className="text--center">Contributors</h1>
          {/* <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div> */}
          <div className="row">
            {ContributorsList.map((props, idx) => (
              <Contributors key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
