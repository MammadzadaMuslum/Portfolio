import Link from "next/link";
import React from "react";
import styles from "../../assets/styles/header/header.module.css";
export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div  className={styles.headerdiv}>
          <div className={styles.left}>
            <span className={styles.hr}></span>
          </div>
          <nav className={styles.navbar}>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
