import type { Story } from "@ladle/react";
import { Button } from "../../Components/Button/Button/Button.tsx";
import { OutlineButton } from "../../Components/Button/OutlineButton/OutlineButton.tsx";
import { IconButton } from "../../Components/Button/IconButton/IconButton.tsx";
import { MdEdit, MdSettings, MdDelete } from "react-icons/md";

type Props = {
  label?: string;
  disabled?: boolean;
  variant?: string;
};

export const Buttons: Story<Props> = ({}) => (
  <div style={{ display: "flex", gap: "8px" }}>
    <Button variant="primary" label="primary"></Button>
    <Button variant="warning" label="warning button"></Button>
    <Button variant="primary" label="primary" disabled></Button>
    <Button variant="warning" label="warning" disabled></Button>
  </div>
);

export const OutlineButtons: Story<Props> = ({}) => (
  <div style={{ display: "flex", gap: "8px" }}>
    <span className="material-icons"></span>
    <OutlineButton variant="primary" label="primary"></OutlineButton>
    <OutlineButton variant="warning" label="warning button"></OutlineButton>
    <OutlineButton variant="primary" label="primary" disabled></OutlineButton>
    <OutlineButton variant="warning" label="warning" disabled></OutlineButton>
  </div>
);

export const IconButtons: Story<Props> = ({}) => (
  <div style={{ display: "flex", gap: "8px" }}>
    <IconButton variant="edit" iconSize="24px" label={<MdEdit />}></IconButton>
    <IconButton variant="settings" label={<MdSettings />}></IconButton>
    <IconButton variant="delete" label={<MdDelete />}></IconButton>
  </div>
);
