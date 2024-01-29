import type { Story } from "@ladle/react";
import { Checkbox } from "../../../Components/Input/Checkbox/Checkbox.tsx";

type Props = {
  options: string;
};

export const Checkboxes: Story<Props> = ({}) => (
  <div>
    <Checkbox value="1" name="test" label="One"></Checkbox>
    <Checkbox value="2" name="test" label="Two"></Checkbox>
    <Checkbox value="3" name="test" label="Three" disabled></Checkbox>
  </div>
);
