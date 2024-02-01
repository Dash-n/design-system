import type { Story } from "@ladle/react";
import { Slider } from "../../../Components/Input/Slider/Slider.tsx";
import { useState, useEffect } from "react";

type Props = {
  options: string;
};

export const Sliders: Story<Props> = ({}) => {
  const [value, setValue] = useState(5);
  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  // const [leftpos, setLeftpos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setValue(3);
  }, []);
  return (
    <div>
      <Slider min={0} max={100} step={1} value={value} setValue={setValue} />
    </div>
  );
};
