import type { Story } from "@ladle/react";
import styles from "./SurveyInput.module.css";
import { Select } from "../Input/Select/Select";
import { Radio } from "../Input/Radio/Radio";
import { IconButton } from "../Button/IconButton/IconButton";
import { TextInput } from "../Input/Text/TextInput";
import { MdRadioButtonChecked } from "react-icons/md";

type Props = {
  // label: string;
  disabled?: boolean;
  type: string;
  question: string;
  answers: any[];
};

export const SurveyInput: Story<Props> = ({ type, question, answers }) => {
  return (
    <div className={styles.questionContainer}>
      <div style={{ width: "100%" }}>
        <div className={styles.questionBar}>
          <IconButton
            variant="edit"
            label={<MdRadioButtonChecked />}
          ></IconButton>
          <TextInput
            id="question"
            name="question"
            label="#1"
            placeholder={question}
          />
        </div>
        <div className={styles.questionDiv}>
          <Radio id="1" name="1"></Radio>
          <TextInput id="1" name="1" />
        </div>
      </div>
    </div>
  );
};
// TextInputs.args = {
//   label: "Label",
//   placeholder: "Placeholder",
// };
