import type { Story } from "@ladle/react";

type Props = { label: string };

export const Button: Story<Props> = ({ label }) => (
  <button>{label ?? "Button"}</button>
);
Button.args = {
  label: "Test",
};
