import type { Story } from "@ladle/react";
import { Button } from "../../Components/Button/Button/Button.tsx";
import { OutlineButton } from "../../Components/Button/OutlineButton/OutlineButton.tsx";
import { IconButton } from "../../Components/Button/IconButton/IconButton.tsx";
import { MdEdit, MdSettings, MdDelete } from "react-icons/md";
import styles from "./Button.stories.module.css";

type Props = {
  label?: string;
  disabled?: boolean;
  variant?: string;
};

const onClick = () => {
  console.log("Pressed");
};

export const Buttons: Story<Props> = ({ label, variant, disabled }) => (
  <div style={{ display: "flex", gap: "8px" }}>
    <Button
      variant={variant}
      label={label}
      disabled={disabled}
      onClick={onClick}
    />
    <Button variant="primary" label="primary" onClick={onClick} />
    <Button variant="warning" label="warning button" onClick={onClick} />
    <Button variant="warning" label="warning button" onClick={onClick} />
    <Button variant="primary" label="primary" disabled onClick={onClick} />
    <Button variant="warning" label="warning" disabled onClick={onClick} />
    <Button label="Custom Class" customClass={styles.customClass} />
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
    <span className="material-icons" />
    <OutlineButton
      variant={variant}
      label={label}
      disabled={disabled}
      onClick={onClick}
    />
    <OutlineButton variant="primary" label="primary" onClick={onClick} />
    <OutlineButton variant="warning" label="warning button" onClick={onClick} />
    <OutlineButton variant="warning" label="warning button" onClick={onClick} />
    <OutlineButton
      variant="primary"
      label="primary"
      disabled
      onClick={onClick}
    />
    <OutlineButton
      variant="warning"
      label="warning"
      disabled
      onClick={onClick}
    />
    <OutlineButton label="Custom Class" customClass={styles.customClass} />
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
    <IconButton
      variant="edit"
      iconSize="24px"
      icon={<MdEdit />}
      onClick={onClick}
    />
    <IconButton variant="settings" icon={<MdSettings />} onClick={onClick} />
    <IconButton variant="delete" icon={<MdDelete />} onClick={onClick} />
    <IconButton
      customClass={styles.customClass}
      icon={<MdDelete />}
      onClick={onClick}
    />
  </div>
);
