import type { Story } from "@ladle/react";
import styles from "./Slider.module.css";
import { useRef, useState } from "react";

type Props = {
  // id: string;
  // name: string;
  value: string;
  disabled?: boolean;
  min: number;
  max: number;
  step: number;
  setValue: (e: string) => void;
};

// const value = useRef(0)
// const [value, setValue] = useState("");
export const Slider: Story<Props> = ({ max, min, step, value, setValue }) => {
  return (
    <div className={styles.container}>
      <div className="labelLeft">{min}</div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div className="labelRight">{max}</div>
    </div>
  );
};

Slider.defaultProps = {};
