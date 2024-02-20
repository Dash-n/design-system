import type { Story } from "@ladle/react";
import { Toggle } from "../../Components/Toggle/ToggleSwitch/Toggle.tsx";
import { IconToggle } from "../../Components/Toggle/IconToggle/IconToggle.tsx";
import { useState } from "react";
import {
  BsArrowRight,
  BsArrowLeft,
  BsArrowUp,
  BsArrowDown,
} from "react-icons/bs";
import { MdFormatListBulleted, MdGridView } from "react-icons/md";
type Props = {
  options: string;
};

export const Toggles: Story<Props> = ({}) => {
  const [value, setValue] = useState("one");

  const handleChange = (value: string) => {
    setValue(value);
    console.log(value);
  };

  const icons = [
    <BsArrowLeft />,
    <BsArrowUp />,
    <BsArrowRight />,
    <BsArrowDown />,
    "Test",
  ];

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
        name="two"
        labels={icons}
        values={["left", "up", "right", "down", ""]}
        setChecked={handleChange}
      ></Toggle>
      <Toggle
        name="mmonth"
        values={["one", "two", "three", "four", "five"]}
        labels={["January", "February", "March", "April", <BsArrowDown />]}
        setChecked={handleChange}
        iconSize={"24px"}
      ></Toggle>
      {value}
    </div>
  );
};
export const IconToggles: Story<Props> = ({}) => {
  const [value, setValue] = useState("one");

  const [icons, setIcons] = useState([
    <BsArrowLeft />,
    <BsArrowUp />,
    <BsArrowRight />,
    <BsArrowDown />,
    "Test",
  ]);

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <IconToggle
        name="two"
        variant="booking"
        values={["List", "Grid"]}
        setChecked={handleChange}
      ></IconToggle>
      <IconToggle
        name="free"
        icons={icons}
        variant="free"
        values={["left", "up", "right", "down", ""]}
        setChecked={handleChange}
      ></IconToggle>

      {value}
    </div>
  );
};
