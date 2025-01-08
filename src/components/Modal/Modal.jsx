import React, { useState } from "react";
import styles from "../../assets/styles/modal/modal.module.css";

//Icons
import { IoClose } from "react-icons/io5";

export default function Modal({ showModal, setShowModal, isSuccess }) {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <>
          <div className={styles.overlay}></div>
          <div className={`${styles.modal} ${!showModal ? styles['modal-closing'] : ''}`}>
            <div className={styles.head}>
              <IoClose
                className={styles.icon}
                size={32}
                onClick={closeModal}
              />
            </div>
            <div className={styles.body}>
              <h1 className={styles.title}>
                {isSuccess ? "Successfully Sent!" : "Error Sending Message!"}
              </h1>
              <p className={styles.text}>
                {isSuccess
                  ? "Your message has been sent successfully. We will contact you as soon as possible. Please be patient."
                  : "Unfortunately, your message could not be sent. Please try again later or contact our support."}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
