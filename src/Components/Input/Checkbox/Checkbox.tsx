import type { Story } from "@ladle/react";
import styles from "./Checkbox.module.css";

// if no label or value set, defaults to label
type Props = {
  id: string;
  name: string;
  value?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  setChecked: (e: boolean) => void;
};

export const Checkbox: Story<Props> = ({
  id,
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
      id={id}
      name={name}
      value={value ?? label}
      checked={checked}
      disabled={disabled}
      onChange={() => {
        setChecked(!checked);
      }}
    />
    <div className={styles.inputLabel}>{label ?? id}</div>
    <span className={styles.checkmark}></span>
  </label>
);

Checkbox.defaultProps = {
  name: "",
};
