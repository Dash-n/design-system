import type { Story } from "@ladle/react";
import { Checkbox } from "../../Components/Input/Checkbox/Checkbox.tsx";
import { useState } from "react";

type Props = {
  options: string;
};

export const Checkboxes: Story<Props> = ({}) => {
  const [zeroChecked, setZeroChecked] = useState(true);
  const [oneChecked, setOneChecked] = useState(true);
  const [twoChecked, setTwoChecked] = useState(true);

  return (
    <div>
      <Checkbox
        id="one"
        name="test"
        checked={zeroChecked}
        setChecked={setZeroChecked}
      ></Checkbox>
      <Checkbox
        id="1"
        value="1"
        name="test"
        label={`One Selected: ${oneChecked}`}
        checked={oneChecked}
        setChecked={setOneChecked}
      ></Checkbox>
      <Checkbox
        id="2"
        value="2"
        name="test"
        label={`Two Selected: ${twoChecked}`}
        checked={twoChecked}
        setChecked={setTwoChecked}
      ></Checkbox>
      <div>
        Checked: {zeroChecked && "0"} {oneChecked && "1"} {twoChecked && "2"}{" "}
      </div>
    </div>
  );
};
