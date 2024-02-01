import type { Story } from "@ladle/react";
import styles from "./Slider.module.css";
import { useRef, useState, useEffect } from "react";

type Props = {
  // id: string;
  // name: string;
  value: number;
  disabled?: boolean;
  min: number;
  max: number;
  step: number;
  setValue: (e: number) => void;
};

// const value = useRef(0)
// const [value, setValue] = useState("");
export const Slider: Story<Props> = ({ max, min, step, value, setValue }) => {
  const ref = useRef(null);

  const divStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: "#3498db",
    position: "relative",
    transform: `translateX(${value}px)`,
    transition: "transform 0.2s ease-in-out",
    marginBottom: "20px", // Add margin to create space for the tooltip
  };

  const tooltipStyle = {
    position: "absolute",
    top: "-50px",
    marginLeft: `calc(${(98 / max) * value}% + 1% - 6px - ${2 * value}px)`,
    // padding: "0 12px",
    height: "24px",
    width: "24px", // Set width to 'auto' to adjust based on content
    borderRadius: "16px 16px 0 16px",
    transform: "rotate(45deg)",

    textAlign: "center",
    backgroundColor: "#4f84f7",
    color: "#fff",
    padding: "5px",
    // borderRadius: "5px",
    display: "inline-block",
  };

  return (
    <div>
      <div className={styles.slidecontainer}>
        <div className="labelLeft">{min}</div>
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            padding: "0",
            // border: "2px green solid",
          }}
        >
          <input
            className={styles.slider}
            ref={ref}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            list="tickmarks"
            onChange={(e) => {
              setValue(e.target.value);
              // ref.current.left = value;
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: "0 4px",
              position: "relative",
            }}
          >
            <div style={tooltipStyle}>
              <div className={styles.tooltipText}>{value}</div>
            </div>
            {Array.from({ length: (max - min) / step + 1 }, (_, index) => (
              <span
                style={{
                  height: "16px",
                  width: "16px",
                  borderRadius: "50%",
                  background: "#4f84f7",
                  userSelect: "none",
                  zIndex: -1,
                }}
              />
            ))}
          </div>
        </div>
        <div className="labelRight">{max}</div>
      </div>
    </div>
  );
};

Slider.defaultProps = {};
