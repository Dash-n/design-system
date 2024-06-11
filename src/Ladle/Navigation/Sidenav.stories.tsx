import type { Story } from "@ladle/react";
import { User } from "../../Components/Sidenav/User/User";
import { SideHeader } from "../../Components/Sidenav/SideHeader/SideHeader";
import { TeamSelect } from "../../Components/Sidenav/TeamSelect/TeamSelect";
import { Sidenav } from "../../Components/Sidenav/Sidenav.tsx";
import { MenuButton } from "../../Components/Navigation/MenuButton/MenuButton.tsx";
import { ChangeEventHandler, useState } from "react";
import styles from "./Navigation.stories.module.css";

import {
  MdInsights,
  MdFitnessCenter,
  MdList,
  MdEditNote,
  MdPerson,
  MdGroups,
  MdMedicalServices,
  MdMonitorHeart,
} from "react-icons/md";

type selectOption = {
  option: string;
  value?: string;
};

type Props = {
  username: string;
  options: selectOption[];
  text: string;
  teams: selectOption[];
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

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
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
      />
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

const menuItems = [
  { icon: <MdEditNote />, label: "Inputs", link: "google.com" },
  { icon: <MdList />, label: "Database", link: "google.com" },
  { icon: <MdInsights />, label: "Reports", link: "google.com" },
  { icon: <MdFitnessCenter />, label: "Gym Program", link: "google.com" },
];

const dashboards = [
  { icon: <MdGroups />, label: "Team", link: "google.com" },
  { icon: <MdPerson />, label: "Individual", link: "google.com" },
  { icon: <MdMedicalServices />, label: "Team Physio", link: "google.com" },
  { icon: <MdMonitorHeart />, label: "Physio", link: "" },
];

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
      {menuItems.map((item) => (
        <div className={styles.buttonContainer}>
          <MenuButton icon={item.icon} label={item.label} link={item.link} />
        </div>
      ))}
      <SideHeader label="Dashboards" />
      {dashboards.map((item) => (
        <div className={styles.buttonContainer}>
          <MenuButton icon={item.icon} label={item.label} link={item.link} />
        </div>
      ))}
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
