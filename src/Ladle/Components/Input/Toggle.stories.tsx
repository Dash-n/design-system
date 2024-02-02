import type { Story } from "@ladle/react";
import { TwoWayToggle } from "../../../Components/Toggle/TwoWay/TwoWayToggle.tsx";
import { ThreeWayToggle } from "../../../Components/Toggle/ThreeWay/ThreeWayToggle.tsx";
import { useState } from "react";

type Props = {
  options: string;
};

export const TwoWayToggles: Story<Props> = ({}) => {
  const [oneChecked, setChecked] = useState("left");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <TwoWayToggle
        value="1"
        name="two"
        // checked={oneChecked}
        // setChecked={setChecked}
      ></TwoWayToggle>
      <ThreeWayToggle
        value="1"
        name="three"
        // checked={oneChecked}
        // setChecked={setChecked}
      ></ThreeWayToggle>
      <div>{/* Checked: {oneChecked && "1"} {twoChecked && "2"}{" "} */}</div>
    </div>
  );
};
