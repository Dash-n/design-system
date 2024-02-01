import type { Story } from "@ladle/react";
import { Slider } from "../../../Components/Input/Slider/Slider.tsx";
import { useState, useEffect } from "react";
import ReactSlider from "react-slider";

type Props = {
  options: string;
};

export const Sliders: Story<Props> = ({}) => {
  const [value, setValue] = useState(20);

  // const [leftpos, setLeftpos] = useState({ x: 0, y: 0 });

  return (
    <div>
      <Slider min={0} max={100} step={10} value={value} setValue={setValue} />
      Value is: {value}
    </div>
  );
};
