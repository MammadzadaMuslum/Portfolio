import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../assets/styles/contact/contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import emailjs from "emailjs-com";
//Image
import contactImage from "../assets/images/Image 2.png";
import Modal from "../components/Modal/Modal";

export default function Contact() {
  // form data
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    message: "",
  });

  // error messages
  const [errors, setErrors] = useState({
    name: false,
    surname: false,
    phone: false,
    email: false,
    message: false,
  });

  // State for modal visibility
  const [showModal, setShowModal] = useState(false);

  //false & true
  const [isSuccess, setIsSuccess] = useState(false);

  // Input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Phone validation - allow only numbers
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));
  };

  // Email validation - allow only gmail.com emails
  const isValidEmail = (email) => {
    return email.endsWith("@gmail.com");
  };

  // Validation for the form
  const validateForm = () => {
    const newErrors = {
      name: !formData.name,
      surname: !formData.surname,
      phone: !formData.phone || formData.phone.length < 10,
      email: !formData.email || !isValidEmail(formData.email),
      message: !formData.message,
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await emailjs.send(
        "service_0tg5x3n",
        "template_0xej3fa",
        formData,
        "jJgWZmpAxTeQdlRqy"
      );
      setIsSuccess(true);
      setShowModal(true);
      setFormData({ name: "", surname: "", email: "", phone: "", message: "" });
    } catch (error) {
      setIsSuccess(false);
      setShowModal(true);
      setFormData({ name: "", surname: "", email: "", phone: "", message: "" });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contact}>
            <div className={styles.left} data-aos="fade-right">
              <h2 className={styles.contactTitle}>Contact Info</h2>
              <div className={styles.contactBottom}>
                <div className={styles.imageContainer}>
                  <Image
                    alt="image"
                    className={styles.image}
                    src={contactImage}
                  />
                </div>
                <div className={styles.contactInfo}>
                  <ul className={styles.contactList}>
                    <li className={styles.contactItem}>
                      <h4 className={styles.text}>Gmail:</h4>
                      <Link
                        className={styles.link}
                        href="mailto:muslummemmedzadee@gmail.com"
                        target="_blank"
                      >
                        muslummemmedzadee@gmail.com
                      </Link>
                    </li>
                    <li className={styles.contactItem}>
                      <h4 className={styles.text}>WhatsApp:</h4>
                      <Link className={styles.link} href="" target="_blank">
                        Contact us on WhatsApp
                      </Link>
                    </li>
                    <li className={styles.contactItem}>
                      <h4 className={styles.text}>Phone:</h4>
                      <Link
                        target="_blank"
                        className={styles.link}
                        href="tel:+994559343006"
                      >
                        +994 055 934 30 06
                      </Link>
                    </li>
                    <li className={styles.contactItem}>
                      <h4 className={styles.text}>Linkedin:</h4>
                      <Link
                        target="_blank"
                        className={styles.link}
                        href="https://www.linkedin.com/in/muslum-memmedzade-5715242b4/"
                      >
                        https://www.linkedin.com/in/muslum-memmedzade-5715242b4/
                      </Link>
                    </li>
                    <li className={styles.contactItem}>
                      <h4 className={styles.text}>Github:</h4>
                      <Link
                        target="_blank"
                        className={styles.link}
                        href="https://github.com/MammadzadaMuslum"
                      >
                        https://github.com/MammadzadaMuslum
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.right} data-aos="fade-left">
              <h1 className={styles.title}>Contact Us</h1>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                  <label
                    className={
                      formData.name ? styles.activeLabel : styles.label
                    }
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    className={`${styles.contactInput} ${
                      errors.name ? styles.error : ""
                    }`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label
                    className={
                      formData.surname ? styles.activeLabel : styles.label
                    }
                  >
                    Surname
                  </label>
                  <input
                    name="surname"
                    className={`${styles.contactInput} ${
                      errors.surname ? styles.error : ""
                    }`}
                    value={formData.surname}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label
                    className={
                      formData.email ? styles.activeLabel : styles.label
                    }
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className={`${styles.contactInput} ${
                      errors.email ? styles.error : ""
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label
                    className={
                      formData.phone ? styles.activeLabel : styles.label
                    }
                  >
                    Phone
                  </label>
                  <input
                    name="phone"
                    className={`${styles.contactInput} ${
                      errors.phone ? styles.error : ""
                    }`}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label
                    className={
                      formData.message
                        ? styles.activeTextareaLabel
                        : styles.textLabel
                    }
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    className={`${styles.contactTextArea} ${
                      errors.message ? styles.error : ""
                    }`}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className={styles.btn}>
                  Send your Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Modal
        isSuccess={isSuccess}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}
