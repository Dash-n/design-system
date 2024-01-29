import type { Story } from "@ladle/react";
import { Slider } from "../../../Components/Input/Slider/Slider.tsx";

type Props = {
  options: string;
};

export const Sliders: Story<Props> = ({}) => (
  <div>
    <Slider value="3" min={0} max={5} step={1} name="test" />
  </div>
);
