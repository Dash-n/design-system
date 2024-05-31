import type { Story } from "@ladle/react";
import { Toggle } from "../../Components/Toggle/ToggleSwitch/Toggle.tsx";
import { PageToggle } from "../../Components/Toggle/PageToggle/PageToggle.tsx";
import { useState, useEffect } from "react";
import { MdFormatListBulleted, MdGridView } from "react-icons/md";
type Props = {
  options: string;
};

export const Toggles: Story<Props> = ({}) => {
  const [value, setValue] = useState("one");

  const handleChange = (value: string) => {
    setValue(value);
  };

  useEffect(() => {
    setValue(value);
  }, []);

  const view = [<MdFormatListBulleted />, <MdGridView />];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Toggle name="one" values={["1", "2"]} setChecked={handleChange} />
      <Toggle
        name="two"
        values={["list", "grid"]}
        labels={view}
        setChecked={handleChange}
      />
      <Toggle
        name="three"
        values={["Day", "Month", "Year"]}
        setChecked={handleChange}
        defaultValue="Month"
      />
      <Toggle
        name="month"
        values={["one", "two", "three", "four", "five"]}
        labels={["January", "February", "March", "April", <MdGridView />]}
        setChecked={handleChange}
        defaultValue="two"
        iconSize={"24px"}
      />
      {value}
    </div>
  );
};

export const PageToggles: Story<Props> = ({}) => {
  const [value, setValue] = useState("one");

  const handleChange = (value: string) => {
    setValue(value);
  };

  const view = [<MdFormatListBulleted />, <MdGridView />];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <PageToggle
        name="two"
        values={["Page 1", "Page 2"]}
        setChecked={handleChange}
      />

      {value}
    </div>
  );
};
