import type { Story } from "@ladle/react";
import styles from "./Button.module.css";
import { MdDirectionsRun } from "react-icons/md";


type Props = { 
  label: string;
  disabled: boolean;
  color: string[];
  variant: string;
  icon: string;
  size: string;
  state: string;
 };

function getVariant(variant: any): string {
  let className: string;

  switch (variant) {
    case "warning":
      className = styles.warning;
      break;
    default:
      className = styles.primary;
  }
  return className;
}

export const Button: Story<Props> = ({label, variant, disabled, icon})  => (
  <button className={`${getVariant(variant)} ${styles.button}`} disabled={disabled}>

    {icon==="left" ? <MdDirectionsRun /> : ""} 
    {label ?? `${disabled ? "Disabled" : (variant ? variant.substring(0,1).toUpperCase()+variant.substring(1) : "")}`}
    {icon==="right" ? <MdDirectionsRun /> : ""} 
  </button>
);


Button.defaultProps = {
  variant: 'primary'
}