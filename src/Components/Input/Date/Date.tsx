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
};

export const Datepicker: Story<Props> = ({
  id,
  name,
  label,
  placeholder,
  inputValue,
  setInputValue,
  open = false,
}) => {
  const [selected, setSelected] = useState<Date>();
  const [isOpen, setIsOpen] = useState(open);
  const [time, setTime] = useState("");

  const { inputProps, dayPickerProps } = useInput({
    defaultSelected: new Date(),
    format: "PP",
    required: true,
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
    // setInputValue(e);
    const date = parse(e.currentTarget.value, "y-MM-dd hh:mm", new Date());
    if (isValid(date)) {
      setSelected(date);
    } else {
      setSelected(undefined);
    }
  };

  const handleDaySelect: SelectSingleEventHandler = (date) => {
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
      <input
        id={id}
        name={name}
        type="datetime-local"
        placeholder={placeholder}
        className={styles.input}
        {...inputProps}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={openPopup}
      />
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
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
        {...dayPickerProps}
        selected={selected}
        onSelect={handleDaySelect}
        footer={footer}
      />
    </div>
  );
};
