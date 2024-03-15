import type { Story } from "@ladle/react";
import { SurveyInput } from "../../Components/Survey/SurveyInput";

type Props = {
  question: any;
  answers?: any[];
  type: string;
};

export const SurveyInputs: Story<Props> = ({ type, question, answers }) => (
  <div style={{ display: "flex", gap: "8px" }}>
    <SurveyInput
      question="Test Question?"
      answers={[]}
      type="select"
    ></SurveyInput>
  </div>
);

SurveyInputs.argTypes;
