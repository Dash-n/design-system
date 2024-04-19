import type { Story } from "@ladle/react";
import styles from "./Button.module.css";
import { toTitlecase } from "../../../Utils/toTitleCase.ts";

type Props = {
  label: string;
  disabled?: boolean;
  variant: string;
  onClick: (e) => void;
};

export const Button: Story<Props> = ({
  label,
  variant = "primary",
  disabled,
  onClick,
}) => (
  <button
    className={`${styles[variant]} ${styles.button}`}
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
