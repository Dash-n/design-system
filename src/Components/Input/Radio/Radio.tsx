import type { Story } from "@ladle/react";
import styles from "./Radio.module.css";

type Props = {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
<<<<<<< HEAD
  setChecked: (e: string) => void;
=======
  setChecked: (value: string) => void;
>>>>>>> main
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
<<<<<<< HEAD
      // checked={checked}
      value={value}
      disabled={disabled}
      onChange={(e) => {
        setChecked(e.target.value);
        console.log(e);
=======
      value={value}
      disabled={disabled}
      onChange={() => {
        setChecked(value);
>>>>>>> main
      }}
    />
    <div className={styles.inputLabel}>{label}</div>

    <span className={styles.checkmark}></span>
  </label>
);

Radio.defaultProps = {
  name: "",
};
