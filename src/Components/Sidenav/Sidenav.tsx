import type { Story } from "@ladle/react";
import styles from "./Sidenav.module.css";
import { useState } from "react";
import { MenuButton } from "../Navigation/MenuButton/MenuButton";
import { IconContext } from "react-icons";
import { MdMenu, MdArrowBack } from "react-icons/md";
import { User } from "./User/User";
import { TeamSelect } from "./TeamSelect/TeamSelect";

type selectOption = {
  option: string;
  value: string;
};

type Props = {
  teams: selectOption[];
  children: React.ReactNode;
};

export const Sidenav: Story<Props> = ({ teams, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* outside toggle button */}
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        <IconContext.Provider value={{ size: "24px" }}>
          <MdMenu />
        </IconContext.Provider>
      </button>

      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
        onClick={toggleSidebar}
      />

      <div className={`${styles.sidenav} ${isOpen ? styles.open : ""}`}>
        <div className={styles.navItemContainer}>
          <div style={{ position: "relative" }}>
            <button
              className={`${styles.toggleButton} ${styles.inside}`}
              onClick={toggleSidebar}
            >
              <IconContext.Provider value={{ size: "24px" }}>
                <MdArrowBack />
              </IconContext.Provider>
            </button>
          </div>
          <TeamSelect id="teams" name="teams" options={teams} />
          {children}
        </div>
        <User username="Admin" />
      </div>
    </div>
  );
};
