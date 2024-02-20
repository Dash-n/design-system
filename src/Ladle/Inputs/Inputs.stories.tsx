import type { Story } from "@ladle/react";
import { TextInput } from "../../Components/Input/Text/TextInput.tsx";
import { NumberInput } from "../../Components/Input/Number/NumberInput.tsx";
import { Checkbox } from "../../Components/Input/Checkbox/Checkbox.tsx";
import { Radio } from "../../Components/Input/Radio/Radio.tsx";
import { Select } from "../../Components/Input/Select/Select.tsx";
import { Slider } from "../../Components/Input/Slider/Slider.tsx";
import { useState } from "react";

type Props = {
  options: string;
};

export const TextInputs: Story<Props> = ({}) => {
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

export const Radios: Story<Props> = ({}) => {
  const [value, setValue] = useState("1");

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      <Radio
        value="1"
        name="test"
        label={`One Selected: ${value === "1"}`}
        checked
        setChecked={handleChange}
      ></Radio>
      <Radio
        value="2"
        name="test"
        label={`Two Selected: ${value === "2"}`}
        // checked={value === "2"}
        setChecked={handleChange}
      ></Radio>
      <Radio
        value="3"
        name="test"
        label={`Three Selected: ${value === "3"}`}
        // checked={value === "3"}
        setChecked={handleChange}
      ></Radio>
      <div>Value: {`${value}`}</div>
    </div>
  );
};

export const Selects: Story<Props> = ({}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div
      style={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Select
        id="name"
        name="name"
        label="Superbowl"
        options={["primary", "two"]}
        values={["one", "two"]}
        setAnswer={handleChange}
      ></Select>
      <div style={{ width: "60px" }}>
        <Select
          id="name"
          name="name"
          label="Superbowl"
          options={["primary", "two"]}
          values={["one", "two"]}
          setAnswer={handleChange}
        ></Select>
      </div>
      <Select
        id="name"
        name="two"
        options={["one", "two"]}
        values={["one", "two"]}
        setAnswer={handleChange}
      ></Select>
      {value}
    </div>
  );
};

export const Sliders: Story<Props> = ({}) => {
  const [value, setValue] = useState(20);

  return (
    <div>
      <Slider
        id="abc"
        name="234"
        min={0}
        max={100}
        step={10}
        value={value}
        setValue={setValue}
      />
      Value is: {value}
    </div>
  );
};
