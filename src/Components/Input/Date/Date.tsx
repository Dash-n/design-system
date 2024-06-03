import type { Story } from "@ladle/react";
import "./style.css";
import styles from "./Date.module.css";
import { startOfYear, endOfYear, add, sub } from "date-fns";
import { ChangeEventHandler, useState } from "react";
import { convertToDateTimeLocalString } from "../../../Utils/convertToDateTimeLocalString";
import {
  DayPicker,
  useInput,
  SelectSingleEventHandler,
  DateRange,
} from "react-day-picker";

type Props = {
  id: string;
  label?: string;
  name: string;
  placeholder?: string;
  inputValue: string;
  setInputValue: (timeString: string) => void;
  open?: boolean;
  startDate?: Date;
  endDate?: Date;
};

export const Datepicker: Story<Props> = ({
  id,
  name,
  placeholder,
  inputValue,
  setInputValue,
  open = false,
  startDate,
  endDate,
}) => {
  const [selected, setSelected] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState(open);
  const [selectTime, setSelectTime] = useState(inputValue.substring(11, 16));

  const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSelectTime(e.currentTarget.value);
    const newDatetime = `${inputValue.substring(0, 11)}${e.currentTarget.value}`;
    setInputValue(newDatetime);
  };

  const handleDaySelect: SelectSingleEventHandler = (day: Date | undefined) => {
    const hours = parseInt(selectTime.substring(0, 2));
    const minutes = parseInt(selectTime.substring(3, 5));
    day?.setHours(hours, minutes);
    setSelected(day ?? new Date());
    if (day) {
      setInputValue(convertToDateTimeLocalString(day));
    } else {
      setInputValue("");
    }
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const footer = (
    <div className={styles.inputBox}>
      <input
        id={id}
        name={name}
        type="time"
        placeholder={placeholder}
        className={styles.input}
        value={selectTime}
        onChange={handleTimeChange}
        onFocus={openPopup}
      />
    </div>
  );

  return (
    <div className={styles.daypickerContainer}>
      <DayPicker
        initialFocus={true}
        numberOfMonths={1}
        mode="single"
        disabled={{ before: startDate, after: endDate } as unknown as DateRange}
        selected={selected}
        onSelect={handleDaySelect}
        showOutsideDays={true}
        footer={footer}
        fromDate={startOfYear(sub(new Date(), { years: 5 }))}
        toDate={endOfYear(add(new Date(), { years: 5 }))}
        captionLayout="dropdown"
        required
      />
    </div>
  );
};
