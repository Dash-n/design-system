import type { Story } from "@ladle/react";
import styles from "./Select.module.css";

type Props = {
  id: string;
  name: string;
  label?: string;
  disabled?: boolean;
  options: string[];
  values: string[];
  setAnswer: (answer: any) => void;
};

export const Select: Story<Props> = ({
  id,
  name,
  label,
  disabled,
  options,
  values,
  setAnswer,
}) => (
  <div className={styles.selectBox}>
    <select
      className={styles.select}
      id={id}
      name={name}
      disabled={disabled}
      onChange={setAnswer}
    >
      {options.map((option, index) => (
        <option value={values[index]}>{option}</option>
      ))}
      ;
    </select>
    {label && (
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    )}
  </div>
);
