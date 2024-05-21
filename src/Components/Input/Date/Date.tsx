import type { Story } from "@ladle/react";
import "./style.css";
import styles from "./Date.module.css";
import { format, parse, isValid } from "date-fns";
import { ChangeEventHandler, useState } from "react";
import { convertToDateTimeLocalString } from "../../../Utils/convertToDateTimeLocalString";
import {
  DayPicker,
  useInput,
  SelectSingleEventHandler,
} from "react-day-picker";

type Props = {
  id: string;
  label?: string;
  name: string;
  placeholder?: string;
  inputValue: string;
  setInputValue: (e) => void;
  open?: boolean;
  startDate?: Date;
  endDate?: Date;
};

export const Datepicker: Story<Props> = ({
  id,
  name,
  label,
  placeholder,
  inputValue,
  setInputValue,
  open = false,
  startDate,
  endDate,
}) => {
  const [selected, setSelected] = useState<Date>();
  const [isOpen, setIsOpen] = useState(open);
  const [time, setTime] = useState(inputValue.substring(11, 16));

  const { inputProps, dayPickerProps } = useInput({
    defaultSelected: new Date(),
    format: "PP",
    required: true,
  });

  const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTime(e.currentTarget.value);
    const newDatetime = `${inputValue.substring(0, 11)}${e.currentTarget.value}`;
    console.log(newDatetime);
    setInputValue(newDatetime);
  };

  const handleDaySelect: SelectSingleEventHandler = (selectedDate: Date) => {
    const hours = parseInt(time.substring(0, 2));
    const minutes = parseInt(time.substring(3, 5));
    selectedDate.setHours(hours, minutes);
    setSelected(selectedDate);
    if (selectedDate) {
      setInputValue(convertToDateTimeLocalString(selectedDate));
    } else {
      setInputValue("");
    }
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const footer = (
    <div className={styles.inputBox}>
      {inputValue}
      <input
        id={id}
        name={name}
        type="time"
        placeholder={placeholder}
        className={styles.input}
        value={time}
        onChange={handleTimeChange}
        onFocus={openPopup}
        {...inputProps}
      />
    </div>
  );

  return (
    <div className={styles.daypickerContainer}>
      <DayPicker
        initialFocus={true}
        mode="single"
        disabled={{ before: startDate, after: endDate }}
        selected={selected}
        onSelect={handleDaySelect}
        footer={footer}
        required
        {...dayPickerProps}
      />
    </div>
  );
};
