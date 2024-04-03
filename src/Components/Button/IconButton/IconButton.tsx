import type { Story } from "@ladle/react";
import styles from "./IconButton.module.css";
import { IconContext, IconType } from "react-icons";

type Props = {
  icon?: IconType;
  disabled?: boolean;
  variant: string;
  iconSize?: string;
  onClick: () => void;
  customStyles?: any;
};

export const IconButton: Story<Props> = ({
  variant,
  disabled,
  icon,
  iconSize = "24px",
  onClick,
  customStyles,
}) => (
  <button
    className={`${styles[variant]} ${styles.button}`}
    style={customStyles}
    disabled={disabled}
    onClick={onClick}
  >
    <IconContext.Provider value={{ size: iconSize }}>
      {icon}
    </IconContext.Provider>
  </button>
);
