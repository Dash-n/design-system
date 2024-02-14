import type { Story } from "@ladle/react";
import { TwoWayToggle } from "../../Components/Toggle/TwoWay/TwoWayToggle.tsx";
import { ThreeWayToggle } from "../../Components/Toggle/ThreeWay/ThreeWayToggle.tsx";
import { useState } from "react";

type Props = {
  options: string;
};

export const TwoWayToggles: Story<Props> = ({}) => {
  const [value, setValue] = useState("left");

  const handleChange = (e) => {
    setValue(e);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <TwoWayToggle name="one" setChecked={handleChange}></TwoWayToggle>
      <TwoWayToggle
        name="two"
        values={["one", "two", "three"]}
        labels={["One", "Two", "Three"]}
        setChecked={handleChange}
      ></TwoWayToggle>
      {value}
    </div>
  );
};

export const ThreeWayToggles: Story<Props> = ({}) => {
  const [value, setValue] = useState("one");

  const handleChange = (e) => {
    setValue(e);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <ThreeWayToggle name="one" setChecked={handleChange}></ThreeWayToggle>
      <ThreeWayToggle
        name="two"
        values={["one", "two", "three"]}
        labels={["One", "Two", "Three"]}
        setChecked={handleChange}
      ></ThreeWayToggle>
      {value}
    </div>
  );
};
