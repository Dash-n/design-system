import type { Story } from "@ladle/react";
import styles from "./Radio.module.css";

type Props = {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  setChecked: (value: string) => void;
};

export const Radio: Story<Props> = ({
  label,
  disabled,
  name,
  value,
  setChecked,
  checked,
}) => (
  <label className={styles.container}>
    <input
      type="radio"
      name={name}
      value={value}
      disabled={disabled}
      onChange={(e) => {
        setChecked(e.target.value);
      }}
      // checked={checked}
    />
    <div className={styles.inputLabel}>{label}</div>

    <span className={styles.checkmark}></span>
  </label>
);

Radio.defaultProps = {
  name: "",
};
