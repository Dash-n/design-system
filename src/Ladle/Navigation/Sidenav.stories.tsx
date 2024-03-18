import type { Story } from "@ladle/react";
import { User } from "../../Components/Sidenav/User/User";
import { SideHeader } from "../../Components/Sidenav/SideHeader/SideHeader";
import { TeamSelect } from "../../Components/Sidenav/TeamSelect/TeamSelect";
import { useState, useEffect } from "react";

type Props = {
  username: string;
  options: string[];
  text: string;
};

export const Users: Story<Props> = ({ username }) => (
  <div>
    <User username={username} />
  </div>
);
Users.args = {
  username: "Admin",
};
export const SideHeaders: Story<Props> = ({ text }) => (
  <div>
    <SideHeader text={text} />
  </div>
);
SideHeaders.args = {
  text: "header",
};

export const Selects: Story<Props> = ({ options }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div
      style={{
        // width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TeamSelect
        id="name"
        name="name"
        label="Superbowl"
        options={options}
        values={["one", "two"]}
        setAnswer={handleChange}
      ></TeamSelect>
    </div>
  );
};
Selects.argTypes = {
  options: {
    options: [
      "PolyU - Men's Basketball",
      "PolyU - Men's Handball",
      "PolyU - Men's Rugby",
      "PolyU - Men's Soccer",
    ],
    control: { type: "radio" },
    defaultValue: [
      "PolyU - Men's Basketball",
      "PolyU - Men's Handball",
      "PolyU - Men's Rugby",
      "PolyU - Men's Soccer",
    ],
  },
};
