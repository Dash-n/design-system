import type { Story } from "@ladle/react";
import styles from "./SideHeader.module.css";
import { toTitlecase } from "../../../Utils/toTitleCase";

type Props = {
  label: string;
};

export const SideHeader: Story<Props> = ({ label }: Props) => (
  <div className={styles.headerContainer}>
    <div className={styles.header}>{toTitlecase(label)}</div>
  </div>
);
