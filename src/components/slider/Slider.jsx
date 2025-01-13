import React, { useState } from "react";
import styles from "../../assets/styles/slider/slider.module.css";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

//Images
import img1 from "../../assets/images/Screenshot 2025-01-10 160204.png";
import img2 from "../../assets/images/Screenshot 2025-01-10 164435.png";
import img3 from "../../assets/images/Screenshot 2025-01-10 165027.png";
import img4 from "../../assets/images/Screenshot 2025-01-10 165407.png";
import img5 from "../../assets/images/Screenshot 2025-01-10 165622.png";
import img6 from "../../assets/images/Screenshot 2025-01-10 170205.png";
import img7 from "../../assets/images/Screenshot 2025-01-10 170733.png";
import img8 from "../../assets/images/Screenshot 2025-01-13 105236.png";
import img9 from "../../assets/images/Screenshot 2025-01-13 113914.png";

//Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const slides = [
  {
    title: "Alison Travel",
    description:
      "I created a travel platform with a user-friendly interface, enabling hotel and tour bookings by region using modern frontend technologies.",
    image: img1,
  },
  {
    title: "KeepFace",
    description:
      "Contributed to the Keepface project by implementing photo cropping functionality for influencers, fixing bugs, and providing ongoing support to ensure seamless user experience.",
    image: img9,
  },
  {
    title: "Investment",
    description:
      "Developed an investment blog page using Bootstrap, featuring a responsive design and informative content layout.",
    image: img2,
  },
  {
    title: "Doct Online",
    description:
      "Created a platform where users can book appointments with doctors online and communicate with them seamlessly",
    image: img3,
  },
  {
    title: "Chaplean",
    description:
      "Developed a fully responsive blog page with a clean design that prioritizes readability and user engagement. The layout adapts seamlessly across devices, providing a smooth browsing experience.",
    image: img4,
  },
  {
    title: "Marvel Project",
    description:
      "I built a functional page using React hooks and the Marvel API, allowing users to interact with Marvel's data in a dynamic and responsive way.",
    image: img5,
  },
  {
    title: "SemVideo",
    description:
      "I created an admin dashboard where users can upload videos and manage various other features, providing an intuitive interface for content management.",
    image: img6,
  },
  {
    title: "Halal Finance",
    description:
      "Using Sima login, users can access the page, which is divided into two roles: one for borrowing money and the other for lending, with an admin panel to confirm transactions.",
    image: img7,
  },
  {
    title: "Portfolio",
    description:
      "I created my portfolio site using Next.js, with the styling implemented through CSS Modules for a modular and scalable design.",
    image: img8,
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true, // Enables swipe functionality with mouse (for desktop)
  });

  return (
    <div {...handlers} className={styles.sliderContainer}>
      <button
        className={`${styles.navigationButton} ${styles.prev}`}
        onClick={prevSlide}
      >
        <IoIosArrowBack color="white" size={18} />
      </button>

      <div className={styles.sliderWrapper}>
        {slides.map((slide, index) => {
          const position =
            index === currentIndex
              ? styles.center
              : index === (currentIndex - 1 + slides.length) % slides.length
              ? styles.left
              : index === (currentIndex + 1) % slides.length
              ? styles.right
              : styles.hidden;

          return (
            <div className={`${styles.slide} ${position}`} key={index}>
              <div className={styles.slideTop}>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className={styles.slideImage}
                />
              </div>
              <div className={styles.slideContent}>
                <h2 className={styles.slideTitle}>{slide.title}</h2>
                <p className={styles.slideDescription}>{slide.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className={`${styles.navigationButton} ${styles.next}`}
        onClick={nextSlide}
      >
        <IoIosArrowForward color="white" size={18} />
      </button>
    </div>
  );
}
