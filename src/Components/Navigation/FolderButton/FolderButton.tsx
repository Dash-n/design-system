import type { Story } from "@ladle/react";
import styles from "./FolderButton.module.css";
import { toTitlecase } from "../../index.ts";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { IconContext } from "react-icons";

type Props = {
  label?: string;
  link: string;
  disabled?: boolean;
  color?: string[];
  icon?: string;
  size?: string;
  state?: string;
};

export const FolderButton: Story<Props> = ({ label, disabled, link }) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <a href={link} className={styles.a}>
        <p style={{ width: "100%", textWrap: "wrap" }}>
          {toTitlecase(label ?? "")}
        </p>
      </a>
      <div className={styles.buttonContainer}>
        <IconContext.Provider value={{ size: "18px" }}>
          <button className={`${styles.iconButton} ${styles.warning}`}>
            <MdDeleteForever />
          </button>
          <button className={`${styles.iconButton} ${styles.primary}`}>
            <MdEdit />
          </button>
        </IconContext.Provider>
      </div>
    </div>
  </div>
);
