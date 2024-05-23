import type { Story } from "@ladle/react";
import styles from "./Select.module.css";

type selectOption = {
  option: string;
  value: string;
};
type Props = {
  id: string;
  name: string;
  label?: string;
  disabled?: boolean;
  options: selectOption[];
  style?: any;
  emptyOption?: string;
  setAnswer: (e) => void;
};

export const Select: Story<Props> = ({
  id,
  name,
  label,
  disabled,
  emptyOption = "None",
  options = [],
  style,
  setAnswer,
}) => (
  <div className={styles.selectBox}>
    <select
      className={styles.select}
      id={id}
      name={name}
      disabled={disabled}
      style={style}
      onChange={setAnswer}
    >
      <option value="">{emptyOption}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.option}
        </option>
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
