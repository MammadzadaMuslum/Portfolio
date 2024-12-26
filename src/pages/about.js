import React from "react";
import styles from "../assets/styles/about/about.module.css";
import Head from "next/head";

//Components
import HardSkills from "../components/About/Skills/HardSkills/HardSkills";
import SoftSkills from "../components/About/Skills/SoftSkills/SoftSkills";

export default function about() {
  return (
    <>
    <Head>
      <title>About Page</title>
    </Head>
      <section className={styles.sectionAbout}>
        <div className="container">
          <div className="about-page">
            <div className={styles.textbox}>
              <h1 className={styles.texthead}>Who am I ?</h1>
            </div>
            <article className={styles.historybox}>
              <h2 className={styles.title}>My History</h2>
              <p className={styles.textboxtext}>
                My passion for technology turned into a journey that started by
                creating simple web pages. With the knowledge and experience I
                have gained in frontend development, I focus on designing
                user-friendly and aesthetic web interfaces. I am determined to
                produce innovative solutions and learn modern technologies. In
                every project, I reflect my attention to detail and my belief in
                continuous improvement.
              </p>
            </article>
            <article className={styles.skillsTable}>
              <HardSkills />
              <SoftSkills />
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
