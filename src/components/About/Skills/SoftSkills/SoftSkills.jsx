import React from "react";
import styles from "../../../../assets/styles/about/about.module.css";
export default function SoftSkills() {
  return (
    <>
      <div className={styles.skills}>
        <h2 className={styles.skillsTitle}>Soft Skills</h2>
        <div className={styles.list}>
          <ul className={styles.skillsList}>
            <li className={styles.listItem}>Problem Solving </li>
            <li className={styles.listItem}>Attention to Detail</li>
            <li className={styles.listItem}>Time Management</li>
            <li className={styles.listItem}>Adaptability </li>
            <li className={styles.listItem}>Communication</li>
          </ul>
          <ul
            className={`${styles.skillsList} ${styles.skillsListWithMarginLeft}`}
          >
            <li className={styles.listItem}>Collaboration </li>
            <li className={styles.listItem}>Creativity</li>
            <li className={styles.listItem}>Self-Motivation</li>
            <li className={styles.listItem}>Quality Assurance</li>
            <li className={styles.listItem}>Adaptability to Feedback </li>
          </ul>
        </div>
      </div>
    </>
  );
}
