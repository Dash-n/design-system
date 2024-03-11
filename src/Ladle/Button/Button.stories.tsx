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

export const Buttons: Story<Props> = ({ label, variant, disabled }) => (
  <div style={{ display: "flex", gap: "8px" }}>
    <Button variant={variant} label={label} disabled={disabled}></Button>
    <Button variant="primary" label="primary"></Button>
    <Button variant="warning" label="warning button"></Button>
    <Button variant="primary" label="primary" disabled></Button>
    <Button variant="warning" label="warning" disabled></Button>
  </div>
);
Buttons.args = {
  label: "Label",
  disabled: false,
};
Buttons.argTypes = {
  variant: {
    options: ["primary", "warning"],
    control: { type: "radio" },
    defaultValue: "primary",
  },
};

export const OutlineButtons: Story<Props> = ({ label, variant, disabled }) => (
  <div style={{ display: "flex", gap: "8px" }}>
    <span className="material-icons"></span>
    <OutlineButton
      variant={variant}
      label={label}
      disabled={disabled}
    ></OutlineButton>
    <OutlineButton variant="primary" label="primary"></OutlineButton>
    <OutlineButton variant="warning" label="warning button"></OutlineButton>
    <OutlineButton variant="primary" label="primary" disabled></OutlineButton>
    <OutlineButton variant="warning" label="warning" disabled></OutlineButton>
  </div>
);
OutlineButtons.args = {
  label: "Label",
  disabled: false,
};
OutlineButtons.argTypes = {
  variant: {
    options: ["primary", "warning"],
    control: { type: "radio" },
    defaultValue: "primary",
  },
};
export const IconButtons: Story<Props> = ({}) => (
  <div style={{ display: "flex", gap: "8px" }}>
    <IconButton variant="edit" iconSize="24px" label={<MdEdit />}></IconButton>
    <IconButton variant="settings" label={<MdSettings />}></IconButton>
    <IconButton variant="delete" label={<MdDelete />}></IconButton>
  </div>
);
