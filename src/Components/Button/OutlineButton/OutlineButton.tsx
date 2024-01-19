import type { Story } from "@ladle/react";
import styles from "./OutlineButton.module.css";
import { MdDirectionsRun } from "react-icons/md";


type Props = { 
  label: string;
  disabled: boolean;
  color: string[];
  variant: string;
  size: string;
  state: string;
  icon: string;
 };

function getVariant(variant: Variant): string {
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

export const OutlineButton: Story<Props> = ({label, variant, icon, disabled})  => (
  <button className={`${getVariant(variant)} ${styles.button}`} disabled={disabled}>
    {icon==="left" ? <MdDirectionsRun/> : ""} 
    {label ?? `${disabled ? "Disabled" : (variant ? variant.substring(0,1).toUpperCase()+variant.substring(1) : "")}`}
    {icon==="right" ? <MdDirectionsRun /> : ""}
  </button>
);


OutlineButton.defaultProps = {
  variant: 'primary'
}
