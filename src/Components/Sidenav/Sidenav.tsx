import type { Story } from "@ladle/react";
import styles from "./Sidenav.module.css";
import { useState } from "react";
import { MenuButton } from "../Navigation/MenuButton/MenuButton";
import { IconContext } from "react-icons";
import { MdMenu, MdArrowBack } from "react-icons/md";
import { User } from "./User/User";
import { TeamSelect } from "./TeamSelect/TeamSelect";
import { SideHeader } from "./SideHeader/SideHeader";

type Props = {
  children: React.ReactNode;
};

export const Sidenav: Story<Props> = ({ children }) => {
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
      ></div>

      <div className={`${styles.sidenav} ${isOpen ? styles.open : ""}`}>
        <div className={styles.navItemContainer}>
          <div>
            <button
              className={`${styles.toggleButton} ${styles.inside}`}
              onClick={toggleSidebar}
            >
              <IconContext.Provider value={{ size: "24px" }}>
                <MdArrowBack />
              </IconContext.Provider>
            </button>
          </div>
          <TeamSelect
            id="name"
            name="name"
            options={[
              { option: "PolyU - Men's Basketball", value: "mbbal" },
              { option: "PolyU - Men's Handball", value: "mhbal" },
              { option: "PolyU - Men's Rugby" },
              { option: "PolyU - Men's Soccer" },
            ]}
            values={["one", "two"]}
            // setAnswer={handleChange} //todo
          />
          {children}
        </div>
        <User username="Admin"></User>
      </div>
    </div>
  );
};
