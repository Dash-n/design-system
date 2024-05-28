import type { Story } from "@ladle/react";
import styles from "./Radio.module.css";
import { useState, useEffect } from "react";

type Props = {
  name: string;
  values: string[];
  labels?: string[];
  checked?: boolean;
  disabled?: boolean;
  setChecked: (value: string) => void;
};

export const Radio: Story<Props> = ({
  labels,
  disabled,
  name,
  values,
  setChecked,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setChecked(event.target.value);
  };

  return (
    <div className={styles.container}>
      {values?.map((value, index) => (
        <label className={styles.container}>
          <input
            type="radio"
            name={name}
            value={value}
            disabled={disabled}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <div className={styles.inputLabel}>
            {labels ? labels[index] : value}
          </div>

          <span className={styles.checkmark}></span>
        </label>
      ))}
    </div>
  );

  Radio.defaultProps = {
    name: "",
  };
};
