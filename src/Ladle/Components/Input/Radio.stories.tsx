import type { Story } from "@ladle/react";
import { Radio } from "../../../Components/Input/Radio/Radio.tsx";
import { useState } from "react";

type Props = {
  options: string;
};

export const Radios: Story<Props> = ({}) => {
  const [value, setValue] = useState("1");

  // is there a way to combine these into a general function?
  const handleChange = (e) => {
    // console.log(e);
    setValue(e);
  };

  return (
    <div>
      <Radio
        value="1"
        name="test"
        label={`One Selected: ${value === "1"}`}
        checked={value === "1"}
        setChecked={handleChange}
      ></Radio>
      <Radio
        value="2"
        name="test"
        label={`Two Selected: ${value === "2"}`}
        checked={value === "2"}
        setChecked={handleChange}
      ></Radio>
      <Radio
        value="3"
        name="test"
        label={`Three Selected: ${value === "3"}`}
        checked={value === "3"}
        setChecked={handleChange}
      ></Radio>
      <div>Value: {`${value}`}</div>
    </div>
  );
};
