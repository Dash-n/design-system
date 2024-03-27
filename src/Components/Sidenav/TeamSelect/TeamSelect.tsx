import type { Story } from "@ladle/react";
import styles from "./TeamSelect.module.css";
import logo from "../../../images/polyulogo.png";

type selectOption = {
  option: string;
  value: string;
};
type Props = {
  id: string;
  name: string;
  label?: string;
  disabled?: boolean;
  options: selectOption[];
  setAnswer: (answer: any) => void;
};

export const TeamSelect: Story<Props> = ({
  id,
  name,
  disabled,
  options = [],
  setAnswer,
}) => (
  <div className={styles.selectBox}>
    <img className={styles.logo} src={logo} alt="one" />
    <select
      className={styles.select}
      id={id}
      name={name}
      disabled={disabled}
      onChange={setAnswer}
    >
      {options.map((option) => (
        <option value={option.value}>{option.option}</option>
      ))}
      ;
    </select>
  </div>
);
