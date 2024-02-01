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
  let sliderWidth = 0;

  useEffect(() => {
    sliderWidth = ref.current.offsetWidth;

    // tooltipStyle.left = `calc(${(sliderWidth / max) * value}%)`;
    console.log(sliderWidth);
  }, [ref.current]);

  const divStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: "#3498db",
    position: "relative",
    transform: `translateX(${value}px)`,
    transition: "transform 0.2s ease-in-out",
    marginBottom: "20px", // Add margin to create space for the tooltip
  };

  const slide = {};

  // const slidecontainer = {
  //   display: "flex",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   width: "100%", /* Width of the outside container */
  //   position: "relative",
  //   border: "1px solid red"
  // }

  const tooltipStyle = {
    position: "absolute",
    top: "-50px",
    left: `calc(${(100 / max) * value}%)`,
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

  // useEffect(() => {
  //   const element = ref.current;
  //   console.log(element);
  // }, []);

  // function handleClick() {
  //   ref.current.focus();
  // }

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
          }}
        >
          <div style={tooltipStyle}>
            <div className={styles.tooltipText}>{value}</div>
          </div>
          <input
            className={styles.slider}
            ref={ref}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              // ref.current.left = value;
            }}
          />
        </div>
        <div className="labelRight">{max}</div>
        {/* <button onClick={handleClick}></button> */}
      </div>
    </div>
  );
};

Slider.defaultProps = {};
