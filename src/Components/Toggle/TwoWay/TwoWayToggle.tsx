import type { Story } from "@ladle/react";
import styles from "./TwoWayToggle.module.css";
import { useState } from "react";

type Props = {
  name: string;
  value: string;
  label?: string[];
  disabled?: boolean;
  // setValue: (e: string) => void;
};

export const TwoWayToggle: Story<Props> = ({
  label,
  disabled,
  name,
  // value,
  // setValue,
}) => {
  const [value, setValue] = useState("left");

  const handleLeftChange = () => {
    setValue("left");
    console.log(value);
  };
  const handleRightChange = () => {
    setValue("right");
    console.log(value);
  };

  return (
    <div className={styles.container}>
      <label className={styles.switch}>
        <input
          type="radio"
          id="1"
          name={name}
          checked={value === "left"}
          value="1"
          disabled={disabled}
          onChange={handleLeftChange}
        />
        <span className={`${styles.checkmark} ${styles.left}`}>{label[0]}</span>
      </label>

      <label className={styles.switch}>
        <input
          type="radio"
          name={name}
          id="3"
          checked={value === "right"}
          value="3"
          disabled={disabled}
          onChange={handleRightChange}
        />

        <span className={`${styles.checkmark} ${styles.right}`}>
          {label[1]}
        </span>
      </label>
    </div>
  );
};

TwoWayToggle.defaultProps = {
  label: ["L", "R"],
};
