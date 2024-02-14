import type { Story } from "@ladle/react";
import styles from "./TwoWayToggle.module.css";
import { useState } from "react";

type Props = {
  name: string;
  values?: string[];
  labels?: string[];
  setChecked: (e: string) => void;
};

export const TwoWayToggle: Story<Props> = ({
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
          // id={values[0]}
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
          // id={values[0]}
          name={name}
          value={values[1]}
          onChange={(e) => {
            setChecked(e.target.value);
          }}
        />
        <span className={`${styles.checkmark} ${styles.right}`}>
          {labels[1]}
        </span>
      </label>
    </div>
  );
};

TwoWayToggle.defaultProps = {
  labels: ["L", "R"],
  values: ["0", "1"],
};
