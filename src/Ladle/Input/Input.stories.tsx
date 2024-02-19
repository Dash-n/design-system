import type { Story } from "@ladle/react";
import { TextInput } from "../../Components/Input/Text/TextInput.tsx";

type Props = {
  options: string;
};

export const Inputs: Story<Props> = ({}) => (
  <div style={{ width: "300px" }}>
    <TextInput id="name" name="name" label="Name"></TextInput>
    <TextInput id="name" name="test"></TextInput>
    <TextInput
      id="country"
      name="country"
      label="Country"
      placeholder="Hong Kong"
      size={5}
    ></TextInput>
    <TextInput
      id="disabled"
      name="nothing"
      label="Disabled"
      disabled
    ></TextInput>
  </div>
);
