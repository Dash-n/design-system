import type { Story } from "@ladle/react";
import styles from "./Button.module.css";
import { toTitlecase } from "../../../Utils/toTitleCase";

type Props = {
  label: string;
  disabled?: boolean;
  variant?: string;
  onClick?: () => void;
  customStyles?: any;
  customClass?: string;
};

export const Button: Story<Props> = ({
  label,
  variant = "primary",
  disabled,
  onClick,
  customStyles,
  customClass,
}) => (
  <button
    className={`${styles[variant]} ${styles.button} ${customClass}`}
    style={customStyles}
    disabled={disabled}
    onClick={onClick}
  >
    {toTitlecase(label)}
  </button>
);

Button.defaultProps = {
  variant: "",
  label: "",
};
