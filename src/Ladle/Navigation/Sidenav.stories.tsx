import type { Story } from "@ladle/react";
import { User } from "../../Components/Sidenav/User/User";
import { SideHeader } from "../../Components/Sidenav/SideHeader/SideHeader";
import { TeamSelect } from "../../Components/Sidenav/TeamSelect/TeamSelect";
import { Sidenav } from "../../Components/Sidenav/Sidenav.tsx";
import { MenuButton } from "../../Components/Navigation/MenuButton/MenuButton.tsx";
import { useState } from "react";

import {
  MdDirectionsRun,
  MdEdit,
  MdList,
  MdEditNote,
  MdBuild,
  MdGroups,
  MdMedication,
  MdMedicalServices,
} from "react-icons/md";
type selectOption = {
  option: string;
  value: string;
};
type Props = {
  username: string;
  options: selectOption[];
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
    <SideHeader label={text} />
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
        setAnswer={handleChange}
      ></TeamSelect>
    </div>
  );
};
Selects.args = {
  options: [
    { option: "PolyU - Men's Basketball", value: "mbbal" },
    { option: "PolyU - Men's Handball", value: "mhbal" },
    { option: "PolyU - Men's Rugby" },
    { option: "PolyU - Men's Soccer" },
  ],
};

export const Sidenavs: Story<Props> = ({ teams }) => (
  <div
    style={{
      width: "100%",
      height: "80vh",
      background: "#F4F4F4",
      position: "relative",
    }}
  >
    <Sidenav teams={teams}>
      <MenuButton icon={<MdEdit />} label="Inputs" link="google.com" />
      <MenuButton icon={<MdList />} label="Database" link="google.com" />
      <MenuButton icon={<MdEditNote />} label="Reports" link="google.com" />
      <MenuButton icon={<MdBuild />} label="Gym Program" link="google.com" />
      <SideHeader label="Dashboards" />
      <MenuButton icon={<MdGroups />} label="Team" link="google.com" />
      <MenuButton
        icon={<MdDirectionsRun />}
        label="Individual"
        link="google.com"
      />
      <MenuButton
        icon={<MdMedicalServices />}
        label="Team Physio"
        link="google.com"
      />
      <MenuButton icon={<MdMedication />} label="Physio" link="google.com" />
    </Sidenav>
  </div>
);
Sidenavs.args = {
  teams: [
    { option: "PolyU - Men's Basketball", value: "mbbal" },
    { option: "PolyU - Men's Handball", value: "mhbal" },
    { option: "PolyU - Men's Rugby" },
    { option: "PolyU - Men's Soccer" },
  ],
};
