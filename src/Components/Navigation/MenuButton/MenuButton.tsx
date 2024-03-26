import type { Story } from "@ladle/react";
import styles from "./MenuButton.module.css";
import { IconContext } from "react-icons";
import {
  MdDirectionsRun,
  MdEdit,
  MdList,
  MdEditNote,
  MdBuild,
  MdGroups,
  MdMedication,
  MdMedicalServices,
  MdBarChart,
} from "react-icons/md";

type Props = {
  icon: any;
  label: string;
  link: string;
  disabled?: boolean;
  variant: string;
};

// const iconMappings = {
//   inputs: { icon: <MdEdit />, label: "Inputs" },
//   database: { icon: <MdList />, label: "Database" },
//   reports: { icon: <MdEditNote />, label: "Reports" },
//   builder: { icon: <MdBuild />, label: "Gym Program" },
//   indivdash: { icon: <MdDirectionsRun />, label: "Individual" },
//   teamdash: { icon: <MdGroups />, label: "Team" },
//   teamphysio: { icon: <MdMedicalServices />, label: "Team Physio" },
//   indivphysio: { icon: <MdMedication />, label: "Physio" },
//   screening: { icon: <MdBarChart />, label: "Screening" },
// };

export const MenuButton: Story<Props> = ({
  icon,
  variant,
  disabled,
  link,
  label,
}: Props) => (
  <a
    href={link}
    className={`${styles[variant]} ${styles.a}`}
    disabled={disabled}
  >
    <IconContext.Provider value={{ size: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        {icon}
        {label}
        {/* {iconMappings[variant].icon} {iconMappings[variant].label} */}
      </div>
    </IconContext.Provider>
  </a>
);

MenuButton.defaultProps = {
  variant: "",
};
