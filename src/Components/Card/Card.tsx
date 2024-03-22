import type { Story } from "@ladle/react";
import styles from "./Toast.module.css";
import { toTitlecase } from "../../../Utils/index.ts";

type Props = {
  label: string;
  disabled?: boolean;
  content: string;
};

export const Toast: Story<Props> = ({ content }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.contentContainer}></div>
    </div>
  );
};
