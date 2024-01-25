import type { Story } from "@ladle/react";
import styles from "./IconButton.module.css";
import { getVariant } from "../../index.ts";
import { MdEdit, MdSettings, MdDelete } from "react-icons/md";

type Props = {
  label?: string;
  disabled?: boolean;
  variant: string;
};

const iconMappings = {
  edit: { icon: <MdEdit />, label: "Inputs" },
  settings: { icon: <MdSettings />, label: "Settings" },
  delete: { icon: <MdDelete />, label: "Delete" },
};

const GetIcon = ({ variant }) => {
  const iconName = iconMappings[variant].icon;

  return iconName;
};

export const IconButton: Story<Props> = ({ variant, disabled }) => (
  <button
    className={`${getVariant(styles, variant)} ${styles.button}`}
    disabled={disabled}
  >
    <GetIcon variant={variant} />
  </button>
);

IconButton.defaultProps = {
  variant: "edit",
  label: "",
};
