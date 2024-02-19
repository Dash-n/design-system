import type { Story } from "@ladle/react";
import styles from "./TextInput.module.css";

type Props = {
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  size?: number;
};

export const TextInput: Story<Props> = ({
  id,
  label,
  name,
  placeholder,
  disabled,
  maxLength,
  size,
}) => (
  <div className={styles.inputBox}>
    <input
      className={styles.input}
      id={id}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      maxLength={maxLength}
      size={size}
    />
    <label htmlFor={id} className={styles.label}>
      {label}
    </label>
  </div>
);

TextInput.defaultProps = {
  placeholder: " ",
};
