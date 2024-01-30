import type { Story } from "@ladle/react";
import { Checkbox } from "../../../Components/Input/Checkbox/Checkbox.tsx";
import { useState } from "react";

type Props = {
  options: string;
};

export const Checkboxes: Story<Props> = ({}) => {
  const [oneChecked, setOneChecked] = useState(true);
  const [twoChecked, setTwoChecked] = useState(true);

  return (
    <div>
      <Checkbox
        value="1"
        name="test"
        label={`One Selected: ${oneChecked}`}
        checked={oneChecked}
        setChecked={setOneChecked}
      ></Checkbox>
      <Checkbox
        value="2"
        name="test"
        label={`Two Selected: ${twoChecked}`}
        checked={twoChecked}
        setChecked={setTwoChecked}
      ></Checkbox>
      <div>
        Checked: {oneChecked && "1"} {twoChecked && "2"}{" "}
      </div>
    </div>
  );
};
