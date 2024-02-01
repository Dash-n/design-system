import type { Story } from "@ladle/react";
import styles from "./Slider.module.css";
import ReactSlider from "react-slider";

type Props = {
  // id: string;
  // name: string;
  disabled?: boolean;
  min: number;
  max: number;
  step: number;
  value: number;
  setValue: (e: number) => void;
};

// const value = useRef(0)
// const [value, setValue] = useState("");
export const Slider: Story<Props> = ({ max, min, step, value, setValue }) => {
  const toolTip = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",

    width: "var(--tooltipWidth)",
    height: "var(--tooltipWidth)",
    borderRadius: "50% 50% 50% 0",
    transform: "translateY(calc(var(--tooltipWidth) * -1.25)) rotate(-45deg)",
    background: "#4F84F7",
    color: "white",
    content: "",
  };

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
        onChange={(value, index) => setValue(value)}
        renderThumb={(props, state) => (
          <div {...props}>
            <div style={toolTip}>
              <div style={{ transform: "rotate(45deg)" }}>{state.valueNow}</div>
            </div>
          </div>
        )}
      />
      {/* <div>{value}</div> */}
    </div>
  );
};

Slider.defaultProps = {};
