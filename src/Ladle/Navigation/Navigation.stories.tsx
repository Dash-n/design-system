import type { Story } from "@ladle/react";
import { MenuButton } from "../../Components/Navigation/MenuButton/MenuButton.tsx";
import { CardButton } from "../../Components/Navigation/CardButton/CardButton.tsx";
import { FolderButton } from "../../Components/Navigation/FolderButton/FolderButton.tsx";
import styles from "./Navigation.stories.module.css";
import {
  MdEdit,
  MdList,
  MdEditNote,
  MdBuild,
  MdGroups,
  MdDirectionsRun,
  MdMedicalServices,
  MdMedication,
} from "react-icons/md";

type Props = {
  label?: string;
  disabled?: boolean;
  variant?: string;
  link?: string;
};

const menuItems = [
  { icon: <MdEdit />, label: "Inputs", link: "google.com" },
  { icon: <MdList />, label: "Database", link: "google.com" },
  { icon: <MdEditNote />, label: "Reports", link: "google.com" },
  { icon: <MdBuild />, label: "Gym Program", link: "google.com" },
  { icon: <MdGroups />, label: "Team", link: "google.com" },
  { icon: <MdDirectionsRun />, label: "Individual", link: "google.com" },
  { icon: <MdMedicalServices />, label: "Team Physio", link: "google.com" },
  { icon: <MdMedication />, label: "Physio", link: "" },
];

export const MenuButtons: Story<Props> = ({}) => (
  <div className={styles.buttonColumn}>
    {menuItems.map((item) => (
      <MenuButton
        key={item.label}
        icon={item.icon}
        label={item.label}
        link={item.link}
      />
    ))}
  </div>
);
export const CardButtons: Story<Props> = ({}) => {
  const Edit = () => {
    console.log("Edit");
  };
  const Delete = () => {
    console.log("Delete");
  };
  const Duplicate = () => {
    console.log("Duplicate");
  };

  return (
    <div className={styles.storyDiv}>
      <CardButton
        editCallback={Edit}
        deleteCallback={Delete}
        duplicateCallback={Duplicate}
        label="Inputs"
        link=""
      />
      <CardButton
        editCallback={Edit}
        deleteCallback={Delete}
        duplicateCallback={Duplicate}
        label="Report"
        link=""
      />
    </div>
  );
};

export const FolderButtons: Story<Props> = ({}) => {
  const Edit = () => {
    console.log("Edit");
  };
  const Delete = () => {
    console.log("Delete");
  };

  return (
    <div className={styles.storyDiv}>
      <FolderButton
        label="Inputs"
        link=""
        editCallback={Edit}
        deleteCallback={Delete}
      />
      <FolderButton
        label="Report"
        link=""
        editCallback={Edit}
        deleteCallback={Delete}
      />
    </div>
  );
};
