import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

const qqLink = `http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=HP7dQ70YSL68fqFuWh3O7wwsR2pdPKTG&authKey=xGD25yNcClpTeoFl8ZP1ZRpeCl%2Bhfq5eHcXBOY0T%2BSxRm0jLubwbdTPKj2mLN7eu&noverify=0&group_code=1016899678`;

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
          <span className="margin-horiz--sm">网站: d2.yoursoups.com</span>
        </p>
        <hr />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--outline2  button--lg2 margin-horiz--sm"
            href={qqLink}
          >
            添加 QQ 群
          </Link>
          <Link
            className="button button--secondary button--outline2 button--lg2 margin-horiz--sm"
            to="/docs/intro"
          >
            快速开始
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div style={{position: 'relative'}}>
      <HomepageHeader />

      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
