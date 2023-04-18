import React from "react";
import styles from "./styles.module.css";
import Contributors from "../Contributors/index";
import ContributorStyle from "../Contributors/styles.contributors.css";

const FeaturesList = [
    {
        image: "/img/docusaurus.png",
        feature: "Configuration",
        description: (
            <>
                Elevate your design system with Technotic. <br /> Ready to
                configure it to perfection?
            </>
        ),
        link: "/docs/configuration",
    },
    {
        image: "/img/docusaurus.png",
        feature: "Components",
        description: (
            <>
                Take your UI to the next level <br /> with our versatile range
                of components
            </>
        ),
        link: "/docs/components/button",
    },
    {
        image: "/img/docusaurus.png",
        feature: "Deployment",
        description: (
            <>
                Maximize your components' potential <br /> ~ deploy with ease
            </>
        ),
        link: "/docs/deployment",
    },
];

function Features({ image, feature, description, link }) {
    return (
        <div className={styles.features_card_container}>
            <div className={styles.features_card_subcontainer}>
                <img src={image} alt="img" />
                <div className={styles.features_name}>{feature}</div>
                <div className={styles.features_desc}>{description}</div>
                <form action={link}>
                    <button type="submit" className={styles.features_button}>
                        {feature}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <div className={styles.homepage_container}>
            <section className={styles.homepage_subcontainer}>
                <div className="container">
                    <h1>What's Technotic?</h1>
                    <img src="./img/logo.svg" alt="logo" />
                    <h2>
                        Taken from several BNCC event names such as BNCC Techno
                        Talk and BNCC Technoscape.
                    </h2>
                    <p>
                        Technotic means learning about technology and means to
                        understand how computers work as well as identifying and
                        utilizing computer components for further development in
                        their approach towards users.
                    </p>
                </div>
            </section>

            <section>
                <div className={styles.features_container}>
                    <h1 className="text--center">Features</h1>
                    <div className={styles.features_item}>
                        {FeaturesList.map((props, idx) => (
                            <Features key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.contributors_container}>
                <div className="container">
                    <h1 className="text--center">Contributors</h1>
                    <div className={styles.contributors_item}>
                        <Contributors className={ContributorStyle} />
                    </div>
                </div>
            </section>
        </div>
    );
}
