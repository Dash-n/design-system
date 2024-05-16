import type { Story } from "@ladle/react";
import "./style.css";
import styles from "./Date.module.css";
import { format, parse, isValid } from "date-fns";
import { ChangeEventHandler, useState } from "react";
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

  const handleDayChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
    // setInputValue(e);
    const date = parse(e.currentTarget.value, "y-MM-dd hh:mm", new Date());
    // if (isValid(date)) {
    //   setSelected(date);
    // } else {
    //   setSelected(undefined);
    // }
  };

  const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTime(e.currentTarget.value);
    const newDatetime = `${inputValue.substring(0, 11)}${e.currentTarget.value}`;
    console.log(newDatetime);
    // setInputValue(e.currentTarget.value);
    setInputValue(newDatetime);
    // const date = parse(newDatetime, "y-MM-dd hh:mm", new Date());
    // if (isValid(date)) {
    //   setSelected(date);
    // } else {
    //   setSelected(undefined);
    // }
  };

  const handleDaySelect: SelectSingleEventHandler = (date) => {
    const hours = parseInt(time.substring(0, 2));
    const minutes = parseInt(time.substring(3, 5));
    date.setHours(hours, minutes);
    console.log(date);
    setSelected(date);
    if (date) {
      setInputValue(convertToDateTimeLocalString(date));
      // setInputValue(format(date, "y-MM-dd hh:mm"));
    } else {
      setInputValue("");
    }
  };

  const convertToDateTimeLocalString = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const openPopup = () => {
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
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
        {...inputProps}
        value={time}
        onChange={handleTimeChange}
        onFocus={openPopup}
      />
      {/* <input
        type="time"
        id="time"
        name={name}
        className={styles.input}
        value={inputValue.getTime}
      /> */}
    </div>
  );

  return (
    <div className={styles.daypickerContainer}>
      <DayPicker
        initialFocus={true}
        mode="single"
        disabled={{ before: startDate, after: endDate }}
        {...dayPickerProps}
        selected={selected}
        onSelect={handleDaySelect}
        footer={footer}
        required
      />
    </div>
  );
};
