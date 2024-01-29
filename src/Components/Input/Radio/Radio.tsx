import type { Story } from "@ladle/react";
import styles from "./Radio.module.css";

type Props = {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
};

export const Radio: Story<Props> = ({
  label,
  checked,
  disabled,
  name,
  value,
}) => (
  <label className={styles.container}>
    <input
      type="radio"
      name={name}
      checked={checked}
      value={value}
      disabled={disabled}
    />
    <div className={styles.inputLabel}>{label}</div>
    <span className={styles.checkmark}></span>
  </label>
);

Radio.defaultProps = {
  name: "",
};
