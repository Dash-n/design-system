import type { Story } from "@ladle/react";
import styles from "./IconButton.module.css";
import { IconContext, IconType } from "react-icons";

type Props = {
  icon?: IconType;
  disabled?: boolean;
  variant: string;
  iconSize?: string;
  onClick: () => void;
  customStyles?: string;
  customClass?: string;
};

export const IconButton: Story<Props> = ({
  variant = "primary",
  disabled,
  icon,
  iconSize = "24px",
  onClick,
  customStyles,
  customClass,
}) => (
  <button
    className={`${styles[variant]} ${styles.button} ${customClass}`}
    style={customStyles}
    disabled={disabled}
    onClick={onClick}
  >
    <IconContext.Provider value={{ size: iconSize }}>
      {icon}
    </IconContext.Provider>
  </button>
);
