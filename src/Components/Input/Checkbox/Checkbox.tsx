import type { Story } from "@ladle/react";
import styles from "./Checkbox.module.css";

type Props = {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  setChecked: (e: boolean) => void;
};

export const Checkbox: Story<Props> = ({
  label,
  checked,
  disabled,
  name,
  value,
  setChecked,
}) => (
  <label className={styles.container}>
    <input
      type="checkbox"
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={(e) => {
        setChecked(!checked);
      }}
    />
    <div className={styles.inputLabel}>{label}</div>
    <span className={styles.checkmark}></span>
  </label>
);

Checkbox.defaultProps = {
  name: "",
};
