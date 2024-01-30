import type { Story } from "@ladle/react";
import styles from "./Radio.module.css";

type Props = {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  setChecked: (e: boolean) => void;
};

export const Radio: Story<Props> = ({
  label,
  checked,
  disabled,
  name,
  value,
  setChecked,
}) => (
  <label className={styles.container}>
    <input
      type="radio"
      name={name}
      // checked={checked}
      value={value}
      disabled={disabled}
      onChange={(e) => {
        setChecked(!checked);
        console.log(checked);
      }}
    />
    <div className={styles.inputLabel}>{label}</div>

    <span className={styles.checkmark}></span>
  </label>
);

Radio.defaultProps = {
  name: "",
};
