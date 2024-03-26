import type { Story } from "@ladle/react";
import styles from "./IconButton.module.css";
import { IconContext, IconType } from "react-icons";

type Props = {
  label?: IconType;
  disabled?: boolean;
  variant: string;
  iconSize?: string;
  onClick: () => void;
};

export const IconButton: Story<Props> = ({
  variant,
  disabled,
  label,
  iconSize = "24px",
  onClick,
}) => (
  <button
    className={`${styles[variant]} ${styles.button}`}
    disabled={disabled}
    onClick={onClick}
  >
    <IconContext.Provider value={{ size: iconSize }}>
      {label}
    </IconContext.Provider>
  </button>
);

IconButton.defaultProps = {
  variant: "solid",
};
