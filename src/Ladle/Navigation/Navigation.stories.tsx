import type { Story } from "@ladle/react";
import { MenuButton } from "../../Components/Navigation/MenuButton/MenuButton.tsx";
import { CardButton } from "../../Components/Navigation/CardButton/CardButton.tsx";
import { FolderButton } from "../../Components/Navigation/FolderButton/FolderButton.tsx";
import { Sidenav } from "../../Components/Navigation/Sidenav/Sidenav.tsx";

type Props = {
  label?: string;
  disabled?: boolean;
  variant?: string;
  link?: string;
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
    <MenuButton variant="inputs" link="google.com"></MenuButton>
    <MenuButton variant="database" link="google.com"></MenuButton>
    <MenuButton variant="reports" link="google.com"></MenuButton>
    <MenuButton variant="builder" link="google.com"></MenuButton>
    <MenuButton variant="teamdash" link="google.com"></MenuButton>
    <MenuButton variant="indivdash" link="google.com"></MenuButton>
    <MenuButton variant="teamphysio" link="google.com"></MenuButton>
    <MenuButton variant="indivphysio" link="google.com"></MenuButton>
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
    <div
      style={{
        display: "flex",
        gap: "8px",
        // width: "300px",
        flexDirection: "row",
      }}
    >
      <CardButton
        editCallback={Edit}
        deleteCallback={Delete}
        duplicateCallback={Duplicate}
        label="Inputs"
        link=""
      ></CardButton>
      <CardButton
        editCallback={Edit}
        deleteCallback={Delete}
        duplicateCallback={Duplicate}
        label="Report"
        link=""
      ></CardButton>
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
    <div
      style={{
        display: "flex",
        gap: "8px",
        // width: "300px",
        flexDirection: "row",
      }}
    >
      <FolderButton
        label="Inputs"
        link=""
        editCallback={Edit}
        deleteCallback={Delete}
      ></FolderButton>
      <FolderButton
        label="Report"
        link=""
        editCallback={Edit}
        deleteCallback={Delete}
      ></FolderButton>
    </div>
  );
};
export const Sidenavs: Story<Props> = ({}) => (
  <div
    style={{
      width: "100%",
      height: "50vh",
      background: "#F4F4F4",
      position: "relative",
    }}
  >
    <Sidenav></Sidenav>
  </div>
);
