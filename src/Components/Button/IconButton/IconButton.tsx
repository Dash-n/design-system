import type { Story } from "@ladle/react";
import styles from "./IconButton.module.css";
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

export const IconButton: Story<Props> = ({ variant, disabled }) => (
  <button className={`${styles[variant]} ${styles.button}`} disabled={disabled}>
    {iconMappings[variant].icon}
  </button>
);

IconButton.defaultProps = {
  variant: "edit",
  label: "",
};
