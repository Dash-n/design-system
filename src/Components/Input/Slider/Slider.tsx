import type { Story } from "@ladle/react";
import styles from "./Slider.module.css";

type Props = {
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  min: number;
  max: number;
  step: number;
};

export const Slider: Story<Props> = ({
  disabled,
  name,
  value,
  min,
  max,
  step,
}) => (
  <div className={styles.container}>
    <div className={styles.inputLabel}>{min}</div>
    <input
      type="range"
      list="markers"
      min={min}
      max={max}
      step={step}
      name={name}
      value={value}
    />
    <div className={styles.inputLabel}>{max}</div>

    <datalist id="markers">
      {Array.from({ length: (max - min) / step + 1 }, (_, index) => (
        <option key={index} value={min + index * step} />
      ))}
    </datalist>
  </div>
);

Slider.defaultProps = {
  name: "",
  // value: "50",
};
