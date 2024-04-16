import type { Story } from "@ladle/react";
import styles from "./OutlineButton.module.css";
import { toTitlecase } from "../../../Utils/toTitleCase.ts";

type Props = {
  label: string;
  disabled?: boolean;
  variant: string;
  customStyles?: string;
  onClick: () => void;
};

export const OutlineButton: Story<Props> = ({
  label,
  variant,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={`${styles[variant]} ${styles.button} ${styles.customClass}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
