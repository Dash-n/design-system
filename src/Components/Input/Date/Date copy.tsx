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
      setInputValue(format(date, "y-MM-dd hh:mm"));
    } else {
      setInputValue("");
    }
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
      <input type="time" id="time" name={name} className={styles.inp} />
    </div>
  );

  return (
    <div>
      {isOpen && <div className={styles.overlay} onClick={closePopup} />}
      {!isOpen && (
        <div className={styles.inputBox}>
          <input
            id={id}
            name={name}
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
        </div>
      )}
      {isOpen && (
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
      )}
    </div>
  );
};
