import type { Story } from "@ladle/react";
import styles from "./Button.module.css";
import { toTitlecase } from "../../../Utils/toTitleCase";

type Props = {
  label: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  variant?: string;
  onClick?: () => void;
  customClass?: string;
};

export const Button: Story<Props> = ({
  label,
  id,
  name,
  variant = "primary",
  disabled,
  onClick,
  customClass,
}) => (
  <button
    id={id}
    name={name}
    className={`${styles[variant]} ${styles.button} ${customClass}`}
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
