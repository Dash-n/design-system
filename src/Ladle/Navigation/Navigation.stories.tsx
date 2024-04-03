import type { Story } from "@ladle/react";
import { MenuButton } from "../../Components/Navigation/MenuButton/MenuButton.tsx";
import { CardButton } from "../../Components/Navigation/CardButton/CardButton.tsx";
import { FolderButton } from "../../Components/Navigation/FolderButton/FolderButton.tsx";
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

const storyDiv = {
  display: "flex",
  gap: "8px",
  width: "600px",
  flexDirection: "row",
};

export const MenuButtons: Story<Props> = ({}) => (
  <div
    style={{
      display: "flex",
      gap: "8px",
      width: "300px",
      flexDirection: "column",
    }}
  >
    <MenuButton icon={<MdEdit />} label="Inputs" link="google.com" />
    <MenuButton icon={<MdList />} label="Database" link="google.com" />
    <MenuButton icon={<MdEditNote />} label="Reports" link="google.com" />
    <MenuButton icon={<MdBuild />} label="Gym Program" link="google.com" />
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
    <MenuButton
      icon={<MdMedication />}
      label="Physio"
      link="?story=button--outline-buttons"
      disabled={true}
    />
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
    <div style={storyDiv}>
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
    <div style={storyDiv}>
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
