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
    unread: true,
  },
  {
    title: "Physio has changed your appointment",
    content: "New time is Wednesday, August 16 @ 12:00pm",
    unread: true,
  },
  {
    title: "Appointment Cancelled",
    content: "Physio has cancelled your appointment",
    unread: true,
  },
  {
    title: "Appointment Cancelled",
    content: "New time is Wednesday",
    unread: false,
  },
];

export const Toasts: Story<Props> = ({ content, variant, disabled }) => (
  <div style={{ display: "flex", gap: "8px" }}>
    <Toast variant={variant} content={exampleContent} />
  </div>
);
