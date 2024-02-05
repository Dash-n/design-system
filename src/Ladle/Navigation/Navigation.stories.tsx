import type { Story } from "@ladle/react";
import { MenuButton } from "../../Components/Navigation/MenuButton/MenuButton.tsx";
import { CardButton } from "../../Components/Navigation/CardButton/CardButton.tsx";
import { FolderButton } from "../../Components/Navigation/FolderButton/FolderButton.tsx";

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
export const CardButtons: Story<Props> = ({}) => (
  <div
    style={{
      display: "flex",
      gap: "8px",
      // width: "300px",
      flexDirection: "row",
    }}
  >
    <CardButton label="Inputs" link=""></CardButton>
    <CardButton label="Report" link=""></CardButton>
  </div>
);
export const FolderButtons: Story<Props> = ({}) => (
  <div
    style={{
      display: "flex",
      gap: "8px",
      // width: "300px",
      flexDirection: "row",
    }}
  >
    <FolderButton label="Inputs" link=""></FolderButton>
    <FolderButton label="Report" link=""></FolderButton>
  </div>
);
