import React from "react";
import styles from "../../../../assets/styles/about/about.module.css";
export default function HardSkills() {
  return (
    <>
      <div className={styles.skills}>
        <h2 className={styles.skillsTitle}>Hard Skills</h2>
        <div className={styles.list}>
          <ul className={styles.skillsList}>
            <li className={styles.listItem}>HTML5, CSS3, SCSS</li>
            <li className={styles.listItem}>Tailwind CSS, Bootstrap</li>
            <li className={styles.listItem}>Material-UI,Chakra-UI</li>
            <li className={styles.listItem}>Design for mobile version</li>
            <li className={styles.listItem}>UI/UX with Figma</li>
          </ul>
          <ul className={`${styles.skillsList} ${styles.skillsListWithMarginLeft}`}>
            <li className={styles.listItem}>React.js, Next.js</li>
            <li className={styles.listItem}>Redux, Redux Toolkit</li>
            <li className={styles.listItem}>Git, GitHub, GitLab</li>
            <li className={styles.listItem}>RESTful API</li>
          <li className={styles.listItem}>JavaScript (ES6+), TypeScript</li>
          </ul>
        </div>
      </div>
    </>
  );
}
