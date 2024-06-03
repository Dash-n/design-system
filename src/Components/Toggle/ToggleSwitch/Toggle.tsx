import type { Story } from "@ladle/react";
import styles from "./Toggle.module.css";
import { IconContext } from "react-icons";
import { useState, useEffect, ChangeEventHandler } from "react";

type Props = {
  name: string;
  values: string[];
  defaultValue: string;
  labels?: any[];
  iconSize?: string;
  setChecked: (value: string) => void;
  customClass?: string;
};

export const Toggle: Story<Props> = ({
  values,
  defaultValue,
  labels,
  name,
  setChecked,
  iconSize = "24px",
  customClass,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelectedOption(event.target.value);
    setChecked(event.target.value);
  };

  useEffect(() => {
    if (defaultValue == undefined) {
      setSelectedOption(values[0]);
    } else setSelectedOption(defaultValue);
  }, []);

  return (
    <div className={styles.container}>
      {values?.map((value, index) => (
        <label className={`${styles.switch} ${customClass}`} key={index}>
          <input
            id={value}
            type="radio"
            name={name}
            value={value}
            onChange={(e) => {
              handleChange(e);
            }}
            checked={selectedOption === value}
          />

          <IconContext.Provider value={{ size: `${iconSize}` }}>
            <span className={`${styles.checkmark}`}>
              {labels ? labels[index] : value}
            </span>
          </IconContext.Provider>
        </label>
      ))}
    </div>
  );
};
