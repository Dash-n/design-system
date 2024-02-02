import type { Story } from "@ladle/react";
import styles from "./ThreeWayToggle.module.css";
import { useState } from "react";

type Props = {
  name: string;
  value: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  setChecked?: (e: boolean) => void;
};

export const ThreeWayToggle: Story<Props> = ({
  label,
  checked,
  disabled,
  name,
  // value
  // setChecked,
}) => {
  const [value, setValue] = useState("left");

  const handleLeftChange = () => {
    setValue("left");
    console.log(value);
  };
  const handleMiddleChange = () => {
    setValue("middle");
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
          onChange={
            handleLeftChange
            // console.log(checked);
          }
        />
        <span className={`${styles.checkmark} ${styles.left}`}>L</span>
      </label>
      <label className={styles.switch}>
        <input
          type="radio"
          id="2"
          name={name}
          checked={value === "middle"}
          value="2"
          disabled={disabled}
          onChange={
            handleMiddleChange
            // console.log(checked);
          }
        />
        <span className={`${styles.checkmark} ${styles.middle}`}>M</span>
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
        {/* <div className={styles.inputLabel}>{label}</div> */}

        <span className={`${styles.checkmark} ${styles.right}`}>R</span>
      </label>
      <div>{value}</div>
    </div>
  );
};
