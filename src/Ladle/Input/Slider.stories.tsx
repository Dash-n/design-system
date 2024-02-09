import type { Story } from "@ladle/react";
import { Slider } from "../../Components/Input/Slider/Slider.tsx";
import { useState } from "react";

type Props = {
  options: string;
};

export const Sliders: Story<Props> = ({}) => {
  const [value, setValue] = useState(20);

  return (
    <div>
      <Slider
        id="abc"
        name="234"
        min={0}
        max={100}
        step={10}
        value={value}
        setValue={setValue}
      />
      Value is: {value}
    </div>
  );
};
