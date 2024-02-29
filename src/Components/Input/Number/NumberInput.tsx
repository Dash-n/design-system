import type { Story } from "@ladle/react";
import styles from "./NumberInput.module.css";
import { useEffect, useRef } from "react";

type Props = {
  id: string;
  label?: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  size?: number;
  setText?: () => void;
  updateValue?: (value: any) => void;
};

export const NumberInput: Story<Props> = ({
  id,
  label,
  name,
  placeholder,
  disabled,
  min,
  max,
  size,
  setText,
  updateValue,
}) => {
  return (
    <div className={styles.inputBox}>
      <input
        type="number"
        className={styles.input}
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        min={min}
        max={max}
        size={size}
        onChange={setText}
        onKeyUp={updateValue}
      />
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
};
