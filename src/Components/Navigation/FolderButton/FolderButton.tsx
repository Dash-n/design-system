import type { Story } from "@ladle/react";
import styles from "./FolderButton.module.css";
import { toTitlecase } from "../../index.ts";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { IconContext } from "react-icons";

type Props = {
  label?: string;
  link: string;
  editCallback: () => void;
  deleteCallback: () => void;
};

export const FolderButton: Story<Props> = ({
  label,
  link,
  editCallback,
  deleteCallback,
}: Props) => (
  <div className={styles.container}>
    <a href={link} className={styles.a}>
      <p style={{ width: "100%", textWrap: "wrap" }}>
        {toTitlecase(label ?? "")}
      </p>
    </a>
    <div className={styles.buttonContainer}>
      <IconContext.Provider value={{ size: "18px" }}>
        <button
          className={`${styles.iconButton} ${styles.warning}`}
          onClick={deleteCallback}
        >
          <MdDeleteForever />
        </button>
        <button
          className={`${styles.iconButton} ${styles.primary}`}
          onClick={editCallback}
        >
          <MdEdit />
        </button>
      </IconContext.Provider>
    </div>
    {/* </div> */}
  </div>
);
