import "./index.css";
import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title={`Home`} description="">
      <div className={styles.hero}>
        <header>
          <h1>{siteConfig.title}</h1>
          <p>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link to={useBaseUrl("docs/")}>Get Started</Link>
          </div>
        </header>
        <main>
          <div className="warning">Hi! Crushed is not ready for use.</div>
        </main>
      </div>
    </Layout>
  );
}

export default Home;
