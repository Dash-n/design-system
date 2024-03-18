import type { Story } from "@ladle/react";
import styles from "./SideHeader.module.css";
import { toTitlecase } from "../..";

type Props = {
  text: string;
};

export const SideHeader: Story<Props> = ({ text }: Props) => (
  <div className={styles.header}>{toTitlecase(text)}</div>
);
