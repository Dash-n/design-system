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
};

export const Datepicker: Story<Props> = ({
  id,
  name,
  label,
  placeholder,
  inputValue,
  setInputValue,
}) => {
  const [selected, setSelected] = useState<Date>();
  const [isOpen, setIsOpen] = useState(false);

  const { inputProps, dayPickerProps } = useInput({
    defaultSelected: new Date(),
    format: "PP",
    required: true,
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
    // setInputValue(e);
    const date = parse(e.currentTarget.value, "y-MM-dd", new Date());
    if (isValid(date)) {
      setSelected(date);
    } else {
      setSelected(undefined);
    }
  };

  const handleDaySelect: SelectSingleEventHandler = (date) => {
    setSelected(date);
    if (date) {
      setInputValue(format(date, "y-MM-dd"));
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

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={closePopup} />}
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
        {isOpen && (
          <div>
            <div className={styles.daypickerContainer}>
              <DayPicker
                initialFocus={true}
                mode="single"
                {...dayPickerProps}
                selected={selected}
                onSelect={handleDaySelect}
                // footer={footer}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
