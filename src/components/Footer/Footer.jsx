import React from "react";
import styles from "../../assets/styles/footer/footer.module.css";
import Link from "next/link";

//icons
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.left}>
          <p className={styles.title}>
            &copy; 2024 <b>Mammadzada Muslum.</b> Designed and Developed by Me.
          </p>
        </div>
        <div className={styles.right}>
          <nav className={styles.navbar}>
            <li>
              <Link
                target="blank"
                href="https://www.linkedin.com/in/muslum-memmedzade-5715242b4/"
              >
                <AiFillLinkedin color="white" size={28} />
              </Link>
            </li>
            <li>
              <Link target="blank" href="https://github.com/MammadzadaMuslum">
                <IoLogoGithub color="white" size={28} />
              </Link>
            </li>
            <li>
              <Link href="mailto:muslummemmedzadee@gmail.com">
                <AiOutlineMail color="white" size={28} />
              </Link>
            </li>
          </nav>
          <span className={styles.hr}></span>
        </div>
      </footer>
    </>
  );
}
