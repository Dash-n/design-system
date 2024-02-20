import type { Story } from "@ladle/react";
import styles from "./Slider.module.css";
import ReactSlider from "react-slider";

type Props = {
  id: string;
  name: string;
  disabled?: boolean;
  min: number;
  max: number;
  step: number;
  value: number;
  setValue: (value: number) => void;
};

export const Slider: Story<Props> = ({ max, min, step, value, setValue }) => {
  return (
    <div>
      <ReactSlider
        className={styles.horizontalSlider}
        marks={step}
        markClassName={styles.mark}
        min={min}
        max={max}
        step={step}
        thumbClassName={styles.thumb}
        trackClassName={styles.track}
        value={value}
        onChange={(value) => setValue(value)}
        renderThumb={(props, state) => (
          <div {...props}>
            <div className={styles.toolTip}>
              <div style={{ transform: "rotate(45deg)" }}>{state.valueNow}</div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

Slider.defaultProps = {};
