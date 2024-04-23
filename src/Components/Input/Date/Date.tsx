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
};

export const Datepicker: Story<Props> = ({ id, name, label }) => {
  const [selected, setSelected] = useState<Date>();
  const [inputValue, setInputValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const { inputProps, dayPickerProps } = useInput({
    defaultSelected: new Date(),
    format: "PP",
    required: true,
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
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
      <div className={styles.overlay} onClick={closePopup} />
      <div className={styles.inputBox}>
        <input
          id={id}
          name={name}
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
