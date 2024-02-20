import type { Story } from "@ladle/react";
import styles from "./IconButton.module.css";
import { MdEdit, MdSettings, MdDelete } from "react-icons/md";
import { IconContext } from "react-icons";

type Props = {
  label?: string;
  disabled?: boolean;
  variant: string;
  iconSize?: string;
};

const iconMappings = {
  edit: { icon: <MdEdit />, label: "Inputs" },
  settings: { icon: <MdSettings />, label: "Settings" },
  delete: { icon: <MdDelete />, label: "Delete" },
};

export const IconButton: Story<Props> = ({
  variant,
  disabled,
  iconSize = "24px",
}) => (
  <button className={`${styles[variant]} ${styles.button}`} disabled={disabled}>
    <IconContext.Provider value={{ size: iconSize }}>
      {iconMappings[variant].icon}
    </IconContext.Provider>
  </button>
);

IconButton.defaultProps = {
  variant: "edit",
  label: "",
};
