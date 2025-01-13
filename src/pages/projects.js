import React from "react";
import styles from "../assets/styles/projects/projects.module.css";

//Components
import Slider from "../components/slider/Slider";
import Head from "next/head";

export default function projects() {
  return (
    <>
    <Head>
        <title>Projects Page</title>
    </Head>
      <section className={styles.section}>
        <div className="container">
          <div className="complated">
            <h2 className={styles.title}>Complated Projects</h2>
            <Slider />
          </div>
        </div>
      </section>
    </>
  );
}
