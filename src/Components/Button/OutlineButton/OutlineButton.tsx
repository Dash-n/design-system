import type { Story } from "@ladle/react";
import styles from "./OutlineButton.module.css";
import { toTitlecase } from "../../index.ts";

type Props = {
  label: string;
  disabled?: boolean;
  variant: string;
};

export const OutlineButton: Story<Props> = ({ label, variant, disabled }) => {
  console.log(disabled);
  return (
    <button
      className={`${styles[variant]} ${styles.button}`}
      disabled={disabled}
    >
      {label}
      {/* {toTitlecase(label)} */}
    </button>
  );
};

OutlineButton.defaultProps = {
  variant: "",
};
