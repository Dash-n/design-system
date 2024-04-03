import type { Story } from "@ladle/react";
import styles from "./Button.module.css";
import { toTitlecase } from "../../../Utils/toTitleCase";

type Props = {
  label: string;
  disabled?: boolean;
  variant: string;
  onClick: () => void;
  customStyles?: any;
};

export const Button: Story<Props> = ({
  label,
  variant,
  disabled,
  onClick,
  customStyles,
}) => (
  <button
    className={`${styles[variant]} ${styles.button}`}
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
