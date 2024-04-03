import type { Story } from "@ladle/react";
import styles from "./TextInput.module.css";
import { useState, useEffect, useRef } from "react";

type Props = {
  id: string;
  label?: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  size?: number;
  updateValue?: () => void;
};

export const TextInput: Story<Props> = ({
  id,
  label,
  name,
  placeholder,
  disabled,
  maxLength,
  size,
  updateValue,
}) => {
  const [content, setContent] = useState("");
  const [width, setWidth] = useState(0);
  const span = useRef();

  // useEffect(() => {
  //   setWidth(span.current.offsetWidth);
  // }, [content]);

  const changeHandler = (evt) => {
    setContent(evt.target.value);
  };

  return (
    <div className={styles.inputBox}>
      <input
        className={styles.input}
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        size={size}
        onKeyUp={updateValue}
      />
      {label && (
        <label
          htmlFor={id}
          className={styles.label}
          // ref={span}
          // onChange={changeHandler}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export const controlInput = TextInput.bind({});

TextInput.args = {
  label: "Label",
  placeholder: "Placeholder",
};
