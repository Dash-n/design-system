import type { Story } from "@ladle/react";
import styles from "./PageToggle.module.css";
import { IconContext } from "react-icons";

type Props = {
  name: string;
  values: string[];
  labels?: any[];
  iconSize?: string;
  setChecked: (value: string) => void;
};

export const PageToggle: Story<Props> = ({
  values,
  labels,
  name,
  setChecked,
  iconSize = "24px",
}) => {
  return (
    <div className={styles.container}>
      {values?.map((values, index) => (
        <label className={styles.switch}>
          <input
            type="radio"
            name={name}
            value={values}
            onChange={(e) => {
              setChecked(e.target.value);
            }}
          />

          <IconContext.Provider value={{ size: `${iconSize}` }}>
            <span className={`${styles.checkmark} ${styles.left}`}>
              {labels ? labels[index] : values}
            </span>
          </IconContext.Provider>
        </label>
      ))}
    </div>
  );
};
