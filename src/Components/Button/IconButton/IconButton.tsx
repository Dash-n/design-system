import type { Story } from "@ladle/react";
import styles from "./IconButton.module.css";
import { IconContext, IconType } from "react-icons";

type Props = {
  label?: IconType;
  disabled?: boolean;
  variant: string;
  iconSize?: string;
};

export const IconButton: Story<Props> = ({
  variant,
  disabled,
  label,
  iconSize = "24px",
}) => (
  <button className={`${styles[variant]} ${styles.button}`} disabled={disabled}>
    <IconContext.Provider value={{ size: iconSize }}>
      {label}
    </IconContext.Provider>
  </button>
);

IconButton.defaultProps = {
  variant: "solid",
};
