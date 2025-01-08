import Link from "next/link";
import React from "react";
import styles from "../../assets/styles/header/header.module.css";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerdiv}>
          <div className={styles.left}>
            <span className={styles.hr}></span>
          </div>
          <nav className={styles.navbar}>
            <ul className={styles.list}>
              <li>
                <Link className={`${styles.link} ${router.pathname==="/" ? styles.active : ""}`} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={`${styles.link} ${router.pathname==="/about" ? styles.active : ""}`} href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className={`${styles.link} ${router.pathname==="/projects" ? styles.active : ""}`} href="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className={`${styles.link} ${router.pathname==="/contact" ? styles.active : ""}`} href="/contact">
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
