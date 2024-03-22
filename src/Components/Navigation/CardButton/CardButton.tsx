import type { Story } from "@ladle/react";
import styles from "./CardButton.module.css";
import { toTitlecase } from "../../../Utils/toTitleCase.ts";
import { MdFileCopy, MdDeleteForever, MdEdit } from "react-icons/md";
import { IconContext } from "react-icons";

type Props = {
  label?: string;
  link: string;
  editCallback: () => void;
  deleteCallback: () => void;
  duplicateCallback: () => void;
};

export const CardButton: Story<Props> = ({
  label,
  link,
  editCallback,
  deleteCallback,
  duplicateCallback,
}: Props) => {
  return (
    <div className={styles.container}>
      <a href={link} className={styles.a}>
        <p style={{ width: "100%", textWrap: "wrap" }}>
          {toTitlecase(label ?? "")}
        </p>
      </a>
      <div className={styles.buttonContainer}>
        <IconContext.Provider value={{ size: "18px" }}>
          <button
            className={`${styles.iconButton} ${styles.primary}`}
            onClick={duplicateCallback}
          >
            <MdFileCopy />
          </button>
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
    </div>
  );
};
