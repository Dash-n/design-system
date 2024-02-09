import type { Story } from "@ladle/react";
import styles from "./Button.module.css";
import { toTitlecase } from "../../index.ts";

type Props = {
  label: string;
  disabled?: boolean;
  variant: string;
};

export const Button: Story<Props> = ({ label, variant, disabled }) => (
  <button className={`${styles[variant]} ${styles.button}`} disabled={disabled}>
    {toTitlecase(label)}
  </button>
);

Button.defaultProps = {
  variant: "",
  label: "",
};