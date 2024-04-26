"use client";
import { useState } from "react";
import { ModalPolicy } from "./modal-policy";
import styles from "./components.module.css";

export const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const openModalPolityka = () => {
    setShowModal(true);
    setModalType("polityka-prywatnosci");
  };
  const openModalRegulamin = () => {
    setShowModal(true);
    setModalType("regulamin");
  }
  const closeModal = () => setShowModal(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container__left}>
          <div className={styles.footer__container__left__logo}></div>
          <div className={styles.footer__container__left__text}>
            <p style={{ fontSize: "0.6rem" }}>
              <button className={styles.modal__button} onClick={openModalPolityka}>
                Polityka prywatności
              </button>{" "}
              
              <ModalPolicy
                show={showModal}
                onClose={closeModal}
                type={modalType}
              />
            </p>
          </div>
        </div>
        <div className={styles.footer__container__right}>
          <div className={styles.footer__container__right__text}>
            <p
              style={{
                fontSize: "0.5rem",
                textAlign: "center",
                color: "#494a49",
                marginTop: "2vh",
              }}
            >
              Created by:{" "}
              <a href="https://www.linkedin.com/in/stachowiczk/">
                Karol Stachowicz
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
