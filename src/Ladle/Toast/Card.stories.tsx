import type { Story } from "@ladle/react";
import { Card } from "../../Components/Card/Card.tsx";

type Props = {
  content: any;
  disabled?: boolean;
  variant?: string;
};

const exampleContent = [
  {
    title: "Appointment Cancelled",
    content: "Physio has cancelled your appointment",
  },
];

export const Toasts: Story<Props> = ({ content, variant, disabled }) => (
  <div style={{ display: "flex", gap: "8px" }}>
    <Card variant={variant} content={exampleContent} />
  </div>
);
