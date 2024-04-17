import type { Story } from "@ladle/react";
import styles from "./OutlineButton.module.css";
import { toTitlecase } from "../../../Utils/toTitleCase.ts";

type Props = {
  label: string;
  disabled?: boolean;
  variant?: string;
  onClick: () => void;
  customStyles?: any;
  customClass?: string;
};

export const OutlineButton: Story<Props> = ({
  label,
  variant = "primary",
  disabled,
  onClick,
  customStyles,
  customClass,
}) => {
  return (
    <button
      className={`${styles[variant]} ${styles.button} ${customClass}`}
      disabled={disabled}
      onClick={onClick}
      style={customStyles}
    >
      {toTitlecase(label)}
    </button>
  );
};
