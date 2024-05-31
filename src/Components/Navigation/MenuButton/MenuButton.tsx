import type { Story } from "@ladle/react";
import styles from "./MenuButton.module.css";
import { IconContext } from "react-icons";

type Props = {
  icon: any;
  label: string;
  link: string;
  disabled?: boolean;
  iconSize?: string;
};

export const MenuButton: Story<Props> = ({
  icon,
  iconSize = "24px",
  disabled,
  link,
  label,
}: Props) => (
  <div className={`${styles.a}`} disabled={disabled}>
    <IconContext.Provider value={{ size: iconSize }}>
      <div className={styles.buttonLabel}>
        {icon}
        {label}
      </div>
    </IconContext.Provider>
  </div>
);
