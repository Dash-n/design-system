import type { Story } from "@ladle/react";
import { Slider } from "../../../Components/Input/Slider/Slider.tsx";
import { useState, useEffect } from "react";

type Props = {
  options: string;
};

export const Sliders: Story<Props> = ({}) => {
  const [value, setValue] = useState("5");

  useEffect(() => {
    setValue("3");
  }, []);
  return (
    <div>
      {value}
      <Slider min={0} max={10} step={1} value={value} setValue={setValue} />
    </div>
  );
};
