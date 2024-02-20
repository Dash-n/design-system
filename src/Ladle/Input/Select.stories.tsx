import type { Story } from "@ladle/react";
import { Select } from "../../Components/Input/Select/Select.tsx";
import { useState } from "react";

type Props = {
  options: string;
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
