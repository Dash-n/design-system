import type { Story } from "@ladle/react";
import styles from "./Modal.module.css";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
  modal: boolean;
  toggleModal: () => void;
};

export const Modal: Story<Props> = ({ modal, toggleModal, children }) => {
  return (
    <>
      {/* <button onClick={toggleModal}>Open Modal</button> */}
      {modal && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={toggleModal} />

          <div className={`${styles.modalContainer}`}>{children}</div>
        </div>
      )}
    </>
  );
};
