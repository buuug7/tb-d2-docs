import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import FeatureCarousel from "@site/src/components/FeatureCarousel";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import {
  qqLink,
  feature1,
  feature2,
  feature3,
  feature4,
} from "../config/index.js";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className={styles.overlay} />
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__">
          <span>QQ 群号 1016899678</span>{" "}
          <span className="margin-horiz--sm">d2.yoursoups.com</span>
        </p>
        <hr />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--outline2  button--lg margin-horiz--sm"
            href={qqLink}
          >
            添加 QQ 群
          </Link>
          <Link
            className="button button--secondary button--outline2 button--lg margin-horiz--sm"
            to="/docs/tubieDocs/intro"
          >
            快速开始
          </Link>
        </div>
      </div>
    </header>
  );
}

function Features() {
  return (
    <div className={styles.homeShowCase}>
      <FeatureCarousel features={feature3} />
      <FeatureCarousel features={feature1} />
      <FeatureCarousel features={feature2} />
      <FeatureCarousel features={feature4} />
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <div style={{ position: "relative" }}>
        <HomepageHeader />
      </div>
      <main>
        <section className="container my-4">
          <Features />
        </section>
      </main>
    </Layout>
  );
}
