import type { Story } from "@ladle/react";
import styles from "./OutlineButton.module.css";
import { getVariant,capitalize } from "../../index.ts";

type Props = {
  label: string;
  disabled?: boolean;
  variant: string;
};

export const OutlineButton: Story<Props> = ({ label, variant, disabled }) => {
  console.log(disabled);
  return (
    <button
      className={`${getVariant(styles, variant)} ${styles.button}`}
      disabled={disabled}
    >
      {capitalize(label)}
    </button>
  );
};

OutlineButton.defaultProps = {
  variant: "",
};
