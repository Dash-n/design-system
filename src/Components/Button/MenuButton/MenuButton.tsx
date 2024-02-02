import type { Story } from "@ladle/react";
import styles from "./MenuButton.module.css";
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
  label?: string;
  disabled?: boolean;
  color?: string[];
  variant: string;
  icon?: string;
  size?: string;
  state?: string;
};

const iconMappings = {
  inputs: { icon: <MdEdit />, label: "Inputs" },
  database: { icon: <MdList />, label: "Database" },
  reports: { icon: <MdEditNote />, label: "Reports" },
  builder: { icon: <MdBuild />, label: "Gym Program" },
  indivdash: { icon: <MdDirectionsRun />, label: "Individual" },
  teamdash: { icon: <MdGroups />, label: "Team" },
  teamphysio: { icon: <MdMedicalServices />, label: "Team Physio" },
  indivphysio: { icon: <MdMedication />, label: "Physio" },
  screening: { icon: <MdBarChart />, label: "Screening" },
};

export const MenuButton: Story<Props> = ({ variant, disabled }) => (
  <button className={`${styles[variant]} ${styles.button}`} disabled={disabled}>
    {iconMappings[variant].icon} {iconMappings[variant].label}
  </button>
);

MenuButton.defaultProps = {
  variant: "",
};
