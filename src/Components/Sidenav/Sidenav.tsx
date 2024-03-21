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
  open?: boolean;
};

export const Sidenav: Story<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
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
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
          <TeamSelect
            id="name"
            name="name"
            options={[
              "PolyU - Men's Basketball",
              "PolyU - Men's Handball",
              "PolyU - Men's Rugby",
              "PolyU - Men's Soccer",
            ]}
            values={["one", "two"]}
            // setAnswer={handleChange}
          />
          <MenuButton variant="inputs" link="google.com"></MenuButton>
          <MenuButton variant="database" link="google.com"></MenuButton>
          <MenuButton variant="reports" link="google.com"></MenuButton>
          <MenuButton variant="builder" link="google.com"></MenuButton>
          <SideHeader text="Dashboards" />
          <MenuButton variant="teamdash" link="google.com"></MenuButton>
          <MenuButton variant="indivdash" link="google.com"></MenuButton>
          <MenuButton variant="teamphysio" link="google.com"></MenuButton>
          <MenuButton variant="indivphysio" link="google.com"></MenuButton>
        </div>
        <User username="Admin"></User>
      </div>
    </div>
  );
};
