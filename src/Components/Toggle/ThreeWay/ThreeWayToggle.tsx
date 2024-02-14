import type { Story } from "@ladle/react";
import styles from "./ThreeWayToggle.module.css";
import { useState } from "react";

type Props = {
  name: string;
  values?: string[];
  labels?: string[];
  setChecked: (e: string) => void;
};

export const ThreeWayToggle: Story<Props> = ({
  values,
  labels,
  name,
  setChecked,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.switch}>
        <input
          type="radio"
          name={name}
          value={values[0]}
          onChange={(e) => {
            setChecked(e.target.value);
          }}
        />
        <span className={`${styles.checkmark} ${styles.left}`}>
          {labels[0]}
        </span>
      </label>
      <label className={styles.switch}>
        <input
          type="radio"
          name={name}
          value={values[1]}
          onChange={(e) => {
            setChecked(e.target.value);
          }}
        />
        <span className={`${styles.checkmark} ${styles.middle}`}>
          {labels[1]}
        </span>
      </label>

      <label className={styles.switch}>
        <input
          type="radio"
          name={name}
          value={values[2]}
          onChange={(e) => {
            setChecked(e.target.value);
          }}
        />

        <span className={`${styles.checkmark} ${styles.right}`}>
          {labels[2]}
        </span>
      </label>
    </div>
  );
};
ThreeWayToggle.defaultProps = {
  labels: ["L", "M", "R"],
  values: ["0", "1", "2"],
};
