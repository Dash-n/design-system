import type { Story } from "@ladle/react";
import styles from "./TextInput.module.css";
import { ChangeEventHandler, useState, useRef } from "react";

type Props = {
  id: string;
  label?: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  size?: number;
  inputValue?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  required?: boolean;
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
  defaultValue,
  onChange,
  required,
}) => {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.currentTarget.value);
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
        defaultValue={defaultValue}
        value={inputValue}
        onChange={handleInputChange}
        required={required}
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
