import React, { useState } from "react";
import styles from "../../assets/styles/slider/slider.module.css";

//Images
import image from "../../assets/images/cane-river-responsive.webp";

//Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const slides = [
  {
    title: "Guardians Of The Galaxy",
    description:
      "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    image: image,
  },
  {
    title: "Eternals",
    description:
      "7,000 BC, ten superpowered Eternals must protect humanity from the Deviants.",
    image: image,
  },
  {
    title: "Justice League",
    description:
      "Bruce Wayne assembles a team of superheroes to save Earth from an apocalyptic threat.",
    image: image,
  },
  {
    title: "Avengers: Endgame",
    description:
      "The remaining Avengers assemble one final stand against Thanos to save the universe.",
    image: image,
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
