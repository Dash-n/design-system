import type { Story } from "@ladle/react";
import { Toast } from "../../Components/Toast/Toast.tsx";

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
  {
    title: "Physio has changed your appointment",
    content: "New time is Wednesday, August 16 @ 12:00pm",
  },
  {
    title: "Appointment Cancelled",
    content: "Physio has cancelled your appointment",
  },
  {
    title: "Appointment Cancelled",
    content: "New time is Wednesday",
  },
];

export const Toasts: Story<Props> = ({ content, variant, disabled }) => (
  <div style={{ display: "flex", gap: "8px" }}>
    <Toast variant={variant} content={exampleContent}></Toast>
  </div>
);
