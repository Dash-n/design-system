import type { Story } from "@ladle/react";
import { TextInput } from "../../Components/Input/Text/TextInput.tsx";
import { NumberInput } from "../../Components/Input/Number/NumberInput.tsx";
import { useState } from "react";

type Props = {
  options: string;
};

export const Inputs: Story<Props> = ({}) => {
  return (
    <div
      style={{
        width: "60px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TextInput id="name" name="name" label="Name"></TextInput>
      <TextInput id="name" name="test"></TextInput>
      <TextInput
        id="country"
        name="country"
        label="Country"
        placeholder="Hong Kong"
        size={5}
      ></TextInput>
      <TextInput
        id="disabled"
        name="nothing"
        label="Disabled"
        disabled
      ></TextInput>
    </div>
  );
};

export const NumberInputs: Story<Props> = ({}) => {
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    if (e.key === "Enter") {
      setValue(e.target.value);
    }
  };

  return (
    <div style={{ width: "60px" }}>
      <NumberInput
        id="name"
        name="name"
        min={0}
        max={10}
        updateValue={handleChange}
      ></NumberInput>
      <NumberInput
        id="name"
        name="name"
        min={0}
        max={10}
        label="Reps"
        updateValue={handleChange}
      ></NumberInput>
      {value}
    </div>
  );
};
