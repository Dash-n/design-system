import type { Story } from "@ladle/react";
import styles from "./OutlineButton.module.css";
<<<<<<< HEAD
import { toTitlecase } from "../../../Utils/toTitleCase.ts";
=======
import { toTitlecase } from "../../../Utils/index.ts";
>>>>>>> feature/modals

type Props = {
  label: string;
  disabled?: boolean;
  variant: string;
};

export const OutlineButton: Story<Props> = ({ label, variant, disabled }) => {
  return (
    <button
      className={`${styles[variant]} ${styles.button}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
