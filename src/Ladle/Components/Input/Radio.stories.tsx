import type { Story } from "@ladle/react";
import { Radio } from "../../../Components/Input/Radio/Radio.tsx";

type Props = {
  options: string;
};

export const Radios: Story<Props> = ({}) => (
  <div>
    <Radio value="1" name="test" label="One"></Radio>
    <Radio value="2" name="test" label="Two"></Radio>
    <Radio value="3" name="test" label="Three" disabled></Radio>
    <Radio value="1" name="two" label="One"></Radio>
    <Radio value="2" name="two" label="Two" checked></Radio>
    <Radio value="3" name="two" label="Three" disabled></Radio>
  </div>
);
