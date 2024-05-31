import type { Story } from "@ladle/react";
import styles from "./OutlineButton.module.css";
import { ReactNode } from "react";
import { toTitlecase } from "../../../Utils/toTitleCase.ts";

type Props = {
  label: string | ReactNode;
  disabled?: boolean;
  variant?: string;
  onClick: () => void;
  customClass?: string;
};

export const OutlineButton: Story<Props> = ({
  label,
  variant = "primary",
  disabled,
  onClick,
  customClass,
}) => {
  return (
    <button
      className={`${styles[variant]} ${styles.button} ${customClass}`}
      disabled={disabled}
      onClick={onClick}
    >
      {typeof label === "string" ? toTitlecase(label as string) : label}
    </button>
  );
};
