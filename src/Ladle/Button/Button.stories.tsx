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
    <Button variant={variant} label={label} disabled={disabled} />
    <Button variant="primary" label="primary" />
    <Button variant="warning" label="warning button" />
    <Button variant="primary" label="primary" disabled />
    <Button variant="warning" label="warning" disabled />
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
    <OutlineButton variant={variant} label={label} disabled={disabled} />
    <OutlineButton variant="primary" label="primary" />
    <OutlineButton variant="warning" label="warning button" />
    <OutlineButton variant="primary" label="primary" disabled />
    <OutlineButton variant="warning" label="warning" disabled />
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
    <IconButton variant="edit" iconSize="24px" label={<MdEdit />} />
    <IconButton variant="settings" label={<MdSettings />} />
    <IconButton variant="delete" label={<MdDelete />} />
  </div>
);
