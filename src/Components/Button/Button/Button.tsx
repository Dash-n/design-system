import type { Story } from "@ladle/react";
import styles from "./Button.module.css";
import { getVariant, capitalize } from "../../index.ts";

type Props = {
  label: string;
  disabled?: boolean;
  variant: string;
};

export const Button: Story<Props> = ({ label, variant, disabled}) => (
  <button
    className={`${getVariant(styles, variant)} ${styles.button}`}
    disabled={disabled}
  >
    {capitalize(label)}
  </button>
);

Button.defaultProps = {
  variant: "",
  label: "",
};
