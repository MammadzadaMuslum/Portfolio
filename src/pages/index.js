import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css";

//styles
import styles from "../assets/styles/home/home.module.css";

//icons
import { FaBriefcase, FaLaptopCode, FaBolt } from "react-icons/fa";
import { SiReact } from "react-icons/si";

//images
import avatar from "../assets/images/Me.png";
import Link from "next/link";

export default function index() {

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', offset: 120 });
  }, []);

  //left div mouse animation
  useEffect(() => {
    const leftDiv = document.querySelector(`.${styles.left}`);
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = leftDiv.getBoundingClientRect();
      const x = ((clientX - left) / width - 0.5) * 30;
      const y = ((clientY - top) / height - 0.5) * 30;
      leftDiv.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    };

    const resetTransform = () => {
      leftDiv.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    leftDiv.addEventListener("mousemove", handleMouseMove);
    leftDiv.addEventListener("mouseleave", resetTransform);

    return () => {
      leftDiv.addEventListener("mousemove", handleMouseMove);
      leftDiv.addEventListener("mouseleave", resetTransform);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.hero}>
            <div className={styles.left} data-aos="fade-right">
              <p className={styles.title}>
                l'm <b>Mammadzada Muslum</b>
              </p>
              <h1 className={styles.text}>
                As a frontend developer, I design modern and impressive
                websites.
              </h1>
            </div>
            <div className={styles.right} data-aos="fade-left">
              <div className={styles.imgbox}>
                <Image className={styles.img} src={avatar} alt="avatar" />
              </div>
              <div className={styles.offers}>
                <ul className={styles.list}>
                  <li className={styles.listitem}>
                    <FaBriefcase
                      style={{ color: "#16badb", marginRight: "10px" }}
                    />
                    2+ Years of Experience in Web Development
                  </li>
                  <li className={styles.listitem}>
                    <FaLaptopCode
                      style={{ color: "#16badb", marginRight: "10px" }}
                    />
                    Worked as a Freelancer for Clients
                  </li>
                  <li className={styles.listitem}>
                    <SiReact
                      style={{ color: "#61DBFB", marginRight: "10px" }}
                    />
                    Expert in React.js, Next.js, TypeScript, and SCSS
                  </li>
                  <li className={styles.listitem}>
                    <FaBolt style={{ color: "#F39C12", marginRight: "10px" }} />
                    Performance Optimization & Clean Code
                  </li>
                </ul>
                <Link className={styles.link} href="/projects">
                  See My Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
