import type { Story } from "@ladle/react";
import styles from "./TextInput.module.css";
import { ChangeEventHandler, useState } from "react";

type Props = {
  id: string;
  label?: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  size?: number;
  inputValue: string;
  setInputValue: (e) => void;
};

export const TextInput: Story<Props> = ({
  id,
  label,
  name,
  placeholder,
  disabled,
  maxLength,
  size,
  inputValue,
  setInputValue,
}) => {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
  };
  return (
    <div className={styles.inputBox}>
      <input
        className={styles.input}
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        size={size}
        value={inputValue}
        onChange={handleInputChange}
      />
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
};

TextInput.args = {
  label: "Label",
  placeholder: "Placeholder",
};
