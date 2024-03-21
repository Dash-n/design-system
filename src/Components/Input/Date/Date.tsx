import type { Story } from "@ladle/react";
import "react-day-picker/dist/style.css";
import styles from "./Date.module.css";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

type Props = {
  id: string;
  label?: string;
  selected: any;
  footer: any;
  onSelect: any;
};

export const Date: Story<Props> = ({ selected, onSelect, footer }) => {
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
      footer={footer}
    />
  );
};
