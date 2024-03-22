import type { Story } from "@ladle/react";
import { Toggle } from "../../Components/Toggle/ToggleSwitch/Toggle.tsx";
import { useState } from "react";
import { MdFormatListBulleted, MdGridView } from "react-icons/md";
type Props = {
  options: string;
};

export const Toggles: Story<Props> = ({}) => {
  const [value, setValue] = useState("one");

  const handleChange = (value: string) => {
    setValue(value);
  };

  const view = [<MdFormatListBulleted />, <MdGridView />];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Toggle name="two" values={["1", "2"]} setChecked={handleChange}></Toggle>
      <Toggle
        name="two"
        values={["list", "grid"]}
        labels={view}
        setChecked={handleChange}
      ></Toggle>
      <Toggle
        name="three"
        values={["Day", "Month", "Year"]}
        setChecked={handleChange}
      ></Toggle>
      <Toggle
        name="mmonth"
        values={["one", "two", "three", "four", "five"]}
        labels={["January", "February", "March", "April", <MdGridView />]}
        setChecked={handleChange}
        iconSize={"24px"}
      ></Toggle>
      {value}
    </div>
  );
};
